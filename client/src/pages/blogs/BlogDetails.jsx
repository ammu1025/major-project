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
