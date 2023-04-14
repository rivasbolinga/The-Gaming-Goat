import { Link } from 'react-router-dom';

const Error = () => (
  <section>
    <h1>404</h1>
    <h3>Sorry, the page you tried cannot be found</h3>
    <Link to="/" className="btn">
      back home
    </Link>
  </section>
);

export default Error;
