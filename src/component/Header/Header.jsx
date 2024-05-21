import React, { useContext } from "react";
import classes from "./Header.module.css";
import { link } from "react-router-dom";
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import LowerHeader from "./LowerHeader";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "@mui/material";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo section*/}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <IoLocationOutline />
              </span>
              <div>
                <p>Delivered to</p>
                <span>84sefer</span>
              </div>
            </div>
          </div>
          {/* {search Icon} */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <IoIosSearch size={25} />
          </div>
          {/* other section */}
          <div className={classes.order_container}>
            <Link href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="USA flag"
              />
              <section>
                <option value="">EN</option>
              </section>
            </Link>

            <Link href="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            <Link href="/Orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link href="/Cart" className={classes.cart}>
              <FaCartShopping size={25} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
