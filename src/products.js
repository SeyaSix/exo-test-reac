function Products() {

  const ajoutAuPanier = (productName) => {
    console.log(`Ajouté au panier : ${productName}`);
  };
  
  return (
    <main>
      <article>
      <div class="product-item">
        <h2>Achetez cette magnifique paire de mocassins à glands</h2>
        <button onClick={() => ajoutAuPanier("mocassins à glands")}>
          300€
        </button>
        </div>
      </article>

      <article>
        <div class="product-item">
        <h2>Turbo mixeur 3000</h2>
        <button onClick={() => ajoutAuPanier("Turbo mixeur 3000")}>200€</button>
        </div>
      </article>

      <article>
        <div class="product-item">
        <h2>Aspire-tout</h2>

        <button onClick={() => ajoutAuPanier("Aspire-tout")}>350€</button>
        </div>
      </article>
      
    </main>
  );
}

export default Products;
