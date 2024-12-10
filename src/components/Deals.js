import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";

// Import slick-carousel styles (ensure these are in your CSS files)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: false, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 3000, // Transition speed
    slidesToShow: 3, // Show 3 slides at once by default
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Time between auto transitions
    responsive: [
      {
        breakpoint: 1200, // For large screens (desktops)
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 480, // For mobile phones
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <section className="top-deals">
      <div className="heading pt-3">
        <h1>Top Deals</h1>
        <div className="under-line">
          <div className="inner-box"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Slick Slider Component */}
            <Slider {...settings}>
              <div>
                <div className="product-box">
                  <h5>Trac Nutition BOOGIMAN</h5>
                  <div className="inner-part-slider">
                    <div className="left-part">
                    <p>Boogiman 250-ml</p>
                    <p className="rate">
                      Rs.1,079 <span>Rs.1,999</span>
                    </p>
                    <div className="discount-rate">
                      <p className="discount">25.00%off</p>
                      <p className="save-rs">save Rs.199</p>
                    </div>
                    <div className="view-product">
                      <a href="###">view product</a>
                      <FaArrowRight />
                    </div>
                    </div>
                    <div className="right-part">
                         <div className="bg-img"></div>
                         <img src="/assest/carbo-sport.webp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box">
                  <h5>Trac Nutition BOOGIMAN</h5>
                  <div className="inner-part-slider">
                    <div className="left-part">
                    <p>Boogiman 250-ml</p>
                    <p className="rate">
                      Rs.1,079 <span>Rs.1,999</span>
                    </p>
                    <div className="discount-rate">
                      <p className="discount">25.00%off</p>
                      <p className="save-rs">save Rs.199</p>
                    </div>
                    <div className="view-product">
                      <a href="###">view product</a>
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="right-part">
                         <div className="bg-img"></div>
                         <img src="/assest/CM-3.webp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box">
                  <h5>Trac Nutition BOOGIMAN</h5>
                  <div className="inner-part-slider">
                    <div className="left-part">
                    <p>Boogiman 250-ml</p>
                    <p className="rate">
                      Rs.1,079 <span>Rs.1,999</span>
                    </p>
                    <div className="discount-rate">
                      <p className="discount">25.00%off</p>
                      <p className="save-rs">save Rs.199</p>
                    </div>
                    <div className="view-product">
                      <a href="###">view product</a>
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="right-part">
                         <div className="bg-img"></div>
                         <img src="/assest/whey-100.jpg" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box">
                  <h5>Trac Nutition BOOGIMAN</h5>
                  <div className="inner-part-slider">
                    <div className="left-part">
                    <p>Boogiman 250-ml</p>
                    <p className="rate">
                      Rs.1,079 <span>Rs.1,999</span>
                    </p>
                    <div className="discount-rate">
                      <p className="discount">25.00%off</p>
                      <p className="save-rs">save Rs.199</p>
                    </div>
                    <div className="view-product">
                      <a href="###">view product</a>
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="right-part">
                         <div className="bg-img"></div>
                         <img src="/assest/whey-isolate.webp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box">
                  <h5>Trac Nutition BOOGIMAN</h5>
                  <div className="inner-part-slider">
                    <div className="left-part">
                    <p>Boogiman 250-ml</p>
                    <p className="rate">
                      Rs.1,079 <span>Rs.1,999</span>
                    </p>
                    <div className="discount-rate">
                      <p className="discount">25.00%off</p>
                      <p className="save-rs">save Rs.199</p>
                    </div>
                    <div className="view-product">
                      <a href="###">view product</a>
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="right-part">
                         <div className="bg-img"></div>
                         <img src="/assest/carbo-sport.webp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box">
                  <h5>Trac Nutition BOOGIMAN</h5>
                  <div className="inner-part-slider">
                    <div className="left-part">
                    <p>Boogiman 250-ml</p>
                    <p className="rate">
                      Rs.1,079 <span>Rs.1,999</span>
                    </p>
                    <div className="discount-rate">
                      <p className="discount">25.00%off</p>
                      <p className="save-rs">save Rs.199</p>
                    </div>
                    <div className="view-product">
                      <a href="###">view product</a>
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="right-part">
                         <div className="bg-img"></div>
                         <img src="/assest/carbo-sport.webp" alt=""/>
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
