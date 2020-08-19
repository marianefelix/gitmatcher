import React, { useState } from 'react';

import UserHeader from '../../components/UserHeader';

import fireIcon from '../../assets/images/tinder.png';

import api from '../../services/api';

import '../../assets/styles/global.css';
import './styles.css';
import UserCard from '../../components/UserCard';
import Button from '../../components/Button';

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
          
      //se a requisicao acima der ok, executa a funcao abaixo
      if(response.status === 200){
        getLanguages({ name, login, avatar_url, bio, html_url });
      }

    } catch(err){
      //console.log(err);
      const errors = {};
 
      errors.user = 'Erro ao buscar usuário. Tente novamente.';
      setErrors(errors);
    }
  }

  async function getLanguages({ name, login, avatar_url, bio, html_url }){
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

      setUsers([
        ...users,
        {
          name, 
          login,
          avatar_url,
          bio,
          html_url,
          topLanguages: mostUsedLanguage,
        }
      ]);

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
      <header className="header">
        <div className="logo">
          <div className="github">
            <p>Git</p>
            <p>Hub</p>
          </div>
          <p>Matcher</p>
        </div>
        <p className="description">Uma descrição top aqui sobre essa página top</p>
      </header>

      <main>
          {
            //rever
            users.length < 2 && (
                <form 
                  className={
                    users.length === 2 ? "hide-form" : "show-form"
                  }
                  onSubmit={ e => {
                    e.preventDefault();
                    handleSearchUser();
                  }}
                >
                  <div className="box-search">
                    <input 
                      type="text" 
                      value={username}
                      placeholder="Digite o nome de um usuário do GitHub"
                      onChange={(e) => {setUsername(e.target.value)}}
                      
                    />
                    <button type="submit">
                      <p>Buscar</p>
                      <img src={fireIcon} alt="Ícone de fogo"/>
                    
                    </button>

                    <div>
                      {errors.user && <p>{errors.user}</p>}
                      {errors.repos && <p>{errors.repos}</p>}
                    </div>
                  </div>
                  
                </form>
            ) 
          }
          
          {
            users.length > 0 && (
              <div className="users">
                {
                  !messageMatch ? 
                    users.map((user, index) => {
                      return (
                        <UserHeader 
                          key={index}
                          name={user.name}
                          login={user.login}
                          avatar_url={user.avatar_url}
                          //userHeaderState={ !messageMatch ? true : false }
                        />
                      )
                    })    
                  : 
                    users.map((user, index) => {
                      return (
                        <UserCard 
                          key={index}
                          name={user.name}
                          login={user.login}
                          avatar_url={user.avatar_url}
                          bio={user.bio}
                          html_url={user.html_url}
                          topLanguages={user.topLanguages}
                          userCardState={true}
                        />
                      )
                    })
                }
              </div>
            )
          }

          {
            users.length === 2 && (
              //rever onclick
              <Button buttonState={true} onClick={verifyMatch}>Verificar</Button>
            )
          }
      
      </main> 
    
    </div>
  );
}

export default Landing;
