import logoIcon from '../../assets/logo.png';
import BsSearch from 'react-icons/bs';
import BsFillPersonFill from 'react-icons/bs';
import BsFillCartFill from 'react-icons/bs';

const Navigation = () => {
return (
  <nav className="navigation-bar">
    <Link to="/" className="logo-container">
      <img className="logo-icon" src={logoIcon}></img>
    </Link>
    <select name="genres" className="genre-selections">
      <option></option>
    </select>
    <form className='search-form'>
      <input className='search-input'
      type="text" placeholder='Search a game'>
      </input>
      <button className='search-btn'>
        <BsSearch />
      </button>
      <Link to="/" className='my-profile-link'>
        <BsFillPersonFill />
      </Link>
    </form>
  </nav>
)
}

export default Navigation;