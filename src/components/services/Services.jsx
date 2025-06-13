const servicesData = [
  {
    title: "Custom Cakes",
    subtitle: "Celebration Designs",
    description: "Delight in our handcrafted cakes tailored to your events.",
  },
  {
    title: "Fresh Pastries",
    subtitle: "Daily Baked",
    description: "Enjoy warm croissants, danishes, and other flaky favorites.",
  },
  {
    title: "Bread Collection",
    subtitle: "From Sourdough to Multigrain",
    description: "Wholesome loaves baked fresh every morning.",
  },
  {
    title: "Coffee & Beverages",
    subtitle: "Perfect Pairings",
    description: "Savor rich coffee and refreshing drinks with your bakes.",
  },
];

const reviews = [
  {
    name: "Priya Shah",
    text: "Absolutely loved the custom cake! Beautifully decorated and so delicious!",
  },
  {
    name: "Ravi Kumar",
    text: "The croissants are my morning go-to. So fresh and flaky every time!",
  },
  {
    name: "Anita Mehra",
    text: "Their customer service is amazing. Ordered a last-minute cake and it was perfect!",
  },
];


export const Services = () => {
  return (
    <>
    <section className="hero-section text-center text-white d-flex align-items-center justify-content-center">
  <div>
    <h1 className="display-4 fw-bold">Freshly Baked Happiness Daily</h1>
    <p className="lead">Made with love, served with warmth.</p>
    <button className="btn btn-danger mt-3">Explore Our Menu</button>
  </div>
</section>

<section className="service-cards-section py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5">Our Signature Delights</h2>
    <div className="row g-4">
      {servicesData.map((item, idx) => (
        <div className="col-md-6 col-lg-3" key={idx}>
          <div className="service-card p-4 shadow text-center h-100">
            <img src={item.icon} alt={item.title} className="mb-3" width="60" />
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="process-section py-5">
  <div className="container text-center">
    <h2 className="mb-4">How We Bake</h2>
    <div className="row justify-content-center">
      {[
        "We Pick Fresh Ingredients",
        "Mix & Knead with Love",
        "Bake to Golden Perfection",
        "Serve to Delight You",
      ].map((step, i) => (
        <div className="col-6 col-md-3" key={i}>
          <div className="process-step p-3">
            <div className="step-circle">{i + 1}</div>
            <p>{step}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="testimonials bg-pink py-5">
  <div className="container text-center">
    <h2 className="mb-5">What Our Customers Say</h2>
    <div className="row g-4">
      {reviews.map((review, index) => (
        <div className="col-md-4" key={index}>
          <blockquote className="p-4 shadow-sm bg-white rounded">
            <p>"{review.text}"</p>
            <footer className="mt-3">- {review.name}</footer>
          </blockquote>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="cta-contact text-white py-5 text-center">
  <div className="container">
    <h2 className="mb-3">Have a Special Order?</h2>
    <p className="mb-4">Let’s create something delicious together.</p>
    <button className="btn btn-outline-light">Contact Us</button>
  </div>
</section>

</>
  );
};

export default Services;
