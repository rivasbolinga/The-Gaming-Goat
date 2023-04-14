import logoIcon from '../../assets/logo.png';
import { BsSearch, BsFillPersonFill, BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import '../../styles/Navigation.css'
const Navigation = () => {
return (
  <nav className="navigation-bar">
    <Link to="/" className="logo-container">
      <img className="logo-icon" src={logoIcon}></img>
    </Link>
    <select name="genres" className="genre-selections">
      <option>All genres</option>
    </select>
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Search a game"
      ></input>
      <button className="search-btn">
        <BsSearch />
      </button>
    </form>
    <Link to="/" className="my-profile-link">
      <BsFillPersonFill />
    </Link>
    <Link to="/" className="my-profile-link">
      <BsFillCartFill />
    </Link>
  </nav>
)
}

export default Navigation;