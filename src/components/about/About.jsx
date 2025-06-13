import React from "react";
import "./About.css";

export const About = () => {
  return (
    <>
    <section>
      <div
        className="container-fluid position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          height: "90vh",
          background: "url('/img/about1img.webp') center/cover no-repeat",
        }}
      >
        {/* Overlay to darken the background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        ></div>

        {/* Text content */}
        <h1 className="fw-bold fs-1 fst-italic position-relative">About</h1>
      </div>
      </section>


        <section>
      <div
        className="moveit container-fluid position-relative d-flex align-items-center text-white ps-5"
        style={{
          height: "30vh",
          background: "url('/img/about3img.jpg') center/cover no-repeat",
        }}
      >
        {/* Overlay to darken the background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          
        ></div>

        {/* Text content */}
        <h1 className="fw-bold fs-1 fst-italic position-relative">About</h1>
      </div>


      <div
        className="moveit container-fluid position-relative d-flex align-items-center text-white ps-5"
        style={{
          height: "30vh",
          background: "url('/img/about4img.jpg') center/cover no-repeat",
        }}
      >
        {/* Overlay to darken the background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          
        ></div>

        {/* Text content */}
        <h1 className="fw-bold fs-1 fst-italic position-relative">About</h1>
      </div>


      <div
        className="moveit container-fluid position-relative d-flex align-items-center text-white ps-5"
        style={{
          height: "30vh",
          background: "url('/img/about5img.jpg') center/cover no-repeat",
        }}
      >
        {/* Overlay to darken the background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          
        ></div>

        {/* Text content */}
        <h1 className="fw-bold fs-1 fst-italic position-relative">About</h1>
      </div>


      <div
        className="moveit container-fluid position-relative d-flex align-items-center text-white ps-5"
        style={{
          height: "30vh",
          background: "url('/img/about6img.jpg') center/cover no-repeat",
        }}
      >
        {/* Overlay to darken the background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          
        ></div>

        {/* Text content */}
        <h1 className="fw-bold fs-1 fst-italic position-relative">About</h1>
      </div>


      </section>

      <section>
        <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
            <h6>Check now</h6>
            <h1>Meet the Team</h1>
            <p>Diverse talents, unified excellence with harmony in expertise, meet the minds behind our success</p>
        </div>
        <div className="container">
    <div className="row gap-3 align-items-center justify-content-center">
        <div className="col-lg-4 col-md-12 position-relative p-0" 
             style={{ border: "1px solid red", width: "350px", height: "350px" }}>
            <div className="position-relative w-100 h-100">
                <img src="/img/about7img.webp" className="img-fluid w-100 h-100 d-block" 
                     style={{ objectFit: "cover", filter: "brightness(65%)" }} alt="Team Member 1" />
                <div className="position-absolute bottom-0 start-0 w-100 text-white text-center py-4">
                    <h4 className="mb-0">Taylor Jordan</h4>
                </div>
            </div>
        </div>

       
        <div className="col-lg-4 col-md-12 position-relative p-0" 
             style={{ border: "1px solid red", width: "350px", height: "350px" }}>
            <div className="position-relative w-100 h-100">
                <img src="/img/about7img.webp" className="img-fluid w-100 h-100 d-block" 
                     style={{ objectFit: "cover", filter: "brightness(65%)" }} alt="Team Member 2" />
                <div className="position-absolute bottom-0 start-0 w-100 text-white text-center py-4">
                    <h4 className="mb-0">Morgan Patel</h4>
                </div>
            </div>
        </div>

        
        <div className="col-lg-4 col-md-12 position-relative p-0" 
             style={{ border: "1px solid red", width: "350px", height: "350px" }}>
            <div className="position-relative w-100 h-100">
                <img src="/img/about7img.webp" className="img-fluid w-100 h-100 d-block" 
                     style={{ objectFit: "cover", filter: "brightness(65%)" }} alt="Team Member 3" />
                <div className="position-absolute bottom-0 start-0 w-100 text-white text-center py-4">
                    <h4 className="mb-0">Riley Adams</h4>
                </div>
            </div>
        </div>
    </div>
