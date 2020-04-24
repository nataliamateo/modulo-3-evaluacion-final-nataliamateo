import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import getDatafromApi from '../services/api.js';
import CharacterDetailPj from './CharacterDetailPj.js';
import Filters from './Filters';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('all');

  // Call Api
  useEffect(() => {
    getDatafromApi().then((data) => setCharacters(data));
  }, []);

  // event handlers
  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'species') {
      setSpeciesFilter(data.value);
    }
  };

  //render data

  const filterCharacter = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      if (speciesFilter === 'all') {
        return true;
      } else {
        return character.species === speciesFilter;
      }
    });

  // render card detail
  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => character.id === characterId);
    // console.log(foundCharacter);
    if (foundCharacter !== undefined) {
      return <CharacterDetailPj character={foundCharacter} />;
    }
  };

  return (
    <div className='app'>
      <Header handleFilter={handleFilter} />
      <main>
        <Switch>
          <Route exact path='/'>
            <Filters className='header__form' handleFilter={handleFilter} />
            <CharacterList characters={filterCharacter} />
          </Route>
          <Route path='/:id' render={renderCharacterDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
