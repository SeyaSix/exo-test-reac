import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";



import image1 from '../img/alpine.jpg';
import image2 from "../img/mcl.jpg";


function Diapo() {

  
    return (
      <>
        <Header />
        <div className="diapo-c">
          {image1 }
        </div>
        <Footer />
      </>
    );
  }
  export default Diapo;