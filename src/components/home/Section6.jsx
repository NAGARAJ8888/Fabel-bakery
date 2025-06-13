import React from "react";
import { MdWatchLater } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export const Section6 = () => {
  const styles = {
    container: {
      width: "100%",
      margin: "auto",
    },
    box: {
      minHeight: "auto",
    //   backgroundColor: "#f0f0f0",
      display: "flex",
      flexDirection: "column",
    //   justifyContent: "center",
    
    //   border: "1px solid #ccc",
      marginBottom: "10px",
      padding: "15px",
    },
    box1: {
      minHeight: "600px",
    //   backgroundColor: "#f0f0f0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    //   border: "1px solid #ccc",
      marginBottom: "10px",
      padding: "15px",
    },
    box2: {
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: "repeat(2, minmax(250px, 1fr))", // Ensures 2 columns max
    },
    imageContainer: {
      width: "100%",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
      display: "block",
      margin:"0",
      position:"relative",
      top:"-100"
    },
    
  };

  return (
    <section>
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-5 py-3 px-4 gap-3">
        <div className="flex-grow-1">
          <h2>Latest Posts</h2>
          <p>
            Exploring topics, sharing perspectives, and igniting conversations
            in a journey through ideas.
          </p>
        </div>
        <div>
          <a
            href="#"
            className="btn btn-outline rounded-0 px-5 py-2"
            style={{ borderColor: "#B28564", color: "#B28564" }}
          >
            VIEW MORE
          </a>
        </div>
      </div>

      <div className="container-fluid d-flex justify-content-center">
        <div style={styles.container}>
          <div className="row">
            {/* Left Side - Big Image + Text */}
            <div className="col-lg-6 col-md-12 d-flex flex-column p-4" style={styles.box}>
              <div style={styles.imageContainer}>
                <img src="/img/sec6img.jpg" alt="Sustainability" style={styles.image} />
              </div>
              <h3 className="py-3">Sustainability</h3>
              <p>
                <MdWatchLater className="fs-5" style={{ color: "#B28564" }} />
                <span> August 29, 2023</span>
                <GiHamburgerMenu className="fs-5 ms-5" style={{ color: "#B28564" }} />
                <span> Blog</span>
              </p>
              <p>
                One conscious choice, join us on a journey of stewardship, ethical practices, and a brighter, sustainable future for all.
              </p>
              <p>
                One conscious choice, join us on a journey of stewardship, ethical practices, and a brighter, sustainable future for all.
              </p>
              <p>
                One conscious choice, join us on a journey of stewardship, ethical practices, and a brighter, sustainable future for all.
              </p>
            </div>

            {/* Right Side - Cards */}
            <div className="col-lg-6 col-md-12" style={styles.box1}>
              <div className="d-flex flex-wrap justify-content-between">
                {/* Card 1 */}
                <div className="col-md-6 col-sm-12 p-1">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <img src="/img/cardimg.jpg" alt="" style={{ width: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6 col-sm-12 p-1">
                  <div className="card border-0">
                    <div className="card-body">
                      <h5 className="card-title">Check Events</h5>
                      <p className="card-text">
                        Discover a world of excitement and stay informed about the upcoming events, gatherings, celebrations, and much more.
                      </p>
                      <p>
                        <MdWatchLater className="fs-5" style={{ color: "#B28564" }} />
                        <span> August 29, 2023</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-6 col-sm-12 p-1">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <img src="/img/cardimg.jpg" alt="" style={{ width: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-6 col-sm-12 p-1">
                  <div className="card border-0">
                    <div className="card-body">
                    <h5 className="card-title">Check Events</h5>
                      <p className="card-text">
                        Discover a world of excitement and stay informed about the upcoming events, gatherings, celebrations, and much more.
                      </p>
                      <p>
                        <MdWatchLater className="fs-5" style={{ color: "#B28564" }} />
                        <span> August 29, 2023</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="col-md-6 col-sm-12 p-1">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <img src="/img/cardimg.jpg" alt="" style={{ width: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="col-md-6 col-sm-12 p-1">
                  <div className="card border-0">
                    <div className="card-body">
                    <h5 className="card-title">Check Events</h5>
                      <p className="card-text">
                        Discover a world of excitement and stay informed about the upcoming events, gatherings, celebrations, and much more.
                      </p>
                      <p>
                        <MdWatchLater className="fs-5" style={{ color: "#B28564" }} />
                        <span className="pe-5"> August 29, 2023</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> {/* End of flex-wrap div */}
            </div> {/* End of col-lg-6 */}
          </div>
        </div>
      </div>
    </section>
  );
};
