import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Personal Growth 🚀</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;



