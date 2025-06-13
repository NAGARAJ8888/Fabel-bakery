import React from "react";

export const Section1 = () => {
  const styles = {
    main: {
      position: "relative",
      backgroundImage: `url('/img/bg_img.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "500px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2px",
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark transparent overlay
      backdropFilter: "blur(5px)",
      zIndex: 1,
    },

    container: {
      position: "relative",
      zIndex: 2,
      width: "90%",
      margin: "auto",
    },

    heading: {
      fontSize: "80px",
      fontWeight: "bold",
      wordWrap: "break-word",
    },

    btn: {
      backgroundColor: "#B28564",
      textDecoration: "none",
      display: "inline-block",
      padding: "10px 20px",
      color: "white",
      borderRadius: "0",
      marginTop: "1.5rem",
    },
  };

  return (
    <>
      <section>
        <img
          src="/img/cake_img1.jpg"
          alt=""
          className="w-100"
          style={{ height: "100%"}}
        />

        <div className="container-fluid d-flex text-white" style={styles.main}>
          {/* Overlay */}
          <div style={styles.overlay}></div>

          <div style={styles.container}>
            <div className="row d-flex flex-lg-row flex-md-column">
              {/* Text Section */}
              <div className="col-lg-6 col-md-12 text-center text-md-start">
                <p>Elevate Excellence Daily</p>
                <i>
                  <h1 style={styles.heading}>Catalyzing Excellence:</h1>
                </i>
                <a href="#" style={styles.btn}>
                  DISCOVER MORE
                </a>
              </div>

              {/* Carousel Section */}
              <div className="col-lg-6 col-md-12 mt-md-4">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/img/sec1cor.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="/img/sec1cor.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="/img/sec1cor.jpg" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
