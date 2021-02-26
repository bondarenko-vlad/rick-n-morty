import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Search.module.css";

const Locations = (props) => {
  
  let setResidentsId = (arr, ids=[]) => {
    arr.forEach( e => {
      ids.push(parseInt(e.match(/\d+/)))
    });
     return ids
  }
  
  

  return (
    <div className={styles.result}>
      {props.locations.results.map((e) => (
        <div className={styles.location} key={e.id}>
          <p>Name: {e.name}</p>
          <p>Type: {e.type}</p>
          <p>Dimension: {e.dimension}</p>
          <p>Residents:<NavLink to={'/resident'} onClick={()=>{
            props.residentOf(setResidentsId(e.residents))
            }}><span className={styles.name}>click</span> </NavLink></p>
        </div>
      ))}
    </div>
  );
};
export default Locations;
