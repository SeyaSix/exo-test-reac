import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Diapo from "./page/Diapo";
import Articles from "./page/Articles"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diapo" element={<Diapo />} />
        <Route path="/Articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
