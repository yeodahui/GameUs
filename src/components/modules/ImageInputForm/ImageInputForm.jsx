import { useRef, useState } from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import ImageInputButton from "../../atoms/ImageInputButton/ImageInputButton";
import styles from "./imageInputForm.module.css";

function ImageInputForm({ a11y, boxType, boxSize, buttonColor }) {
  // 상위 컴포넌트로 이동 필요
  const [image, setImage] = useState("");
  const selectFile = useRef("");
  function saveImage(event) {
    setImage(URL.createObjectURL(event.target.files[0]));
  }
  return (
    <div className={`${styles["image-input"]} ${styles[boxType]}`}>
      {a11y && <p className="a11y-hidden">{a11y}</p>}
      <ImageBox src={image} type={boxType} size={boxSize} />
      <ImageInputButton
        selectFile={selectFile}
        saveImage={saveImage}
        color={buttonColor}
        boxType={boxType}
        size="medium"
      />
    </div>
  );
}

export default ImageInputForm;