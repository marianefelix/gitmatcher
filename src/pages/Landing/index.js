import React, { useState } from 'react';

import UserHeader from '../../components/UserHeader';
import UserCard from '../../components/UserCard';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import MessageMatch from '../../components/MessageMatch';

import fireIcon from '../../assets/images/tinder.png';

import api from '../../services/api';

import '../../assets/styles/global.css';
import './styles.css';


function Landing() {
  
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [topLanguagesFirstUser, setTopLanguagesFirstUser] = useState([]);
  const [topLanguagesSectUser, setTopLanguagesSectUser] = useState([]);
  const [errors, setErrors] = useState({});
  const [classHeaderFormTop, setClassHeaderFormTop] = useState('');
  const [loading, setLoading] = useState(false);
  const [itsAMatch, setItsAMatch] = useState('');
  const [matchComponent, setMatchComponent] = useState(false);
  
  async function handleSearchUser(){
    try{
      setLoading(true);

      //faz uma requisicao para obter os dados do usuario
      const response = await api.get(`/${username}`);
      const { name, login, avatar_url, bio, html_url } = response.data;
          
      //se a requisicao acima der ok, executa a funcao abaixo
      if(response.status === 200){
        getLanguages({ name, login, avatar_url, bio, html_url });
      }

    } catch(err){
      setLoading(false);
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

      let languagesFrequency = {};

      //percorre o array reposLanguages
      //e adiciona as linguagens com suas respectivas frequencias no objeto languagesFrequency
      for(let i = 0; i < reposLanguages.length; i++) {
        let value = reposLanguages[i];

        if(value)
          languagesFrequency[value] = (languagesFrequency[value] || 0) + 1; 
          //setLanguages(...languages, )
      }

      let mostUsedLanguage = getMostUsedLanguage(languagesFrequency);

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
      setErrors({});
      setLoading(false);

    } catch(err){
      setLoading(false);

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
    setMatchComponent(true);
    
    let itsAMatch = 0;    
    
    //comentario
    for(let j=0; j < topLanguagesFirstUser.length; j++){
      if(topLanguagesSectUser.indexOf(topLanguagesFirstUser[j]) >=0){
        itsAMatch+=1;
      }
    }
    
    if(itsAMatch > 0){
      setItsAMatch('Deu match');
    }
    else{
      setItsAMatch('Deu errado');
    } 

    setTimeout(() => {
      setMatchComponent(false);
    }, [3500]);
  }

  function clear(){
    setUsers([]);
    setTopLanguagesFirstUser([]);
    setTopLanguagesSectUser([]);

    setErrors({});
    setItsAMatch('');
    setClassHeaderFormTop('');

  }

  function clearUsernameValue(){
    setUsername('');
  }

  function addClassLandingPage(){
    setClassHeaderFormTop('start');
  }
  
  return (
    <div 
      id={classHeaderFormTop ? `landing-page-${classHeaderFormTop}` : null}
      className="landing-page"
    >
      <header className="header">
        <div className="logo">
          <div className="github">
            <h1>Git</h1>
            <h1>Hub</h1>
          </div>
          <h1>Matcher</h1>
        </div>
        <p className="description">Uma descrição top aqui sobre essa página top</p>
        
        <form 
          className={
            users.length === 2 ? "hide-form" : null
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
              onClick={addClassLandingPage} 
            />

            <button type={users.length === 2 ? "button" : "submit"}>
              <p>Buscar</p>
              <img src={fireIcon} alt="Ícone de fogo"/>
            </button>

            <div>
              {errors.user && <p>{errors.user}</p>}
              {errors.repos && <p>{errors.repos}</p>}
            </div>
          </div>
        </form>
      </header>

      <main className="main">
        <Loading value={loading}/>

        <div className="users">
          {
            !itsAMatch ? (
              users.map((user, index) => {
                return (
                  <UserHeader 
                    key={index}
                    name={user.name}
                    login={user.login}
                    avatar_url={user.avatar_url}
                  />
                )
              })  
            )
            : (
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
                    userCardState={false}
                  />
                )
              })
            )
          }
        </div>

        {
          !itsAMatch ? (
            <Button 
              buttonState={users.length === 2 ? "show verify" : "hide"} 
              onClick={verifyMatch}
            >
              Verificar
            </Button>
          )
          :
          (
            <Button 
              buttonState="show new-search" 
              onClick={clear}
            >
              Nova busca
            </Button> 
          )
        }

        <MessageMatch value={matchComponent} msg={itsAMatch} />
        
      </main> 

      <footer className="footer">
        <p>Feito com 
          <img src="" alt=""/>
          por 
          <a 
            href="https://www.linkedin.com/in/mariane-felix-642350171/" 
            target="_blank" 
            rel="noopener noreferrer">
              Mariane Felix
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Landing;
