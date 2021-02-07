import ResultChar from "./resultChar";
import { setCharAC} from '../../../Redux/charactersReduser'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
  return {
    characters:state.characters,
    input: state.input
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    setCharAC: (data)=> dispatch(setCharAC(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultChar)





