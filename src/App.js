import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Diapo from "./page/Diapo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diapo" element={<Diapo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
