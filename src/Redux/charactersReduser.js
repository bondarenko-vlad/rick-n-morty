const SET_CHAR = "SET_CHAR";


const initialState = {
  results: [],
  page: 1,
  input: "",
  info: {}
};
const charactersReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_CHAR:
      return {results:action.data.results,
      info: action.data.info,
      url:'https://rickandmortyapi.com/api/character/?page=1'}
    
    default: return state

  }
}

export const setCharAC = (data) => {
  return {
    type: SET_CHAR,
    data,
  };
};



export default charactersReducer;
