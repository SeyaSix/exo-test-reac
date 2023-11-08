function Header() {
  const userLogged = {
    lastname: "Mo",
    firstname: "Mathias",
    job: "dev",
  };

  const isUserLogged = true;

  const itemCart = 0;

  return (
    <header>
      <h1>Super ecommerce</h1>
      <nav>
        <ul>
          {isUserLogged ? (
            <li>
              {userLogged.firstname} {userLogged.lastname} - {userLogged.job}
            </li>
          ) : (
            <li>Veuillez vous connecter</li>
          )}

          <li>Home</li>
          <li>Products</li>

          {itemCart > 0 ? <li>Cart : {itemCart}</li> : <li>Pas d'item au panier</li>}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
