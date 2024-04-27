import style from "./ImageUpload.module.css"


function ImageUpload () {
    return (
        <>
            <input className={style.imageUploadInput} />
            <span className={style.imageUploadplus}>+</span>
        </>
    )
}
export default ImageUpload