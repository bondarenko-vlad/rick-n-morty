import React from 'react'
import styles from "../Search.module.css";

const Episodes = (props) => {
    console.log(props);
    return (
        <div className={styles.result}>
          {props.episodes.results.map((e) => (
            <div className={styles.location}>
              <p>Name: {e.name}</p>
              <p>Air date: {e.air_date}</p>
              <p>Episode number: {e.episode}</p>
              <p>Characters: <u>click</u></p>
            </div>
          ))}
        </div>
      )
}
export default Episodes