import React, { useState } from 'react';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";



import image1 from '../img/alpine.jpg';
import image2 from "../img/mcl.jpg";


function Diapo() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2];

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };
  
    return (
      <>
        <Header />
        <div className="diapo-c">
        <button className="diapo-button" onClick={prevImage}>Précédent</button>
        <img className="diapo-image" src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        <button className="diapo-button" onClick={nextImage}>Suivant</button>
        </div>
        <Footer />
      </>
    );
  }
  export default Diapo;