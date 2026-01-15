import { useParams, Link } from "react-router-dom";
import blogs from "../../data/blogData.js";

function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="page">
      <h1>{blog.title}</h1>

      <p style={{ whiteSpace: "pre-line", marginTop: "20px" }}>
        {blog.content}
      </p>

      <Link to="/blog">⬅ Back to Blogs</Link>
    </div>
  );
}

export default BlogDetails;
