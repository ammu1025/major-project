import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";



function Layout({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">MyBlog ✍️</h2>

           <div>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button
          className="theme-btn"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

     <main>
        <Outlet />
      </main>

    </>
  );
}

export default Layout;