</div>

      </section>

      <section className="my-5 position-relative">
    {/* Background container with overlay */}
    <div className="container-fluid d-flex align-items-center justify-content-center position-relative" 
         style={{ minHeight: "90vh",background: "url('/img/about8img.webp') center/cover no-repeat" }}>
        
        {/* Dark Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" 
             style={{ background: "rgba(0, 0, 0, 0.2)" }}></div>

        <div className="row w-100 position-relative">
            <div className="col-lg-5">
                <h5 className="text-white">Strive for Perfection</h5>
                <h1 className="py-3 text-white">Elevate Your Experience</h1>
                <p className="text-white">Whether it's through our products, services, or solutions, we are dedicated to ensuring that every interaction with us is a step towards excellence.</p>
                <a href="" className="btn btn-outline py-2 px-4 rounded-0 my-3 bg-light">DISCOVER MORE</a>
            </div>

            <div className="col-lg-7 d-flex align-items-center justify-content-center">
                <div className="row d-flex justify-content-center align-items-center gap-5">
                    
                    <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center bg-light" 
                         style={{ height: "250px", maxWidth: "300px"}}>
                          <h1>+45</h1>
                        <h3>New Projects</h3>
                        <p>Exceptional experiences, where every moment counts</p>
                    </div>

                    <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center bg-light" 
                         style={{ height: "250px", maxWidth: "300px"}}>
                          <h1>+83</h1>
                        <h3>Custom Services</h3>
                        <p>Elevate your remarkable experience together</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>



<section>
  {/* Title Section */}
  <div className="d-flex flex-column justify-content-center align-items-center text-center mb-4">
    <h1><i>Latest News</i></h1>
    <h6>Navigating ideas and inspiration</h6>
  </div>

  {/* News Container */}
  <div className="news-container">
    <div className="news-item1 box px-5 py-4">
    <div className="overlay"></div>
      <div className="date-box content">
        <div className="border bg-white px-2 py-1" style={{ display: 'inline-block', color:"#B28564",border:"2px solid #B28564" }}>
          August 15, 2025
        </div>
        <h1>Sustainability</h1>
        <p className="pe-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium debitis eligendi iusto in ex vitae!</p>
        </div>
    </div>
    <div className="news-item2 box px-5 py-4">
    <div className="overlay"></div>
      <div className="date-box content">
        <div className="border bg-white px-2 py-1" style={{ display: 'inline-block', color:"#B28564",border:"2px solid #B28564"  }}>
          August 15, 2025
        </div>
        <h1>Sustainability</h1>
        <p className="pe-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium debitis eligendi iusto in ex vitae!</p>
        </div>
    </div>
    <div className="news-item3 box px-5 py-4">
    <div className="overlay"></div>
      <div className="date-box content">
        <div className="border bg-white px-2 py-1" style={{ display: 'inline-block', color:"#B28564",border:"2px solid #B28564"  }}>
          August 15, 2025
        </div>
        <h1>Sustainability</h1>
        <p className="pe-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium debitis eligendi iusto in ex vitae!</p>
        </div>
    </div>
    <div className="news-item4 box px-5 py-4">
    <div className="overlay"></div>
      <div className="date-box content">
        <div className="border bg-white px-2 py-1" style={{ display: 'inline-block', color:"#B28564",border:"2px solid #B28564"  }}>
          August 15, 2025
        </div>
        <h1>Sustainability</h1>
        <p className="pe-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium debitis eligendi iusto in ex vitae!</p>
        </div>
    </div>
</div>

</section>
<section>
  <div className="container-fluid position-relative d-flex flex-column align-items-center justify-content-center text-white"
        style={{
          height: "90vh",
          background: "url('/img/experience.jpg') center/cover no-repeat",
        }}>
  <div
          className=" position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        ></div>
    <h1 className="fw-bold fs-1 fst-italic position-relative">Elevate Your Experience & Discover Quality</h1>
    <p className="fst-italic position-relative">Empowering your dreams, one step at a time. Experience excellence with us, where innovation meets customer satisfaction with custom solutions for you.</p>
    <div className="border bg-white px-2 py-1 fst-italic position-relative" style={{ display: 'inline-block', color:"#B28564",border:"2px solid #B28564"  }}>
          START NOW
        </div>
  </div>
</section>


    </>
  );
};
