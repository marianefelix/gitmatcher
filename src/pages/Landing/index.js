import React, { useState } from 'react';

import api from '../../services/api';

import '../../assets/styles/global.css';

function Landing() {
  
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [topLanguagesFirstUser, setTopLanguagesFirstUser] = useState([]);
  const [topLanguagesSectUser, setTopLanguagesSectUser] = useState([]);
  const [errors, setErrors] = useState({});
  const [messageMatch, setMessageMatch] = useState('');
  
  async function handleSearchUser(){
    try{
      //faz uma requisicao para obter os dados do usuario
      const response = await api.get(`/${username}`);
      const { name, login, avatar_url, bio, html_url } = response.data;
          
      setUsers([
        ...users,
        {
          name, 
          login,
          avatar_url,
          bio,
          html_url,
        }
      ]);

      //se a requisicao acima der ok, executa a funcao abaixo
      if(response.status === 200){
        getLanguages();
      }

    } catch(err){
      //console.log(err);
      const errors = {};
 
      errors.user = 'Erro ao buscar usuário. Tente novamente.';
      setErrors(errors);
    }
  }

  async function getLanguages(){
    try{
      //faz uma requisicao get para obter os repositorios do user
      const response = await api.get(`${username}/repos`);

      //retorna um array com as linguagens dos repositorios obtidos na response
      const reposLanguages = await response.data.map(item => {
        if(item.language)
          return item.language;
      });

      var languagesFrequency = {};

      //percorre o array reposLanguages
      //e adiciona as linguagens com suas respectivas frequencias no objeto languagesFrequency
      for(let i = 0; i < reposLanguages.length; i++) {
        let value = reposLanguages[i];

        if(value)
          languagesFrequency[value] = (languagesFrequency[value] || 0) + 1; 
          //setLanguages(...languages, )
      }

      const mostUsedLanguage = getMostUsedLanguage(languagesFrequency);

      if(topLanguagesFirstUser.length === 0)
        setTopLanguagesFirstUser(mostUsedLanguage);
      else
        setTopLanguagesSectUser(mostUsedLanguage);

      clearUsernameValue();
      //rever
      setErrors({});

    } catch(err){
      const errors = {};

      errors.repos = 'Erro ao obter informações do usuário. Tente novamente';
      setErrors(errors);

      //console.log(err);
    }
  }

  function getMostUsedLanguage(languagesFrequency){
    // faz um filtro nas chaves do objeto languagesFrequency
    // calcula o valor maximo presente nesse objeto
    // e retorna a(s) chave(s) que tem valor maximo
    // ou seja, retorna a linguagem mais usada 
    
    return Object.keys(languagesFrequency).filter(value => {
      return languagesFrequency[value] === Math.max.apply(null, Object.values(languagesFrequency));
    });
  };

  function verifyMatch(){
    let itsAMatch = 0;    
    
    //comentario
    for(let j=0; j < topLanguagesFirstUser.length; j++){
      if(topLanguagesSectUser.indexOf(topLanguagesFirstUser[j]) >=0){
        itsAMatch+=1;
      }
    }
    
    if(itsAMatch > 0){
      setMessageMatch('deu match, bebê');
    }
    else{
      setMessageMatch('Vocês não tem nenhuma linguagem em comum');
    } 
  }

  function clear(){
    /*setUsers([[
      { name: '', login: '', avatar_url: '', bio: '', html_url: '' }
    ]]);*/

    setTopLanguagesFirstUser([]);
    setTopLanguagesSectUser([]);
    setErrors({});
    setMessageMatch('');
  }

  function clearUsernameValue(){
    setUsername('');
  }

  return (
    <div id="landing-page">
      <header>
        <div className="logo"></div>
        <p className="description"></p>
      </header>

      <main>
        <form 
          className={
            topLanguagesFirstUser && topLanguagesSectUser ? "hide-form" : "show-form"
          } 
          onSubmit={ e => {
            e.preventDefault();
            handleSearchUser();
          }}
        >
          <input 
            type="text" 
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
            
          />

          <div>
            {errors.user && <p>{errors.user}</p>}
            {errors.repos && <p>{errors.repos}</p>}
          </div> 

          <button type="submit">Buscar</button>
        </form>
      </main> 
    
    </div>
  );
}

export default Landing;
