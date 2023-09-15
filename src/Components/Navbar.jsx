import {Link} from 'react-router-dom'
import styles from "./Navbar.module.css";
import { themeContext } from '../context/themeContext';
import { useContext } from 'react';

const Navbar = () => {
    let {theme, changeTheme} = useContext(themeContext) 
    //console.log(theme.opcion)
    return (
        <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm navbar-${theme.opcion} bg-${theme.opcion}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarOdonto"
            aria-controls="navbarOdonto"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarOdonto"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="/contact">
                  Contacto
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="/favs">
                  Destacados
                </Link>
              </li>
              <li className={`nav-item`}>
                <button
                  className={`btn btn-${theme.opcion} ${styles.btnStyle
                    }`}
                    onClick={changeTheme}
                >
                  {theme.opcion == "light" ? (<>🌙</>):(<>☀</>)}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    )
}

export default Navbar