
import style from "../SignUp/Signup.module.css"
import ImageUpload from "../../components/ImageUpload/ImageUpload"
import CustomButton from "../../components/CustomButton/CustomButton"
import { Link } from "react-router-dom";

function Signup () {

  return (
    <div className={style.createAccountContainer}>
          
          <div className={style.createAccountTitleContainer}>
            <h3 className={style.createAccountTitle}>Create an Account</h3>
            <hr className={style.createAccountLine} />
          </div>
          <div className={style.createAccountFormContainer}>
              <form className={style.createAccountForm}>
                <label className={style.labelTitle}>Name</label><br/>
                <input type="text" className={style.inputTypes} /><br/><br/>

                <label className={style.labelTitle}>Email Address</label><br/>
                <input type="email" className={style.inputTypes} /><br/><br/>

                <label className={style.labelTitle}>Phone Number</label><br/>
                <input type="tel" className={style.inputTypes} /><br/><br/>
                

                <label className={style.labelTitle}>State</label><br/>
                <input type="text" className={style.inputTypes} /><br/><br/>
                

                <label className={style.labelTitle}>City</label><br/>
                <input type="text" className={style.inputTypes} /><br/><br/>

                <label className={style.labelTitle}>Shipping Address</label><br/>
                <input type="text" className={style.inputTypes} /><br/><br/>
                
                <div className={style.labelUploadTitle}>
                    <label className={style.labelTitle}>Upload Profile Picture</label>
                    <ImageUpload/>
                </div>
              
                <div className={style.labelUploadNin}>
                    <label className={style.labelTitle}>Upload NIN </label>
                    <ImageUpload/>
                    <p>National Identification Number</p>
                    <p>(required for sellers)</p>
                    
                </div>

                <label className={style.labelTitle}>Password</label><br/>
                <input type="password" className={style.inputTypes} /><br/><br/>
                
                <label className={style.labelTitle}>Confirm Password</label><br/>
                <input type="password" className={style.inputTypes} /><br/><br/>
                <Link to="/">
                  <CustomButton
                    buttonStyle={style["big-btn"]}
                    type="orange"
                    text="Register"
                  />
                </Link>
              </form>
          </div>
          
    </div>
)

}
export default Signup

