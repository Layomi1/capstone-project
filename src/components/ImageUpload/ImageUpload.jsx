import style from "./ImageUpload.module.css"


function ImageUpload () {
    return (
        <>
            <input type="file" id="customInput" className={style.imageUploadInput} />
            <label for ="customInput" className={style.imageUploadplus}>+</label>
            
        </>
    )
}
export default ImageUpload