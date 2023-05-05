import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'
import { Link } from "react-router-dom";

const NavBar = ({onSearch, onRandom}) => {
    return (
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            <button onClick={onRandom}>Agregar random</button>
            <div className={style.navLink}>
          <Link to="/home" className={style.navHome}>
            <button className="btn">Home</button>
          </Link>        

          <Link to="/about" className={style.navAbout}>
            <button className="btn">Sobre mi</button>
          </Link>
      </div>
        </nav>
    )
};

export default NavBar;