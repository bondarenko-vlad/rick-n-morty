import React from 'react'
import Search from "./Search";
import { connect } from "react-redux";
import { resetState, setCharAC } from "../../Redux/charactersReduser";
import {animateScroll} from 'react-scroll'
import { withRouter } from 'react-router-dom';

class SearchContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoad:false,
      urlEdition: this.props.match.url.slice(1)
    }
  }
  
  fetchData(url){
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.props.setCharAC(data)
        this.setState({isLoad:true})
      })
      .catch((err) => console.log(err));
  }

  componentDidMount(){
    this.fetchData(`https://rickandmortyapi.com/api/${this.state.urlEdition}/?page=1`)
  }
  componentWillUnmount(){
    this.props.resetState()
  }

  nextPage(){
    if (this.props.state.characters.info.next===null) return
    animateScroll.scrollToTop()
    this.fetchData(this.props.state.characters.info.next);
    this.setState({isLoad:false}) 
  }
  
  prevPage(){
    if (this.props.state.characters.info.prev===null) return
    animateScroll.scrollToTop()
    this.fetchData(this.props.state.characters.info.prev);
    this.setState({isLoad:false}) 
  }
  searchChar(char){
    this.fetchData(`https://rickandmortyapi.com/api/${this.state.urlEdition}/?name=`+char)
  }
  residentsOf(arr){
    this.fetchData(`https://rickandmortyapi.com/api/character/`+arr.join())
    
  }

  render(){
    return <Search isLoad={this.state.isLoad} 
    state={this.props} nextPage={this.nextPage.bind(this)} 
    prevPage={this.prevPage.bind(this)} searchChar={this.searchChar.bind(this)}
     residentOf={this.residentsOf.bind(this)}  />
  }
}

let mapStateToProps = (state) => {
  return {
    state:state
    
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    setCharAC: (data) => dispatch(setCharAC(data)),
    resetState: () => dispatch(resetState())
  }
};
let withRouterComponent = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer))
export default withRouterComponent
