import React, { useState, useEffect } from "react";
import "../styles/characters.css";
import api from "../api/axios";
import Profile from "./Profile";
import DetailModal from "../modals/DetailModal";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getCharacters = () => {
    api.get("?page=" + pageNumber.toString()).then((response) => {
      setCharacters(response.data.results);
    });
  };

  useEffect(() => getCharacters(), [pageNumber]);

  return (
    <div className="characters-container">
      {characters.map((character, i) => (
          <Profile
            name={character.name}
            height={character.height}
            mass={character.mass}
            hairColor={character.hair_color}
            skinColor={character.skin_color}
            eyeColor={character.eye_color}
            birthYear={character.birth_year}
            homeWorld={character.homeworld}
            imageIndex={i}
          />
       
      ))}
    </div>
  );
}

export default Characters;
