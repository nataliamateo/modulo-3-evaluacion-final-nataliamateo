const getDatafromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          image: character.image,
          episode: character.episode.length,
          gender: character.gender,
        };
      });

      characters.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      return characters;
    });
};

export default getDatafromApi;
