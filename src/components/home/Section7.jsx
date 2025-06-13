import React from "react";

export const Section7 = () => {
  const styles = {
    container: {
      width: "100%",
      margin: "auto", // Centers horizontally
    },
    box: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "2px",
      align: "left",
      padding: "50px",
    },
  };
  return (
    <>
      <div className="container-fluid d-flex w-100">
        <div style={styles.container}>
          <div className="row">
            <div className="col-md-7 " style={styles.box}>
              <div className="w-100">
                <h5>Business Insights and Beyond</h5>
                <h1 style={{ fontSize: "3rem" }}>
                  <i>Unveiling the Revolution</i>
                </h1>
                <p style={{ lineHeight: "25px" }}>
                  In a rapidly evolving world, the only constant is change.
                  Nowhere is this truer than in the realms of technology and
                  innovation. As we stand on the precipice of the fourth
                  industrial revolution, it's essential to understand and adapt
                  to the seismic shifts shaping our future. It's no longer
                  enough to innovate incrementally; we must be ready to disrupt
                  ourselves.
                </p>
                <button
                  className="rounded-0 btn-outline py-2 px-5"
                  style={{ border: "1px solid #B28564", color: "#B28564" }}
                >
                  MORE INFO
                </button>
              </div>
              <div>
                <div className="container-fluid d-flex mt-5">
                  <div style={styles.container}>
                    <div className="row">
                      <div className="col-md-8 col-lg-6">
                        <div
                          id="carouselExampleIndicators"
                          className="carousel slide"
                          data-bs-ride=" corousel-fade"
                        >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img
                                src="/img/sec7img.jpg"
                                className="d-block w-100"
                                style={{
                                    objectFit: "cover",
                                    height: "100%", // Ensures it fills the container
                                    maxHeight: "500px", // Adjust this based on your design
                                    display: "block",
                                  }}
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="/img/sec7img.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="/img/sec7img.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-8 col-lg-6 gap-5 px-5 py-4 bg-dark text-white">
                        <h4 className="mt-2">Exploring Strategies</h4>
                        <p className="mt-3">Join us on this insightful journey as we uncover Join us on this insightful journey as we uncover  the tactics that drive progress.</p>
                        <h4 className="mt-5">Exploring Strategies</h4>
                        <p>Join us on this insightful journey as we uncover the tactics that Join us on this insightful journey as we uncover drive progress.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
                    <img src="/img/sec7img2.jpg" style={{height:"100%",width:"100%", objectFit:"cover"}} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
