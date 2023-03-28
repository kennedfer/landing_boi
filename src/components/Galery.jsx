import { useRef, useState } from "react";
import style from "../styles/style.module.css";

export const Galery = () => {
  const [index, changeIndex] = useState(0);
  const imgRef = useRef();

  const imagesPath = "/images/galery/";
  const images = Array(19)
    .join()
    .split(",")
    .map((e, index) => `${imagesPath}/galery(${index + 1}).jpg `);

  const handleClick = (increment) => {
    let newIndex = index + increment;
    if (newIndex < 0) newIndex = images.length + newIndex;

    changeIndex(newIndex % images.length);
  };

  return (
    <div className={style.galery}>
      <button
        className={style["left-button"] + " " + style["direction-button"]}
        onClick={() => handleClick(-1)}
      >
        {"<"}
      </button>
      <img ref={imgRef} className={style.image} src={images[index]} alt="" />
      <button
        className={style["right-button"] + " " + style["direction-button"]}
        onClick={() => handleClick(1)}
      >
        {">"}
      </button>
    </div>
  );
};
