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
            <button>Read More →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
