import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false); // State for login popup
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  const handleUserClick = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen); // Toggle login popup visibility
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <div className="container-fluid">
          <div className="row w-100">
            {/* Logo Section */}
            <div className="col-4 col-sm-3 d-flex align-items-center logo-img">
              <img src="/assest/logo.svg" alt="Logo" className="img-fluid" />
            </div>

            {/* Middle Section with Select and Search */}
            <div className="col-8 col-sm-6 d-flex justify-content-center align-items-center">
              <div className="d-flex align-items-center w-100">
                <i className="fas fa-home me-3 d-none d-lg-inline-block"></i>

                {/* Select Category */}
                <div className="me-3 d-flex align-items-center ">
                  <GiHamburgerMenu size={25} onClick={handleSidebarToggle} />

                  <select
                    className="form-select ms-3"
                    aria-label="Select category"
                  >
                    <option selected>All Categories</option>
                    <option value="1">Accession</option>
                    <option value="2">Protein</option>
                    <option value="3">Weight Gainer</option>
                    <option value="4">Gold Core</option>
                    <option value="5">Endurance</option>
                    <option value="6">Vitality</option>
                    <option value="7">Vitamins & Minerals</option>
                    <option value="8">Vegan Products</option>
                    <option value="9">Fat Burner</option>
                  </select>
                </div>

                {/* Search Bar */}
                <div className="w-50 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>

            {/* Icons Section */}
            <div className="col-4 col-sm-3 d-flex justify-content-center align-items-center header-icons">
              <span className="me-3" onClick={handleUserClick}> {/* Trigger popup on click */}
                <FaShoppingCart />
              </span>
              <span className="me-3" onClick={handleUserClick}> {/* Trigger popup on click */}
                <FaHeart />
              </span>
              <span className="user" onClick={handleUserClick}>
                <FaUser />
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="header-under-line"></div>
      <header className="header">
        <div className="left">
          <GiHamburgerMenu size={25} onClick={handleSidebarToggle} />
        </div>
        <img src="/assest/logo.svg" alt="logo" className="logo" />
        <div className="right flex ml-20">
          <FaShoppingCart />
          <FaHeart />
          <FaUser onClick={handleUserClick} />
        </div>
      </header>
      <div className="search-input-container col-12">
        <div className="search-icon">
          <span>
            <FaSearch size={20} />
          </span>
        </div>
        <input type="text" className="search-input" placeholder="Search..." />
      </div>

     
      {isLoginPopupOpen && (
        <div className="popup-container">
          <div className="popup-content">
            <i>
              <IoMdCloseCircle
                onClick={handleUserClick}
                className="close-popup"
                size={30}
              />
            </i>
            <img src="/assest/logo.svg" alt="" />

            <div className="popup-body">
              <div className="login-email">
                <label htmlFor="email">Enter Your Email/Number</label>
                <input
                  type="text"
                  id="email"
                  autoComplete="off"
                  name="email"
                  maxLength="100"
                  placeholder="Enter your email/number"
                />
              </div>
              <div className="login-email">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  maxLength="20"
                  autoComplete="off"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <i>
                  <IoEyeSharp />
                </i>
              </div>

              <button type="button">SIGN IN</button>
              <p className="text-center mt-2 mb-5">Forgot Password?</p>
              <div className="account">
                <p>Don’t have an account?</p>
                <h6>Sign Up Now</h6>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar-container">
          <div className="sidebar-content">
            <div className="top-section">
              <img src="/assest/footer-logo.svg" alt="" />
              <IoClose
                onClick={handleSidebarToggle}
                className="close-sidebar"
                size={33}
              />
            </div>
            <ul className="total-list">
              <li className="list">
                <p>Brands</p>
                <i>
                  <IoChevronDown />
                </i>
              </li>
              <li className="list">
                <p>Categories</p>
                <i>
                  <IoChevronDown />
                </i>
              </li>
              <li className="list">
                <p>Shop by Sports</p>
                <i>
                  <IoChevronDown />
                </i>
              </li>
              <li className="list">
                <p>Shop by Goals</p>
                <i>
                  <IoChevronDown />
                </i>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
