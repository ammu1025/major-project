import { useParams } from "react-router-dom";

const blogs = [
  {
    id: "1",
    title: "My Journey into Web Development",
    content:
      "This is where I share how I started learning frontend, the mistakes I made, and how I improved day by day.",
  },
  {
    id: "2",
    title: "Understanding React Basics",
    content:
      "React became easier once I understood components, props, and state properly.",
  },
  {
    id: "3",
    title: "Consistency Beats Motivation",
    content:
      "Motivation fades, but consistency builds real growth over time.",
  },
];

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div className="page">Blog not found</div>;
  }

  return (
    <div className="page">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
const blogs = [
  {
    id: 1,
    title: "My Journey into Web Development",
    description: "How I started learning frontend and what I struggled with.",
  },
  {
    id: 2,
    title: "Understanding React Basics",
    description: "Components, props, state, and why React feels powerful.",
  },
  {
    id: 3,
    title: "Consistency Beats Motivation",
    description: "Small daily steps that helped my personal growth.",
  },
];

function BlogList() {
  return (
    <div className="page">
      <h1>My Blogs</h1>

      <div className="blog-grid">
        {blogs.map((blog) => (
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
