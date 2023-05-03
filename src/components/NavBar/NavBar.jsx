import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'

const NavBar = ({onSearch, onRandom}) => {
    return (
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            <button onClick={onRandom}>Agregar random</button>
        </nav>
    )
};

export default NavBar;