import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import getDatafromApi from '../services/api.js';
import CharacterDetailPj from './CharacterDetailPj.js';

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

  // render card detail
  const renderCharacterDetail = (props) => {
    console.log(props);
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === characterId;
    });
    return <CharacterDetailPj character={foundCharacter} />;
  };

  return (
    <>
      <Header handleFilter={handleFilter} />
      <main>
        <Switch>
          <Route exact path='/'>
            <CharacterList characters={filterCharacter} />
          </Route>
          <Route path='/character/:characterId' render={renderCharacterDetail} />
        </Switch>
      </main>
    </>
  );
};

export default App;
