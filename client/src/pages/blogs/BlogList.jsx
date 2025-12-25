import { Link } from "react-router-dom";
import blogData from "../../data/blogData";
function BlogList() {
  return (
    <div className="page">
      <h1>My Blogs</h1>

      <div className="blog-grid">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>

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
