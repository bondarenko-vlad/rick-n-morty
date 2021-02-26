import React from "react";
import styles from "./Search.module.css";
import { animateScroll } from "react-scroll";
import Locations from "./locations/Locations";
import Episodes from "./episodes/Episodes";
import {Route} from 'react-router-dom'
import Preloader from "../preloader/Preloader";
import Characters from "./characters/Characters";
import Residents from "./residents/Residents";



const Search = (props) => {
  let ref = React.createRef();
  animateScroll.scrollToTop();
  let onChangeInput = () => {
    if (ref.current.value[0] !== undefined) {
      let newStr =
        ref.current.value[0].toUpperCase() + ref.current.value.slice(1);
      props.searchChar(newStr);
    } else {
      props.searchChar("");
    }
  };
  return (
    <div className={styles.search}>
      <h2>FIND</h2>
      <input
        ref={ref}
        onChange={onChangeInput}
        placeholder={'all '+ props.state.match.url.slice(1) + 's'}
      />
      {!props.isLoad? <Preloader /> :
      <div>
      <Route path='/character' render={()=><Characters characters={props.state.state.characters}/> }
      /> 
      <Route path='/location' render={()=> <Locations residentOf={props.residentOf} locations={props.state.state.characters} /> }
      />
      <Route path='/resident' render={()=><Residents characters={props.state.state.characters}/> }
      /> 
      <Route path='/episode' render={()=> <Episodes episodes={props.state.state.characters} /> }
      />
      </div>}
      
      
      <button onClick={props.prevPage}>Prev</button>
      <button onClick={props.nextPage}>Next</button>
    </div>
  );
};

export default Search;
