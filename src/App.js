import './App.css';
import Detail from "./components/Detail/Detail"
import Cards from './components/Cards/Cards.jsx';
import About from "./components/About/About"
import Form from "./components/Form/Form";
import Start from './components/Start/Start';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';



function App() {
   const { pathname } = useLocation();
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
    }, [access]);

   // datos para acceso falsos
   const username = "henry@mail.com"
   const password = "henry2023"
   
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

   const handleLogin = (userData) => {
      if (userData.username === username && userData.password === password){
        setAccess(true);
        navigate("/home");
      }
      else alert("Datos incorrectos")
    }

   return (
      <div className="App">    
      {pathname !== "/" && <NavBar onSearch={ onSearch } setAccess = { setAccess } />}  

      <Routes>

      <Route path="/" element={<Start handleLogin={ handleLogin }/>} />

      <Route path='/start' element={<Form handleLogin={handleLogin}/>} Nav={false}/>

      <Route path="/home" element={<Cards characters={ characters } onClose={ onClose } />} />

      <Route path="/about" element={<About />} />

      {/* <Route path="/favorites" element={<Favorites />} /> */}

      <Route path="/detail/:id" element={<Detail />} />

      </Routes>
      
    </div>
   );
}

export default App;