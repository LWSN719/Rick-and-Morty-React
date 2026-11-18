
import { useState, useEffect } from "react";
import { Link } from "react-router";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );

      const data = await response.json();
      setCharacters(data.results);
    }

    getCharacters();
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <p>Explore characters from across the multiverse!</p>

      {characters.map((character) => (
        <div key={character.id}>
          <Link to={`/characters/${character.id}`}>
            <h2>{character.name}</h2>
            <img
              src={character.image}
              alt={character.name}
            />
          </Link>

          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      ))}
    </div>
  );
}

export default CharactersPage;
