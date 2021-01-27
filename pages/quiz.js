import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/component/Widget';
import QuizLogo from '../src/component/QuizLogo';
import QuizBackground from '../src/component/QuizBackground';
import Footer from '../src/component/Footer';
import GitHubCorner from '../src/component/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 60px;
  margin: auto 3%;
  @media screen and (max-width: 300px) {
    margin: auto;
    padding: 15px;
  }
`;

const { theme } = db;

export default function QuizPage() {
    const router = useRouter();
    const [name, setName] = React.useState('');
  
    return (
      <QuizBackground backgroundImage={db.projectUrl='https://images.alphacoders.com/855/thumb-350-855967.jpg'}>
        <Head>
          <title>AluraQuiz - Questions</title>
        </Head>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.onSubmit='title'}</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${db.projectUrl ='https://images.alphacoders.com/855/thumb-350-855967.jpg'}`);
                console.log('Fazendo uma submissão por meio do react');
              }}
              >
                <input
                  onChange={function (alternatives) {
                    console.log(alternatives.target.value);
                    // State
                    // name = infosDoEvento.target.value;
                  }}
                  placeholder="Digite a sua resposta"
                />
                <button type="submit" disable={name.length === 0, 1, 2, 3}>
                  Enviar resposta
                </button>
              </form>
            </Widget.Content>
          </Widget>
  
          <Widget>
            <Widget.Content>
              <h1> db.alternatives </h1>
  
              <p></p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/PEDROKZN" />
      </QuizBackground>
    );
  }