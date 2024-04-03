import React from "react";
import style from "./Loader.module.scss"; // Import CSS for styling

const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <div className={style.loader}></div>
    </div>
  );
};

export default Loader;
