import style from "../Sell/Selll.module.css";
import SellersImg from "../../assets/sellersImg.svg";
import Congrats from "../../assets/congrats.svg";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";

const Selll = () => {
  return (
    <div className={style.sellersCorner}>
      <div className={style.sellersCornerTitleContainer}>
        <h3 className={style.sellersCornerTitle}>Sellers Corner</h3>
        <hr className={style.sellersCornerLine} />
        <p className={style.organiseSpace}>
          Organize your space with{" "}
          <span className={style.dono}>DonoDeclutter</span> Today!
        </p>
      </div>

      <div className={style.sellersFormContainer}>
        <form action="" className={style.sellersForm}>
          <label className={style.labelTitle}>Name/Title of item</label>
          <br />
          <input type="text" className={style.inputTypes} />
          <br />
          <br />

          <label className={style.labelTitle}>Product Description</label>
          <br />
          <textarea className={style.productDescription}></textarea>
          <br />
          <br />

          <label className={style.labelTitle}>Item Location</label>
          <br />
          <input type="text" className={style.inputTypes} />
          <br />
          <br />

          <label className={style.labelTitle}>Year of Purchase</label>
          <br />
          <input type="number" className={style.inputTypes} />
          <br />
          <br />

          <label className={style.labelTitle}>Phone Number</label>
          <br />
          <input type="number" className={style.inputTypes} />
          <br />
          <br />
          <div className={style.receiptUploadContainer}>
            <label className={style.receiptTitle}>Purchase Receipt</label>
            <ImageUpload id="receipt" />
          </div>
          <div>
            <div className={style.selection}>
              Category
              <select className={style.itemSelection}>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div className={style.selection}>
              Condition
              <select className={style.itemSelection}>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div className={style.selection}>
              Missing Part
              <select className={`${style.itemSelection} ${style.missingPart}`}>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <input
              type="text"
              placeholder="if yes, state the missing part(s)"
              className={style.missigPartInput}
            />

            <div className={style.uploadImageContainer}>
              <div className={style.uploadImage}>
                <h4>Add Photos</h4>
                <p>
                  Add minimun of 2 photos and maximum of 5. First photo will be
                  on the front page
                </p>
              </div>
              <div className={style.imageUploadIcons}>
                <ImageUpload id="goods-1" />
                <ImageUpload id="goods-2" />
                <ImageUpload id="goods-3" />
                <ImageUpload id="goods-4" />
                <ImageUpload id="goods-5" />
              </div>
            </div>
          </div>
        </form>
        <div className={style.sellersImageContainer}>
          <img src={SellersImg} alt="" className={style.sellerssImg} />
          <img src={Congrats} alt="" className={style.congratsImg} />
        </div>
      </div>


        <Link to="/subscribe">
          <CustomButton
                buttonStyle={style["big-btn"]}
                type="orange"
                text="NEXT"
                
              />
        </Link>
        


    </div>
  );
};

export default Selll;
