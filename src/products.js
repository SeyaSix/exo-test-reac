function Products() {
  const productsFromDb = [
    {
      title: "scotch ",
      prix: 12,
      isPublished: true,
    },
    {
      title: "Aspirateur",
      prix: 299,
      isPublished: true,
    },
    {
      title: "Contre Plaqué",
      prix: 120,
      isPublished: true,
    },
    {
      title: "Sangles",
      prix: 25,
      isPublished: true,
    },
  ];

  return (
    <main>
      {productsFromDb.map((product) => {
        return (
          <article>
            <h2>{product.title}</h2>
            <p>{product.prix} €</p>
          </article>
        );
      })}
    </main>
  );
}

export default Products;







// import React, { useState } from 'react';

// function Products() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState('');

//   const ajouterAuPanier = (productName) => {
//     setSelectedProduct(productName);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const productFromDb = [
//     "Mocassins", "Charentaise", "Talon"
//   ];

//   return (



//     <main>
//       <>
//       {productFromDb.map((product)=>{
//         return (
//         <article>
//           <h2>{product}</h2>
//         </article>
//       );
//       })}
//       </>

//       <article>
//         <div className="product-item">
//           <h2>Achetez cette magnifique paire de mocassins à glands</h2>
//           <button onClick={() => ajouterAuPanier("mocassins à glands")}>
//             300€
//           </button>
//         </div>
//       </article>

//       <article>
//         <div className="product-item">
//           <h2>Turbo mixeur 3000</h2>
//           <button onClick={() => ajouterAuPanier("Turbo mixeur 3000")}>
//             200€
//           </button>
//         </div>
//       </article>

//       <article>
//         <div className="product-item">
//           <h2>Aspire-tout</h2>

//           <button onClick={() => ajouterAuPanier("Aspire-tout")}>350€</button>
//         </div>
//       </article>
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Ajouté au panier : {selectedProduct}</h2>
//             <button onClick={closePopup}>Fermer</button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// export default Products;
