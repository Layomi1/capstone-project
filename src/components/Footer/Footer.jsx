import React from "react";
import style from "./Footer.module.css";
import Logo from "../Logo/Logo"
import AcceptedCards from "../../assets/cardTypes.svg";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";


const Footer = () => {
  return (
    <footer>
        <div className={style.footerNavs}>
              <div className={style.footerNavContent}>
                  <ul className={style.footerList}>
                    <li> <a href="#">Help Center</a> </li>
                    <li> <a href="#">About Us</a> </li>
                    <li> <a href="#">Contact Us</a> </li>
                    <li> <a href="#">FAQ</a> </li>
                  </ul>
              </div>

              <div>
                  <ul>
                    <li> <a href="#">Terms and Condition</a> </li>
                    <li> <a href="#">Privacy Notice</a> </li>
                    <li> <a href="#">Report a Product</a> </li>
                    <li> <a href="#">Delivery Option and Timeline</a> </li>
                  </ul>
              </div>

              <div>
                  <ul>
                    <li> <a href="">How to Shop on DonoDeclutter</a> </li>
                    <li> <a href="">Sell on DonoDeclutter</a> </li>
                    <li> <a href="">Return Policy</a> </li>
                    <li> <a href="">Refund Policy</a> </li>
                  </ul>
              </div>

                <div className={style.footerPaymentHandles}>
                    <div className={style.paymentMethods}>
                        <p>Payment Methods</p>
                        <img src={AcceptedCards} alt="Accepted cards"/>
                    </div>
                    <div className={style.footerHandlesContainer}>
                        <p>Connect with us</p>

                        <div className={style.footerHandles}>
                            <a href="#"><img src={TwitterIcon} alt="Twitter" /></a>
                            <a href="#"><img src={InstagramIcon} alt="" /></a>
                            <a href="#"><img src={FacebookIcon} alt="Facebook" /></a> 
                        </div>
                    </div>

                </div>
        </div>
        <div className={style.footerLogoContainer}>
           <Logo className={style.footerLogo}/>
           <a href="#">Copyright © 2024 Donodeclutter.com. All rights reserved</a>
        </div>
      
        

  </footer>
  );
};

export default Footer;
