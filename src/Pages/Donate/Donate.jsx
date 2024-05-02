import ImageUpload from "../../components/ImageUpload/ImageUpload"
import CustomButton from "../../components/CustomButton/CustomButton"
import style from "../Donate/Donate.module.css"
import DonateImg from "../../assets/donate.svg"
import Modal from "../../components/Modals/Modal"
import {useState} from 'react'

const Donate = () => {

  const [buttonModal, setButtonModal] = useState(false)
  return (
    <div className={style.donateContainer}>
      <div className={style.donateTitleContainer}>
            <div className={style.donateTitleParaContainer}>
                <h3 className={style.donateTitle}>Welcome To Donation Centre</h3>
                <p className={style.titlePara}>Spread Kindness</p>
                <p className={style.titlePara}>Donate items you no longer NEED to those who NEED</p> 
            </div>
            <div>
                  <img src={DonateImg} alt="hands with a heart" className={style.donateImage} />
            </div>    
        </div>
         
        
        
        <div className={style.sellersFormContainer}>
            <form action="" className={style.sellersForm}>
              <label className={style.labelTitle}>Name of Product (s)</label><br/>
              <input type="text" className={style.inputTypes}/><br/><br/>

                <label className={style.labelTitle}>Product Description</label><br/>
                <textarea className={style.productDescription}></textarea><br/><br/>

                <label className={style.labelTitle}>Item Location</label><br/>
                <input type="text" className={style.inputTypes}/><br/><br/>

                <label className={style.labelTitle}>Phone Number</label><br/>
                <input type="phone" className={style.inputTypes}/><br/><br/>
               
                <div>
                    <div className={style.selection}>Category
                    <select className={style.itemSelection}>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                    </div>

                    <div className={style.selection}>Condition
                    <select className={style.itemSelection}>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                    </div>

                    <div className={style.selection}>Missing Part
                    <select className={`${style.itemSelection} ${style.missingPart}`}>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                    </div>
                    <input type="text" placeholder="if yes, state the missing part(s)" className={style.missigPartInput} />

                    <div className={style.selection}>NGOs
                    <select className={style.itemSelection}>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                    </div>
                    <p className={style.selectedNGOs}>Donations are sent to selected NGOs</p>

                    <div className={style.uploadImageContainer}>
                        <div className={style.uploadImage}>
                          <h4>Add Photos</h4>
                          <p>Add minimun of 2 photos and maximum of 5. First photo will be on the front page</p>
                        </div>
                        <div className={style.imageUploadIcons}>
                           <ImageUpload/>
                           <ImageUpload/>
                           <ImageUpload/>
                           <ImageUpload/>
                           <ImageUpload/>
                        </div>
                    </div>
                   
                </div>
               
                
                      <CustomButton
                        buttonStyle={style["big-btn"]}
                        type="orange"
                        text="Donate"
                        onClick={(e) => {
                          e.preventDefault();
                          setButtonModal(true);
                        }}
                      />
               
               
            </form>
        </div>
        <Modal trigger = {buttonModal}>
                  <div className={style.modalContentContainer}>
                    <h2 className={style.modalHeader}>We have received your request</h2>
                    <p className={style.modalHeader}>The DonoDeclutter team would like to thank you<br/> in advance for making a difference! <br/> We would contact you shortly</p>
                  </div>
       
        </Modal>
    </div>
  );
};

export default Donate;
