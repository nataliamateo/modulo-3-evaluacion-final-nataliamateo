import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import getDatafromApi from '../services/api.js';
import CharacterDetailPj from './CharacterDetailPj';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  // Call Api
  useEffect(() => {
    getDatafromApi().then((data) => setCharacters(data));
  }, []);

  // event handlers
  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    }
  };

  //render data

  const filterCharacter = characters.filter((character) => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  return (
    <>
      <Header handleFilter={handleFilter} />
      <main>
        <CharacterList characters={filterCharacter} />
        <CharacterDetailPj />
      </main>
    </>
  );
};

export default App;
