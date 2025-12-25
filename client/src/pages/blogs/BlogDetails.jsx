import { useParams, Link } from "react-router-dom";
import blogData from "../../data/blogData";

function BlogDetails() {
  const { id } = useParams();

  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="page">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>

      <Link to="/blog">← Back to Blogs</Link>
    </div>
  );
}

export default BlogDetails;
