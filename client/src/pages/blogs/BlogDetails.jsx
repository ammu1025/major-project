import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Blog {id}</h1>
      <p>This is where the full blog content will appear.</p>
    </div>
  );
}

export default BlogDetails;
