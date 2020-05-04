// Write your Character component here
import React, { useState, useEffect } from 'react';
import CharacterCard from "./CharacterCard"
import axios from "axios";

function Character() {

    const [individual, setIndividual] = useState([]);

    useEffect(() => {
        axios
          .get("https://swapi.py4e.com/api/people/1/")
          .then(response => {
            console.log(response.data);
            setIndividual(response.data);
          })
          .catch(err => {
            console.log(err);
          });
      }, []);

    return (
        <div className="character-profile">
            {individual.map(info => {
                return (
                    <CharacterCard 
                    name={info.name}
                    height={info.height}
                    birth_year={info.birth_year}
                    gender={info.gender}
                    homeworld={info.homeworld}
                    />
                );
            })}

        </div>
    );
}

export default Character;