import ProfileMenu from "./ProfileMenu";
import { Link } from "react-router-dom";
import './App.css';
function Header() {
  return (
    <header className="h-container">
      <h1>Le blog du blog de blogueur </h1>
      <nav className="nav-container">
        <div className="nav-header">
        <p>Navigation</p>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li> <Link to="/diapo">Galerie</Link> </li>
            <ProfileMenu />
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;