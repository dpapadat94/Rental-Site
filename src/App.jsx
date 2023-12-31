import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
