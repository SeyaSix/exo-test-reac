import React, { useState } from 'react';

function Products() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const ajouterAuPanier = (productName) => {
    setSelectedProduct(productName);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main>
      <article>
        <div class="product-item">
          <h2>Achetez cette magnifique paire de mocassins à glands</h2>
          <button onClick={() => ajouterAuPanier("mocassins à glands")}>
            300€
          </button>
        </div>
      </article>

      <article>
        <div class="product-item">
          <h2>Turbo mixeur 3000</h2>
          <button onClick={() => ajouterAuPanier("Turbo mixeur 3000")}>
            200€
          </button>
        </div>
      </article>

      <article>
        <div class="product-item">
          <h2>Aspire-tout</h2>

          <button onClick={() => ajouterAuPanier("Aspire-tout")}>350€</button>
        </div>
      </article>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Ajouté au panier : {selectedProduct}</h2>
            <button onClick={closePopup}>Fermer</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Products;
