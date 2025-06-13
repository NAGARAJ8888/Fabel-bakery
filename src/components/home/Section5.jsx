import React, { useState } from "react";
import "./Home.css";

export const Section5 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate success response and reset form
    setStatus({ success: true, message: "Your message has been sent!" });

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide message after 3 seconds
    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };

  const styles = {
    sectionMain: {
      position: "relative",
      backgroundImage: `url("/img/cor1.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "120vh",
    },
    backgroundOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      filter: "brightness(60%)",
    },
    container: {
      position: "relative",
      zIndex: 1,
    },
    box: {
      padding: "20px",
    },
  };

  return (
    <section style={styles.sectionMain}>
      <div style={styles.backgroundOverlay}></div>

      <div className="container-fluid d-flex justify-content-center pt-5" style={{ minHeight: "750px" }}>
        <div style={styles.container}>
          <div className="row">
            {/* Left Side */}
            <div className="col-md-7 text-white" style={styles.box}>
              <h5>Retail journey starts here</h5>
              <h1>World of possibilities</h1>

              <div className="row">
                <div className="col-md-5">
                  <img src="/img/spooncake.webp" alt="Product" className="img-fluid" />
                </div>
                <div className="col-md-7">
                  <p>Consultation Service.......................$ 20</p>
                  <p className="mb-5">Every product has been selected with care and consideration.</p>
                  <p>Customer Support...........................$ 20</p>
                  <p>World of possibilities, a treasure trove of carefully curated products.</p>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-12 p-3 fs-1 text-white" style={{ backgroundColor: "#B28564", textAlign: "end" }}>
                  +1 561 842 6141
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-5 bg-light formAdd">
              <div className="container p-5 min-vh-100 d-flex align-items-center">
                <div className="w-100">
                  <h4 className="text-center mb-4">Reach out to us today</h4>
                  <p>Have questions, feedback, or need assistance? Your message is valuable to us.</p>

                  {status && (
                    <div className={`alert ${status.success ? "alert-success" : "alert-danger"}`} role="alert">
                      {status.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control rounded-0"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        style={{ borderColor: "#B28564" }}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control rounded-0"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        style={{ borderColor: "#B28564" }}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <textarea
                        className="form-control rounded-0"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Enter your message"
                        style={{ borderColor: "#B28564" }}
                        required
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn w-100 rounded-0"
                        style={{ borderColor: "#B28564", color: "#B28564" }}
                      >
                        Send
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
