import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import Header from './Header.js';
import Filters from './Filters.js';
import CharacterList from './CharacterList.js';
import getDatafromApi from '../services/api.js';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDatafromApi().then((data) => setCharacters(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        <Filters />
        <CharacterList characters={characters} />
      </main>
    </>
  );
};

export default App;
