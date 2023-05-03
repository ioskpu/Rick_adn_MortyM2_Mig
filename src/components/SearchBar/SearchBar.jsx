 import style from './SearchBar.module.css'
 import { useState } from "react";
 
 
 const SearchBar = ({onSearch}) => {
   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
      
   }

   const onClick = () => {
      onSearch(id)
   }
   return (
      <div className={style.contenedor}>
         <input type='search' onChange={handleChange}/> 
         <button onClick={onClick}>Agregar</button> 
      </div>
   );
};

export default SearchBar;
