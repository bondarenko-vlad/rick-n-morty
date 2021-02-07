import Search from "./Search";
import { connect } from "react-redux";
import { setCharAC } from "../../Redux/charactersReduser";

let mapStateToProps = (state) => {
  return {
    input: state.characters.input,
    state:state
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    setCharAC: (data) => dispatch(setCharAC(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
