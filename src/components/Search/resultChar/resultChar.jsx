import React from "react";
import Preloader from "../../preloader/Preloader";
import styles from "../Search.module.css";
import {animateScroll} from 'react-scroll'

class ResultChar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isLoad: false,
      url: 'https://rickandmortyapi.com/api/character/?page=1'
    };
    this.animateScroll = animateScroll
  }
  fetchData(url) { 
    fetch(
      url
    )
      .then((response) => response.json())
      .then((data) => {
        this.props.setCharAC(data);
        this.setState({
          isLoad: true
        });
      })
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    this.fetchData(this.state.url);
  } 
  
nextPage=()=>{    
    if (this.props.characters.info.next===null) return
    this.animateScroll.scrollToTop()
    this.fetchData(this.props.characters.info.next);
    this.setState({isLoad:false}) 
}
prevPage=()=>{  
  if (this.props.characters.info.prev===null) return       
  this.animateScroll.scrollToTop()
    this.fetchData(this.props.characters.info.prev);
    this.setState({isLoad:false}) 
}

  render() {
    return (
      <div className={styles.result}>
        {!this.state.isLoad ? (
          <Preloader />
        ) : (
          this.props.characters.results === undefined ? <p>Nothing</p> :
          this.props.characters.results.map((e) => (
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
        )}
        <button
          onClick={this.prevPage}
        >
          Prev
        </button>
        <button
          onClick={this.nextPage}
        >
          Next
        </button>
      </div>
    );
  }
}

export default ResultChar;
