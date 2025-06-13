import React from 'react';

const blogPosts = [
  {
    title: "Secrets Behind Our Perfect Buttercream",
    date: "June 10, 2025",
    summary: "Our pastry chef shares how we make our smoothest, fluffiest buttercream frosting.",
    image: "cake.webp",
    featured: true,
  },
  {
    title: "Why Sourdough is the King of Breads",
    date: "May 28, 2025",
    summary: "Our starter has been alive for 5 years — here's why it matters.",
    image: "cake.webp",
    featured: true,
  },
  {
    title: "Behind-the-Scenes: A Day at Tastetrove",
    date: "May 12, 2025",
    summary: "From 5 AM baking to final garnishes — experience our bakery’s daily rhythm.",
    image: "cake.webp",
  },
  {
    title: "Behind-the-Scenes: A Day at Tastetrove",
    date: "May 12, 2025",
    summary: "From 5 AM baking to final garnishes — experience our bakery’s daily rhythm.",
    image: "cake.webp",
  },
];

const Blog = () => {
  return (
    <section className="blog-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 bakery-title">Tastetrove Bakery Journal</h2>

        {/* Featured Post */}
        <div className="row mb-5">
          {blogPosts.filter(p => p.featured).map((post, i) => (
            <div className="col-md-12" key={i}>
              <div className="m-3 featured-post d-md-flex align-items-center rounded shadow-sm">
                <img src={post.image} alt={post.title} className="featured-img rounded-start" />
                <div className="p-4">
                  <small className="text-muted">{post.date}</small>
                  <h3 className="mt-2">{post.title}</h3>
                  <p>{post.summary}</p>
                  <button className="btn btn-pink">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Posts */}
        <div className="row g-4">
          {blogPosts.filter(p => !p.featured).map((post, index) => (
            <div className="col-md-6" key={index}>
              <div className="blog-card shadow-sm p-3 rounded">
                <img src={post.image} alt={post.title} className="img-fluid rounded blog-img mb-3" />
                <small className="text-muted">{post.date}</small>
                <h5 className="mt-2">{post.title}</h5>
                <p>{post.summary}</p>
                <button className="btn btn-outline-pink">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
