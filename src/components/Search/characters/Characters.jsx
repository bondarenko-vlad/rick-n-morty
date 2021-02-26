import React from "react";
import styles from "../Search.module.css";


const Characters = (props) => {
  console.log(props)
  
  return (
    <div className={styles.result}>
      {
        props.characters.results.map((e) => (
          <div key={e.id} className={styles.item}>
            <img src={e.image} alt="" />
            <div className={styles.resultInfo}>
              <p className={styles.name}>{e.name}</p>
              <p>status: {e.status} </p>
              <p>gender:{e.gender}</p>
              <p>origin:{e.origin.name}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Characters;
