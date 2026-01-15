import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I’m Swathi 👋</h1>
        <p>
          Welcome to my personal blog where I share my learning journey,
          thoughts, and experiences in web development and personal growth.
        </p>

        <div className="hero-buttons">
          <Link to="/blog" className="btn">Read Blogs</Link>
          <Link to="/contact" className="btn outline">Contact Me</Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <h2>Why this blog?</h2>
        <p>
          This platform is my space to document learning, mistakes,
          improvements, and insights — helping others who are on the same path.
        </p>
      </section>
    </div>
  );
}

export default Home;
