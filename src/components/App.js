import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header.js';
import Filters from './Filters.js';
import CharacterList from './CharacterList.js';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Filters />
        <CharacterList />
      </main>
    </>
  );
};

export default App;
