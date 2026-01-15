import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogList from "./pages/blogs/BlogList";
import BlogDetails from "./pages/blogs/BlogDetails";




function App() {
  return (
    <>
      <nav style={{ padding: "12px", background: "#222" }}>
        <Link to="/" style={{ marginRight: 15, color: "white" }}>Home</Link>
        <Link to="/blog" style={{ marginRight: 15, color: "white" }}>Blog</Link>
        <Link to="/about" style={{ marginRight: 15, color: "white" }}>About</Link>
        <Link to="/contact" style={{ color: "white" }}>Contact</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="page">
              <h1>🌱 Welcome to My Blogging Platform</h1>

              <p>
                Welcome to a space where thoughts turn into clarity and ideas turn
                into growth. This blogging platform is a collection of reflections,
                learnings, and insights drawn from everyday experiences.
              </p>

              <p>
                It is created for readers who enjoy meaningful content that
                inspires positive thinking and continuous self-improvement.
              </p>

              <h2>✍️ What This Blog Is About</h2>
              <p>
                This blog focuses on personal growth, motivation, learning, and
                life lessons. Each post is written with simplicity and honesty,
                aiming to connect real experiences with practical insights.
              </p>

              <p>
                Whether it’s a small thought or a deep realization, every article
                is meant to add value to your journey.
              </p>

              <h2>🌍 Why You’re Here</h2>
              <p>
                Life can feel overwhelming at times, and we all look for clarity,
                encouragement, and direction. This platform exists to share ideas
                that help you pause, reflect, and move forward with confidence.
              </p>

              <p>
                You’ll find content that is relatable, thoughtful, and easy to
                understand.
              </p>
            </div>
          }
        />
        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/blog" element={<BlogList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
