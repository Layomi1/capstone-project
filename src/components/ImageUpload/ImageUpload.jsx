import React, { useState } from 'react';
import style from "./ImageUpload.module.css"


function ImageUpload ({ id }) {
    const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


    const handleImageUpload = (event) => {
        const imageSelected = event.target.files[0];
        if (imageSelected && imageSelected.type.startsWith('image/')) {
          setImage(imageSelected);
          setFileName(imageSelected.name); 
          setErrorMessage(''); 
          setSuccessMessage(`Upload successful: ${imageSelected.name}`);
        } else {
          setErrorMessage('Upload failed. Please select a valid image file.');
          setSuccessMessage('');
        }
      };

      const labelText = successMessage || errorMessage || (fileName ? `File uploaded: ${fileName}` : '+');


    return (
        <>
            <input type="file" id="customInput"  className={style.imageUploadInput} accept="image/*" onChange={handleImageUpload} />
             <label for ="customInput" className={style.imageUploadplus}>
             {labelText}
             </label>
            
           
        </>
    )
}
export default ImageUpload

export const ImageUploadMap = () => {
    const initialUploaderData = [
        { id: 'receipt' },
        { id: 'goods-1' },
        { id: 'goods-2'  }
        // Add more objects for additional instances
      ];

      return (
        <div>
          {initialUploaderData.map(data => (
            <ImageUpload key={data.id} id={data.id} />
          ))}
        </div>
      );
}