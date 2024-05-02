import SignInImage from "../../assets/signInImage.svg";
import Eyes from "../../assets/eyes.svg"
import style from "../Login/Login.module.css";
import CustomButton from "../../components/CustomButton/CustomButton"
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.signInContainer}>
      <div className={style.signInContainerContent}>
        <div className={style.signInTitleContainer}>
          <h3 className={style.signInTitle}>Signin</h3>
          <hr className={style.signInLine} />
        </div>

        <div className={style.signImageForm}>
          <img src={SignInImage} alt="Image of boxes" className={style.boxImage} />
          <div>
            <form action="submit" className={style.signInForm}>
              <label>Username</label> <br />
              <input type="text" /><br /><br /><br />
              <label>Password</label><br />
              <input type={showPassword ? 'text' : 'password'} /><br /><br />
              <img src={Eyes} alt="Toggle password visibility" className={style.eyes} onClick={togglePasswordVisibility} />
              <a href="#" className={style.forgotPasswordAnchor}><p className={style.forgotPassword}>Forgot Password</p></a>
            </form>
            <div className={style.LogInNotregistered}>
              <Link to="/">
                <CustomButton
                  buttonStyle={style["big-btn"]}
                  type="orange"
                  text="LOG IN"
                />
              </Link>
              <p>Are you registered? If not, Sign up
                <Link to="/signup">
                  <a href="#" className={style.here}>HERE</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
