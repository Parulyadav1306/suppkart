import React from "react";
import Slider from "react-slick";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiArrowElbowRightBold } from "react-icons/pi";
import { FaRupeeSign } from "react-icons/fa";

// Import slick-carousel styles (ensure these are in your CSS files)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: false, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 2000, // Transition speed
    slidesToShow: 1, // Show 3 slides at once
    slidesToScroll: 1, // Slide 3 images at a time
    autoplay: true, // Enable auto play
    autoplaySpeed: 2000, // Time between auto transitions
  };

  return (
    <section>
      <div className="scroll-part-top">
        <div>
          <img src="/assest/energey-box.png" alt="" />
        <p>Energy</p>
        </div>
        <div>
        <img src="/assest/recovery.png" alt="" />
        <p>Recovery</p>
        </div>
        <div>
        <img src="/assest/packs.png" alt="" />
        <p>Packs</p>
        </div>
        <div>
        <img src="/assest/transfrom.png" alt="" />
        <p>Transform</p>
        </div>
        <div>
        <img src="/assest/bestsellers.png" alt="" />
        <p>Bestsellers</p>
        </div>
        <div>
        <img src="/assest/daily.png" alt="" />
        <p>Daily</p>
        </div>
      </div>
      <div className="container main-scroll">
        <div className="row">
          <div className="col-12 img-scroll">
            <Slider {...settings}>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/free-shaker.jpg" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/boogieman.jpg" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/all-creating-box.jpeg" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/beauty-line.webp" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/all-protain-box.webp" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/clen-buexin.jpg" alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="container main">
        <div className="row">
          <div className="col-7 first-part">
            {/* Slick Slider Component */}
            <Slider {...settings}>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/free-shaker.jpg" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/boogieman.jpg" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/all-creating-box.jpeg" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/beauty-line.webp" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/all-protain-box.webp" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/clen-buexin.jpg" alt="" />
                </div>
              </div>
            </Slider>
            <div className="row main-last">
              <div className=" col-4 inner-product">
                <p>
                  <MdOutlineShoppingBag size={30} />
                  <span>Free Shipping</span>
                </p>
                <p className="inner-product-content">
                  Free shipping for workout supplements on orders over ₹2000.
                </p>
              </div>
              <div className=" col-4 inner-product">
                <p>
                  <PiArrowElbowRightBold size={30} />
                  <span>Authenticity Guaranteed</span>
                </p>
                  <p className="inner-product-content">
                    Guaranteed Authentic Supplements for Serious Fitness
                    Enthusiasts.
                  </p>
                
              </div>
              <div className=" col-4 inner-product">
                <p>
                  <FaRupeeSign size={27} />
                  <span>Secure Payment</span>
                </p>
                <p className="inner-product-content">Secure, fast, and reliable payment options .</p>
              </div>
            </div>
          </div>
          <div className="col-4 second-part">
            <Slider {...settings}>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/new-member.webp" alt="" />
                </div>
              </div>
              <div>
                <div className="complete-slide-img">
                  <img src="/assest/isotonic-sport.jpeg" alt="" />
                </div>
              </div>
             
            </Slider>
          </div>
          <div className="col-1 scroll-part">
            <div className="scroll-all-img">
              <img src="/assest/energey-box.png" alt="" />
              <p>Energy</p>
              <img src="/assest/recovery.png" alt="" />
              <p>Recovery</p>
              <img src="/assest/packs.png" alt="" />
              <p>Packs</p>
              <img src="/assest/transfrom.png" alt="" />
              <p>Transform</p>
              <img src="/assest/bestsellers.png" alt="" />
              <p>Bestsellers</p>
              <img src="/assest/daily.png" alt="" />
              <p>Daily</p>
              <img src="/assest/energey-box.png" alt="" />
              <p>Energy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
