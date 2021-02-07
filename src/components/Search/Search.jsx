import React from "react";
import styles from "./Search.module.css";
import {animateScroll} from 'react-scroll'
import ResultCharContainer from "./resultChar/resultCharContainer";
// попробовать сделать компоненту функциональной


const Search = (props) => {
  let ref=React.createRef()
  animateScroll.scrollToTop()
  let onChangeInput = () => {
    console.log(props);
    fetchingData()
  }
  let fetchingData = () =>{
    fetch(
      'https://rickandmortyapi.com/api/character/?name=' + ref.current.value
    )
      .then((response) => response.json())
      .then((data) => {
        props.setCharAC(data)
      })
      .catch((err) => console.log(err));
  }
    return (
      <div className={styles.search}>
        <h2>FIND</h2>
        <input  ref={ref} onChange={onChangeInput} placeholder="all characters"  />
        <ResultCharContainer />
      </div>
    );
  
}

export default Search;
