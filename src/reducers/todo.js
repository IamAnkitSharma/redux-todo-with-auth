const DUMMY_TODOS = [
  
];
const intialState = {
  list: DUMMY_TODOS,
};
const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      if (action.payload) {
        state.list = [...action.payload];
      }
      return { ...state, list: [...state.list.reverse()] };
    case "ADD_TODO":
      state.list.unshift(action.payload);
      return { ...state, list: [...state.list] };
    case "DELETE_TODO":
      return { ...state, list: [...action.payload] };
    default:
      return { ...state };
  }
};

export default todoReducer;
