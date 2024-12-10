import React from "react";
import Slider from "react-slick";

// Import slick-carousel styles (ensure these are in your CSS files)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: false, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 5, // Show 5 slides at once by default
    slidesToScroll: 1, // Slide 1 image at a time
    autoplay: true, // Disable auto play
    autoplaySpeed: 3000, // Time between auto transitions
    responsive: [
      {
        breakpoint: 1200, // For large screens (desktops)
        settings: {
          slidesToShow: 4, // Show 4 slides
        },
      },
      {
        breakpoint: 992, // For medium screens (tablets)
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 768, // For smaller screens (smaller tablets, large phones)
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 576, // For extra small screens (mobile phones)
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <section>
      <div className="heading">
        <h1>Shop by Sports</h1>
        <div className="under-line">
          <div className="inner-box"></div>
        </div>
        <p>Visit our shop to see amazing creations from our Gym house</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Slick Slider Component */}
            <Slider {...settings}>
              <div>
                <div className="goals-img">
                  <img src="/assest/wreslting.jpg" alt="" />
                  <div className="goals-content">
                    <h5>Wrestling</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="goals-img">
                  <img src="/assest/Boxing.jpg" alt="" />
                  <div className="goals-content">
                    <h5>Boxing</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="goals-img">
                  <img src="/assest/rectices.jpg" alt="" />
                  <div className="goals-content">
                    <h5>Badminton</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="goals-img">
                  <img src="/assest/athiltic.png" alt="" />
                  <div className="goals-content">
                    <h5>Athletics</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="goals-img">
                  <img src="/assest/swiminng.webp" alt="" />
                  <div className="goals-content">
                    <h5>Swimming</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="goals-img">
                  <img src="/assest/cricket.jpg" alt="" />
                  <div className="goals-content">
                    <h5>Cricket</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="goals-img">
                  <img src="/assest/shooting.jpg" alt="" />
                  <div className="goals-content">
                    <h5>Shooting</h5>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
