import logoIcon from '../../assets/logo.png';

const Navigation = () => {
return (
  <nav className="navigation-bar">
    <Link to="/" className="logo-container">
      <img className="logo-icon" src={logoIcon}>
      </img>
    </Link>
  </nav>
)
}

export default Navigation;