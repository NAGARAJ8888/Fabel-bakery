import React from "react";
import "./Home.css";

export const Section2 = () => {
  const styles = {
    container: {
      width: "90%",
      margin: "auto", // Centers horizontally
    },
    box: {
      minHeight: "600px",
      // backgroundColor: "#f0f0f0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // border: "1px solid #ccc",
      marginBottom: "10px",
      align: "left",
    },
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <div style={styles.container}>
          <div className="row">
            <div className="col-md-6" style={styles.box}>
              <h5>Embracing Excellence</h5>
              <h1>
                A Journey into Our Vision, Values, and Passionate Commitment
              </h1>
              <p>
                Our journey began years ago, and since then, we have been
                privileged to serve countless clients, each with unique needs
                and aspirations. Our success is a result of not only our
                expertise but also our genuine care for the success of those we
                work with. We welcome you to explore the possibilities with us.
              </p>
              <p>Navigating possibilities: your gateway to premium services</p>
              <p>
                Transforming challenges into opportunities and ideas into
                reality
              </p>
              <a
                href="#"
                className="py-2 px-5 text-white"
                style={{
                  backgroundColor: "#B28564",
                  textDecoration: "none",
                  display: "inline-block", // Ensures button is not full-width
                  width: "fit-content", // Ensures button only takes necessary width
                  marginTop: "1.5rem",
                }}
              >
                DISCOVER MORE
              </a>{" "}
            </div>
            <div className="col-md-6">
              <div
                className="container-fluid position-relative"
                style={{height: "600px" }}
              >
                {/* First Box - Top-Left (Unchanged) */}
                <div
                  className="position-absolute rounded-2 horizontalBox horizontalBox1"
                  style={{ top: "0", left: "0" }}
                >
                  <img
                    src="/img/verticalCake.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                {/* Second Box - Centered */}
                <div
                  className="rounded-2 position-absolute start-50 top-50 translate-middle horizontalBoxHover  horizontalBox"
                  
                >
                  <img
                    src="/img/verticalCake.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                {/* Third Box - Bottom-Right (Touching Bottom Right Corner) */}
                <div
                  className="rounded-2 position-absolute  horizontalBox horizontalBox1"
                  style={{ bottom: "0", right: "0" }}
                >
                  <img
                    src="/img/verticalCake.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                {/* Fourth Box - Bottom-Left (UNTOUCHED) */}
                <div
                  className="col-3 rounded-2 position-absolute lastBox"
                  style={{
                    width: "300px",
                    height: "200px",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <img
                    src="/img/verticalCake.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
