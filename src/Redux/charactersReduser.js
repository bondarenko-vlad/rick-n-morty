const SET_CHAR = "SET_CHAR";
const RESET_STATE = 'RESET_STATE'



const initialState = {
  results: [],
  page: 1,
  info: {}
};
const charactersReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_CHAR:
      return {...state = action.data}
    case RESET_STATE: 
        return {...state = []}
    
    
    default: return state

  }
}

export const setCharAC = (data) => {
  return {
    type: SET_CHAR,
    data,
  };
};
export const resetState = () => {
  return {
    type: RESET_STATE
  }
}





export default charactersReducer;
