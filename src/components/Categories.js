import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

function Categories() {
  const [isFilter, setIsFilter] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  const handFilter = () => {
    setIsFilter(!isFilter);
    console.log("happy tanuj");
  };

  const likeprofile = () => setIsProfile(!isProfile);
  const crossFilter = () => setIsFilter(!isFilter);


  return (
    <>
      <section>
        <div className="headline">
          <ul type="none" className="flex justify-start items-center py-4 ms-4">
            <li>Home /</li>
            <li>All Categories By category /</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="complete-product-section">
          <div className="container-fluid heading-name w-11/12 mb-3">
            <h3 className="text-white text-3xl font-bold text-center py-2.5">
              Accessories
            </h3>
          </div>
          <div className="container-fluid product-content flex">
            <div className="filter-section w-10 ml-10">
              <h6 className="flex justify-between items-center text-lg border-b border-gray-200 py-2 font-bold">
                Filter
              </h6>
              <p className="font-bold text-lg py-2">BRAND</p>
              <div className="check-box flex items-center pb-3">
                <input type="checkbox" id="trec-nutrition" />
                <span className="pl-5">Trec Nutrition</span>
              </div>
              <div className="check-box flex items-center pb-3">
                <input type="checkbox" id="sixpak-nutrition" />
                <span className="pl-5">6Pak Nutrition</span>
              </div>
              <div className="check-box flex items-center pb-3">
                <input type="checkbox" id="essence" />
                <span className="pl-5">Essence</span>
              </div>
              <p className="font-bold text-lg py-2 border-t border-gray-200">
                PRICE
              </p>
              <div className="check-box flex items-center pb-3">
                <input type="radio" name="price" id="price-50-1500" />
                <span className="pl-5">Rs. 50 to Rs. 1500</span>
              </div>
              <div className="check-box flex items-center pb-3">
                <input type="radio" name="price" id="price-1500-10000" />
                <span className="pl-5">Rs. 1500 to Rs. 10000</span>
              </div>
              <div className="check-box flex items-center pb-3">
                <input type="radio" name="price" id="price-10000-20000" />
                <span className="pl-5">Rs. 10000 to Rs. 20000</span>
              </div>
              <div className="check-box flex items-center pb-3">
                <input type="radio" name="price" id="price-20000-100000" />
                <span className="pl-5">Rs. 20000 to Rs. 100000</span>
              </div>
              <p className="font-bold text-lg py-2 border-t border-gray-200">
                DISCOUNT RANGE
              </p>
              <div className="check-box flex items-center pb-3">
                <input type="radio" name="discount" id="discount-5-and-above" />
                <span className="pl-5">5% and above</span>
              </div>
              <div className="check-box flex items-center pb-3">
                <input type="radio" name="discount" id="discount-20-and-above" />
                <span className="pl-5">20% and above</span>
              </div>
              <div className="check-box flex items-center pb-3">
                <input type="radio" name="discount" id="discount-25-and-above" />
                <span className="pl-5">25% and above</span>
              </div>
              <div className="check-box flex items-center pb-3">
                <input type="radio" name="discount" id="discount-50-and-above" />
                <span className="pl-5">50% and above</span>
              </div>
            </div>
            <div className="product-image relative w-full">
              <div className="icon ml-5">
                <GiHamburgerMenu size={25} onClick={handFilter} />
              </div>
              <div className="image-input absolute top-0 right-10 p-2 border border-gray-200 text-sm">
                <span>Sort by :</span>
                <select className="border-none">
                  <option value="select">Select</option>
                  <option value="desc">High-to-low</option>
                  <option value="asc">Low-to-high</option>
                </select>
              </div>
              <div className="image-part relative top-10 left-5 my-5">
                <div className="image">
                  <img className="pt-3" src="/assest/Liquid-chalk.png" alt="" />
                </div>
                <span className="absolute top-3 right-3">
                  <CiHeart size={25} onClick={likeprofile} />
                </span>
                <div className="image-content ml-5">
                  <p className="font-bold text-base"> Trec Nutrition</p>
                  <p className="text-gray-600 text-xs">
                    Trec Nutrition CHALK LIQUID
                  </p>
                  <small>120gm </small>
                  <div className="product-rate mb-4">
                    <span className="text-green-700 text-sm font-bold">
                      10% off
                    </span>
                    <span className="text-red-800 text-sm px-3 line-through">
                      Rs.699
                    </span>
                    <span className="text-sm font-bold">Rs.629</span>
                  </div>
                </div>
                <div className="add-cart flex justify-center items-center py-2 text-xs text-white">
                  <span className="block px-2">
                    <IoCartSharp />
                  </span>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section: Visible only when isFilter is true */}
      {isFilter && (
        <div className="filter-pop">
        <div className="filter-section w-10 ml-10">
          <div className="flex justify-between border-b border-gray-200">
        <h6 className="flex justify-between items-center text-lg  py-2 font-bold">
          Filter
        </h6>
        <i>
              <IoMdCloseCircle onClick={crossFilter} className="close-popup" size={30} />
            </i>
            </div>
        <p className="font-bold text-lg py-2">BRAND</p>
        <div className="check-box flex items-center pb-3">
          <input type="checkbox" id="trec-nutrition" />
          <span className="pl-5">Trec Nutrition</span>
        </div>
        <div className="check-box flex items-center pb-3">
          <input type="checkbox" id="sixpak-nutrition" />
          <span className="pl-5">6Pak Nutrition</span>
        </div>
        <div className="check-box flex items-center pb-3">
          <input type="checkbox" id="essence" />
          <span className="pl-5">Essence</span>
        </div>
        <p className="font-bold text-lg py-2 border-t border-gray-200">
          PRICE
        </p>
        <div className="check-box flex items-center pb-3">
          <input type="radio" name="price" id="price-50-1500" />
          <span className="pl-5">Rs. 50 to Rs. 1500</span>
        </div>
        <div className="check-box flex items-center pb-3">
          <input type="radio" name="price" id="price-1500-10000" />
          <span className="pl-5">Rs. 1500 to Rs. 10000</span>
        </div>
        <div className="check-box flex items-center pb-3">
          <input type="radio" name="price" id="price-10000-20000" />
          <span className="pl-5">Rs. 10000 to Rs. 20000</span>
        </div>
        <div className="check-box flex items-center pb-3">
          <input type="radio" name="price" id="price-20000-100000" />
          <span className="pl-5">Rs. 20000 to Rs. 100000</span>
        </div>
        <p className="font-bold text-lg py-2 border-t border-gray-200">
          DISCOUNT RANGE
        </p>
        <div className="check-box flex items-center pb-3">
          <input type="radio" name="discount" id="discount-5-and-above" />
          <span className="pl-5">5% and above</span>
        </div>
        <div className="check-box flex items-center pb-3">
          <input type="radio" name="discount" id="discount-20-and-above" />
          <span className="pl-5">20% and above</span>
        </div>
        <div className="check-box flex items-center pb-3">
          <input type="radio" name="discount" id="discount-25-and-above" />
          <span className="pl-5">25% and above</span>
        </div>
        <div className="check-box flex items-center pb-3">
          <input type="radio" name="discount" id="discount-50-and-above" />
          <span className="pl-5">50% and above</span>
        </div>
      </div>
      </div>
      )}

      {/* Profile Popup */}
      {isProfile && (
        <div className="popup-container">
          <div className="popup-content">
            <i>
              <IoMdCloseCircle onClick={likeprofile} className="close-popup" size={30} />
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
    </>
  );
}

export default Categories;
