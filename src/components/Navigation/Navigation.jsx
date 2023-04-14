import logoIcon from '../../assets/logo.png';
import { BsSearch, BsFillPersonFill, BsFillCartFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../../styles/Navigation.css';

const Navigation = () => {
return (
  <nav className="navigation-bar">
    <Link to="/" className="logo-container">
      <img className="logo-icon" src={logoIcon}></img>
    </Link>
    <div className="vertical-line"></div>
    <select name="genres" className="genre-selections">
      <option value="all">All genres</option>
      <option value="fighting">Fighting</option>
      <option value="shooter">Shooter</option>
      <option value="music">Music</option>
      <option value="platform">Platform</option>
      <option value="puzzle">Puzzle</option>
      <option value="racing">Racing</option>
      <option value="real-time-strategy-rts">Real Time Strategy (RTS)</option>
      <option value="role-playing-rpg">Role-playing (RPG)</option>
      <option value="simulator">Simulator</option>
      <option value="sport">Sport</option>
    </select>
    <div className="vertical-line"></div>
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="SEARCH A GAME.."
      ></input>
      <button className="search-btn">
        <BsSearch />
      </button>
    </form>
    <div className="icons-container">
      <div className="vertical-line"></div>
      <Link to="/" className="my-profile link-icon">
        <AiFillHeart />
      </Link>
      <div className="vertical-line"></div>
      <Link to="/my-profile" className="my-cart link-icon">
        <BsFillCartFill />
      </Link>
      <div className="vertical-line"></div>
      <Link to="/cart" className="my-cart link-icon">
        <BsFillPersonFill />
      </Link>
      <div className="vertical-line"></div>
    </div>
  </nav>
)
}

export default Navigation;