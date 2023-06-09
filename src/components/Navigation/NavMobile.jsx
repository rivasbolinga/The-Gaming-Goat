import { Link } from 'react-router-dom';
import {
  BsSearch,
  BsFillCartFill,

} from 'react-icons/bs';
import '../../styles/NavigationMobile.css';

const NavigationMobile = () => (
  <nav className="navigation-bar nav-mobile">
    <select name="genres" className="genre-selections mobile-selections">
      <option value="all">All</option>
      <option value="fighting">Fighting</option>
      <option value="shooter">Shooter</option>
      <option value="music">Music</option>
      <option value="platform">Platform</option>
      <option value="puzzle">Puzzle</option>
      <option value="racing">Racing</option>
      <option value="real-time-strategy-rts">RTS</option>
      <option value="role-playing-rpg">RPG</option>
      <option value="simulator">Simulator</option>
      <option value="sport">Sport</option>
    </select>

    <form className="search-form  form-mobile">
      <input
        className="search-input"
        type="text"
        placeholder="SEARCH"
      />
      <button type="button" className="search-btn">
        <BsSearch />
      </button>
    </form>
    <div className="icons-container icons-container-mobile">
      <Link to="/my-profile" className="my-cart link-icon mobile-icon">
        <BsFillCartFill />
      </Link>
    </div>
  </nav>
);

export default NavigationMobile;
