function Header() {

  const isUserLogged = true;

  const itemCart = 0;

    return (
      <header>
        <h1>Super ecommerce</h1>
        <nav>
          <ul>
            {isUserLogged ? <li>nom d'utilisateur</li> : <li>connectez vous</li>}
            <li>Home</li>
            <li>Products</li>
            {itemCart > 0 ? <li>Cart : {itemCart}</li> : <li>pas d'item dans le Panier</li>}

          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;