import { BsSearch, BsFillPersonFill, BsFillCartFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/logo.png';
import '../../styles/Navigation.css';

const Navigation = () => (
  <nav className="navigation-bar">
    <Link to="/" className="logo-container">
  <div className='logo'>The Gaming G.O.A.T.</div>
    </Link>
    <div className="filter-container">
      <div className="vertical-line" />
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
      <div className="vertical-line" />
    </div>
    <div className="form-container">
      <div className="vertical-line" />
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="SEARCH A GAME..."
        />
        <button type="button" className="search-btn">
          <BsSearch />
        </button>
      </form>
      <div className="vertical-line" />
    </div>
    <div className="icons-container">
      <div className="vertical-line" />
      <Link to="/" className="my-profile link-icon">
        <AiFillHeart className="nav-logo" />
      </Link>
      <div className="vertical-line" />
      <Link to="/my-profile" className="my-cart link-icon">
        <BsFillCartFill className="nav-logo" />
      </Link>
      <div className="vertical-line" />
      <Link to="/cart" className="my-cart link-icon">
        <BsFillPersonFill className="nav-logo" />
      </Link>
      <div className="vertical-line" />
    </div>
  </nav>
);

export default Navigation;
