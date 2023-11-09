import ProfileMenu from "./ProfileMenu";
import './App.css';
function Header() {
  return (
    <header className="h-container">
      <h1>Le blog sur blog de blogueur </h1>
      <nav className="nav-container">
        <div className="nav-header">
        <p>Navigation</p>
          <ul className="nav-list">
            <li>Home</li>
            <li>Articles</li>
            <li>Contact</li>
            <ProfileMenu />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;