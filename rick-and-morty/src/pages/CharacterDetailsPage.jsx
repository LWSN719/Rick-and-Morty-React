
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

function CharacterDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function getCharacter() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      const data = await response.json();
      setCharacter(data);
    }

    getCharacter();
  }, [id]);

  if (!character) {
    return <p>Loading character...</p>;
  }

  return (
    <div>
      <h1>{character.name}</h1>

      <img
        src={character.image}
        alt={character.name}
      />

      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>

      <button onClick={() => navigate("/characters")}>
        Back to Characters
      </button>
    </div>
  );
}

export default CharacterDetailsPage;
