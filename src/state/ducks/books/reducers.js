import * as Actions from "./types"

const initialState = {
    data: [],
    loading: false,
    filter: "",
    searchTerm: "",
    sortTerm: "",
    searchType: ""
};

const booksReducer = (state=initialState, action) => {
  switch (action.type) {
      case Actions.ADD_BOOK:
          return {
              ...state,
              data: [...state.data, action.payload]
          };
      case Actions.SET_BOOKS:
          return {
              ...state,
              data: action.payload,
              loading: false
          }
      case Actions.LOAD_BOOKS:
          return {
              ...state,
              loading: true
          };
      case Actions.SET_FILTER:
          return {
              ...state,
              filter: action.payload
          };
      case Actions.SEARCH_BOOKS:
          return {
              ...state,
              searchTerm: action.payload.searchTerm,
              searchType: action.payload.searchType
          };
      case Actions.SORT_BOOKS:
          return {
              ...state,
              sortTerm: action.payload
          };   
      default:
          return state;
  }
};

export default booksReducer;