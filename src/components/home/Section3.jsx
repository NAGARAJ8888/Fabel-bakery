import React from "react";
import "./Home.css"

export const Section3 = () => {
  const styles = {
    container: {
      width: "100%",
      margin: "auto",
      display: "flex",
      flexDirection: "row", // Default: Row layout
    },
    leftBox: {
      maxWidth: "40%",
      minHeight: "auto",
      // backgroundColor: "#f0f0f0",
      display: "flex",
      flexDirection: "column",
      // borderRight: "2px solid #ccc",
      // padding: "20px",
      position: "sticky",
      
      top: 0, // Keeps it fixed
    },
    rightBox: {
      width: "60%",
      height: "600px",
      overflowY: "auto",
      padding: "20px",
      backgroundColor: "#fff",
    },
  };

  return (
    <div className="container-fluid justify-content-between flex-lg-row flex-md-column" style={styles.container}>
      {/* Left: Sticky Carousel Section */}
      <div className="col-lg-6 col-md-6" style={styles.leftBox}>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
          
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/sec3img.jpg" className="d-block" style={{ width: "100%", height: "100vh", objectFit:"fill",display:"block" }}  alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/sec3img.jpg" className="d-block w-100" style={{height:"100vh"}} alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Scrollable Cards Section */}
      <div className="col-lg-6 col-md-6 mt-0" style={styles.rightBox}>
        <div className="container">
          <div className="row">
            {/* Cards (1 per row on md screens) */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="col-lg-6 col-md-12 d-flex justify-content-center mb-3">
                <div className="card" style={{ width: "18rem", border: "none" }}>
                  <img src="/img/sec3img.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
