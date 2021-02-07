import React from "react";
import styles from "./preloader.module.css";
import img from '../../img/characters.png'



const Preloader = (props) => {

  return <div className={styles.preloader}>
  <img src={img} />
  <p>LOADING...</p>
  </div>
}

export default Preloader;
