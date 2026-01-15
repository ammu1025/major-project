import { Link } from "react-router-dom";
import blogs from "../../data/blogData.js";

function BlogList() {
  return (
    <div className="page">
      <h1>My Blogs</h1>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>

            <Link to={`/blog/${blog.id}`}>
              <button>Read More →</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
