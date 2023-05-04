import './App.css';
//import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
//import characters, { Rick } from './data.js';
//import style from './App.module.css'
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([])
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            
            if (!data.name) {
               window.alert('¡No hay personajes con este ID!');
            }  
            else if (!characters.find(e => e.id === Number(id))) {
               setCharacters((characters) => [...characters, data]);
            }
            else {
               window.alert(`¡El personaje con id ${id} ya fue agregado!`);
            }
         });
   }
   function onRandom() {
      axios.get(`https://rickandmortyapi.com/api/character`).then(({data}) => {
         let random = Math.floor(Math.random() * data.info.count) + 1;
         axios(`https://rickandmortyapi.com/api/character/${random}`)
            .then(({ data }) => { setCharacters((characters) => [...characters, data])});
      })
   }
   const onClose = (id) => {
      setCharacters(characters.filter((event) => event.id !== Number(id)))
   }
   return (
      <div className='App'>         
         <NavBar onSearch={onSearch} onRandom={onRandom}/>         
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;