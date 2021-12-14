import React, { useState, useEffect } from "react";
import "../styles/characters.css";
import api from "../api/axios";
import Profile from "./Profile";
import DetailModal from "../modals/DetailModal";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [tempList, setTempList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getCharacters = () => {
    console.log(pageNumber);

    api.get("?page=" + pageNumber.toString()).then((response) => {
      setTempList([...tempList, response.data.results]);
      if (pageNumber < 4) {
        setPageNumber(pageNumber + 1);
      } else {
        let flattenedArray = tempList.reduce((a, b) => a.concat(b), []);
        
        setCharacters(flattenedArray);
        console.log(characters);
      }
    });
  };

  useEffect(() => getCharacters(), [pageNumber]);

  return (
    <div className="characters-container">
      <div className="top-container">
        <h2 className="characters-title">Browse Characters</h2>
        <input
          className="search-input"
          type="text"
          placeholder="Search Characters..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="characters-grid">
        {characters.length > 0 ? (
          <>
            {characters
              .filter((val) => {
                if ((searchTerm == "")) {
                  return val;
                } else if (
                  val.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((character, i) => {
                return (
                  <DetailModal
                    name={character.name}
                    height={character.height}
                    mass={character.mass}
                    hairColor={character.hair_color}
                    skinColor={character.skin_color}
                    eyeColor={character.eye_color}
                    birthYear={character.birth_year}
                    homeWorld={character.homeworld}
                    imageIndex={i}
                    searchTerm={searchTerm}
                    key={i}
                  >
                    <Profile name={character.name} imageIndex={i} key={i} searchTerm={searchTerm} />
                  </DetailModal>
                );
              })}
          </>
        ) : (
          <>
            <div className="empty-container">
              <h2>Loading...</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Characters;
