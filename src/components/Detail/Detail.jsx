import React from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
const Detail = () => {
    const [character, setCharacter] = useState({});

    const { id } = useParams();

    useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);

return(
        <div>
            <img src={character.image && character.image} alt="" />
            <h1>Name: "{character.name && character.name}"</h1>
            <h1>Status: "{character.status && character.status}"</h1>
            <h1>Species: "{character.species && character.species}"</h1>
            <h1>Gender: "{character.gender && character.gender}"</h1>
            <h1>Origins: "{character.origin?.name && character.origin?.name}"</h1>

            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )
}
export default Detail;