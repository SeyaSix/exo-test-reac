function Header() {

  const isUserLogged = true;

    return (
      <header>
        <h1>Super ecommerce</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Products</li>
            {isUserLogged ? <li>nom d'utilisateur</li> : <li>connectez vous</li>
            }
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;