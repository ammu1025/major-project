import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogList from "./pages/blogs/BlogList";
import BlogDetails from "./pages/blogs/BlogDetails";



function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          style={{
            marginLeft: "auto",
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer"
          }}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="page">
              <h1>Personal Growth 🚀</h1>
              <p>
                Building myself step by step through learning and practice.
              </p>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogList />} />
         <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
       

      </Routes>
    </>
  );
}

export default App;
