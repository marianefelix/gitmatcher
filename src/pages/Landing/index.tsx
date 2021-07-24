import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Emoji from 'react-emoji-render';

import UserHeader from '../../components/UserHeader';
import UserCard from '../../components/UserCard';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import MatchModal from '../../components/MatchModal';

import searchIcon from '../../assets/icons/search-icon.png';

import api from '../../services/api';

import 'react-toastify/dist/ReactToastify.css';
import '../../styles/global.css';
import './styles.css';

interface User {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  topLanguages: string[];
}

interface reposResponse {
  data: Language[];
}

interface Language {
  language: string;
}

function Landing() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [topLanguagesFirstUser, setTopLanguagesFirstUser] = useState<string[]>(
    []
  );
  const [topLanguagesSectUser, setTopLanguagesSectUser] = useState<string[]>(
    []
  );
  const [classHeaderFormTop, setClassHeaderFormTop] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [matchModal, setMatchModal] = useState<boolean>(false);
  const [itsAMatch, setItsAMatch] = useState('');

  async function handleSearchUser() {
    // verifica se campo do username eh vazio
    if (username === '')
      toast.error('Erro ao buscar usuário. O campo não pode ser vazio!');
    else {
      try {
        setLoading(true);

        // faz uma requisicao para obter os dados do usuario
        const response = await api.get(`/${username}`);
        const { name, login, avatar_url, html_url } = response.data;

        // se a requisicao acima der ok, executa a funcao abaixo
        if (response.status === 200) {
          getLanguages(name, login, avatar_url, html_url);
        }
      } catch (err) {
        setLoading(false);

        // verifica se o status da requisicao eh 404
        if (err.request.status === 404)
          toast.error('Usuário não encontrado. Digite um usuário válido!');
        else toast.error('Erro ao buscar usuário. Tente novamente.');
      }
    }
  }

  async function getLanguages(
    name: string,
    login: string,
    avatar_url: string,
    html_url: string
  ) {
    try {
      // faz uma requisicao get para obter os repositorios do user
      const response: reposResponse = await api.get(
        `${username}/repos?per_page=100`
      );

      // retorna um array com as linguagens dos repositorios obtidos na response
      const reposLanguages: string[] = response.data.map((item) => {
        const { language } = item;
        if (language) {
          return language;
        }
        return '';
      });

      console.log(reposLanguages);

      const languagesFrequency: Record<string, number> = {};

      // percorre o array reposLanguages
      // e adiciona as linguagens com suas respectivas frequencias no objeto languagesFrequency
      for (let i = 0; i < reposLanguages.length; i++) {
        const value = reposLanguages[i];

        if (value)
          languagesFrequency[value] = (languagesFrequency[value] || 0) + 1;
      }

      const mostUsedLanguage = getMostUsedLanguage(languagesFrequency);

      setUsers([
        ...users,
        {
          name,
          login,
          avatar_url,
          html_url,
          topLanguages: mostUsedLanguage,
        },
      ]);

      if (topLanguagesFirstUser.length === 0)
        setTopLanguagesFirstUser(mostUsedLanguage);
      else setTopLanguagesSectUser(mostUsedLanguage);

      clearUsernameValue();
      setLoading(false);
    } catch (err) {
      setLoading(false);

      toast.error('Erro ao obter informações do usuário. Tente novamente.');
    }
    setLoading(false);
  }

  function getMostUsedLanguage(
    languagesFrequency: Record<string, number>
  ): string[] {
    // faz um filtro nas chaves do objeto languagesFrequency
    // calcula o valor maximo presente nesse objeto
    // e retorna a(s) chave(s) que tem valor maximo
    // ou seja, retorna a linguagem mais usada

    return Object.keys(languagesFrequency).filter((value) => {
      return (
        languagesFrequency[value] ===
        Math.max.apply(null, Object.values(languagesFrequency))
      );
    });
  }

  function verifyMatch() {
    setMatchModal(true);

    let itsAMatch = 0;

    // percorre o array top languages first user
    // e verifica se o segundo array
    // tem algum elemento em comum com o primeiro array

    for (let j = 0; j < topLanguagesFirstUser.length; j++) {
      if (topLanguagesSectUser.indexOf(topLanguagesFirstUser[j]) >= 0) {
        itsAMatch += 1;
      }
    }

    if (itsAMatch > 0) setItsAMatch('s');
    else setItsAMatch('n');
  }

  function clear() {
    setUsers([]);
    setTopLanguagesFirstUser([]);
    setTopLanguagesSectUser([]);

    setItsAMatch('');
    setClassHeaderFormTop('');
  }

  function clearUsernameValue() {
    setUsername('');
  }

  function addClassLandingPage() {
    setClassHeaderFormTop('start');
  }

  function closeModal() {
    setMatchModal(false);
  }

  return (
    <div
      id={classHeaderFormTop ? `landing-page-${classHeaderFormTop}` : undefined}
      className="landing-page"
    >
      <ToastContainer />

      <header className="header">
        <div className="logo">
          <div className="github">
            <h1>GitHub</h1>
          </div>
          <h1>Matcher</h1>
        </div>
        <p className="description">Encontre seu parceiro de programação</p>

        <form
          className={users.length === 2 ? 'hide-form' : undefined}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearchUser();
          }}
        >
          <div className="box-search">
            <input
              type="text"
              value={username}
              placeholder="Digite o nome de um usuário do GitHub"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onClick={addClassLandingPage}
            />

            <button type={users.length === 2 ? 'button' : 'submit'}>
              <p>Buscar</p>
              <img src={searchIcon} alt="Ícone de fogo" />
            </button>
          </div>
        </form>
      </header>

      <main className="main">
        <Loading value={loading} />

        <div className="users">
          {!itsAMatch
            ? users.map((user, index) => {
                return (
                  <UserHeader
                    id={`user-header-${index + 1}`}
                    key={`user-header-${index + 1}`}
                    name={user.name}
                    login={user.login}
                    avatar_url={user.avatar_url}
                  />
                );
              })
            : users.map((user, index) => {
                return (
                  <UserCard
                    key={`user-card-${index + 1}`}
                    name={user.name}
                    login={user.login}
                    avatar_url={user.avatar_url}
                    html_url={user.html_url}
                    topLanguages={user.topLanguages}
                  />
                );
              })}
        </div>

        {!itsAMatch ? (
          <Button
            buttonState={users.length === 2 ? 'show verify' : 'hide'}
            onClick={verifyMatch}
          >
            Verificar
          </Button>
        ) : (
          <Button buttonState="show new-search" onClick={clear}>
            Nova busca
          </Button>
        )}

        <MatchModal value={matchModal} msg={itsAMatch}>
          <button type="button" onClick={closeModal}>
            Fechar
          </button>
        </MatchModal>
      </main>

      <footer className="footer">
        <p>
          Feito com
          <Emoji text=" ❤️ " />
          por
          <a
            href="https://www.linkedin.com/in/mariane-felix-642350171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariane Felix
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Landing;
