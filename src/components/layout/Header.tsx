import { Link } from 'react-router-dom';
import staticCopy from '../../staticCopy.json';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/">{staticCopy.header.logo}</Link>
        </h1>
      </div>
      <nav className="nav">
        <ul>
          {Object.entries(staticCopy.header.nav).map(([key, value]) => (
            <li key={key}>
              <Link to={`/${key === 'home' ? '' : key}`}>{value}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;