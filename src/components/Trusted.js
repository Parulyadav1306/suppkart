import React from "react";
import Slider from "react-slick";
// Import slick-carousel styles (ensure these are in your CSS files)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: false, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 3000, // Transition speed
    slidesToShow: 2, // Show 2 slides by default
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable auto play
    autoplaySpeed: 1000, // Time between auto transitions
    responsive: [
      {
        breakpoint: 1200, // For screens larger than 1200px
        settings: {
          slidesToShow: 2, // Show 3 slides at once
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 952, // For medium screens (tablet view)
        settings: {
          slidesToShow: 1, // Show 2 slides at once
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide at once
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 576, // For smaller mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide at once
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <section className="top-deals">
      <div className="heading">
      <h2 class="text-center pt-3">Trusted By The Best</h2>
              <div className="under-line">
          <div className="inner-box"></div>
        </div>
        <p>
          Top-tier performers rely on our products daily. Whether aiming for the podium or personal success, they deserve
          <br /> unparalleled quality and support.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Slick Slider Component */}
            <Slider {...settings}>
              <div>
                <div className="card">
                  <div className="main-card">
                    <div className="img-section">
                      <img src="/assest/running.webp" alt="" />
                    </div>
                    <div className="content">
                      <h3>Shankar Swami</h3>
                      <p>3000m Steeplechase</p>
                      <p>Asian Games ,  Asian Championship</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="main-card">
                    <div className="img-section">
                      <img src="/assest/seema belsa.jpg" alt="" />
                    </div>
                    <div className="content">
                      <h3>Seema Bisla</h3>
                      <p>Wrestling</p>
                      <p>Asian Games , Asian Championship-Bronze</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="main-card">
                    <div className="img-section">
                      <img src="/assest/krishan kumar.webp" alt="" />
                    </div>
                    <div className="content">
                      <h3>Krishan Kumar</h3>
                      <p>3000m Steeplechase</p>
                      <p>Asian Championship Silver , Asian Game World Championship</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="main-card">
                    <div className="img-section">
                      <img src="/assest/pooja.jpg" alt="" />
                    </div>
                    <div className="content">
                      <h3>Pooja Bohra</h3>
                      <p>Boxing</p>
                      <p>Olympian , Asian Championship Gold Medalist , Asian Games Bronze</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="main-card">
                    <div className="img-section">
                      <img src="/assest/vikas yadav.webp" alt="" />
                    </div>
                    <div className="content">
                      <h3>Vikas Krishan Yadav</h3>
                      <p>Boxing</p>
                      <p>3x OLYMPIAN , ASIAN & COMMONWEALTH GOLD Medalist</p>
                    </div>
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
