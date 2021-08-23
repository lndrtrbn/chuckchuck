import { useState } from 'react';

import ChuckApi from '../../services/chucknorris-api';
import Joke from '../../types/joke';
import ChuckBtn from '../ChuckBtn/ChuckBtn';

import './App.scss';

export default function App() {
  const [joke, setJoke] = useState<Joke>();

  async function getJoke() {
    const joke = await ChuckApi.getRandom();
    setJoke(joke);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Chuck Chuck</h1>
      </header>

      <ChuckBtn onClick={getJoke} />

      <p className="joke">
        {joke ? joke.value : "Dare punch my face!"}
      </p>
    </div>
  );
}
