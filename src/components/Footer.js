import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">
            {/* First Part (Logo and Contact Information) */}
            <div className="col-12 col-md-4 first-part">
              <div className="footer-logo-img flex">
                <img src="/assest/fssai.png" alt="FSSAI logo" />
                <img src="/assest/secure.png" alt="Secure logo" />
                <img src="/assest/authentic.png" alt="Authentic logo" />
                <img src="/assest/certified.png" alt="Certified logo" />
                <img src="/assest/last-icn.png" alt="Last Icon" />
              </div>
              <p>SF-121, SS Omnia, Sec - 86, Gurugram - 122004</p>
              <p>Call us: +91 902679938</p>
              <p>Email: Customercare@suppkart.com</p>
              <div className="all-icon">
                <span>
                  <FaInstagram size={25} />
                </span>
                <span>
                  <FaXTwitter size={25} />
                </span>
                <span>
                  <FaFacebook size={25} />
                </span>
              </div>
            </div>

            {/* Information Section */}
            <div className="col-12 col-md-2 footer-information">
              <h5>Information</h5>
              <ul className="text-start" type="none">
                <li>About us</li>
                <li>Shipping Policy</li>
                <li>Return Policy</li>
                <li>FAQ</li>
                <li>Cancellation and Refund Policy</li>
                <li>Return & Refund</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Customer Service Section */}
            <div className="col-12 col-md-2 footer-information">
              <h5>Customer Service</h5>
              <ul type="none">
                <li>Contact us</li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="col-12 col-md-4 latest-news">
              <h5>Newsletter Sign Up</h5>
              <p>Receive our latest updates about our products and promotions</p>
              <div className="input-filed">
                <input name="gmail" placeholder="Enter your email" />
                <button className=" border border-white bg-white">Subscribe</button>
              </div>
              <div className="check-bar">
                <input type="checkbox" />
                <p>
                  I agree with the Terms of Use and I declare that I have read the Privacy Policy
                  and understand the information required in accordance with Article 13 of GDPR.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid footer-last-part">
          <p>SuppKart © 2024 | All Right Reserved</p>
          <img src="/assest/payment-icon.png" alt=""/>
      </div>
      </footer>
      
    </>
  );
}

export default Footer;
