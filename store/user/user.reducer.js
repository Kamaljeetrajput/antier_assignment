import {
  CREATE_USER_SUCCESS,
  DELETE_USER,
  CREATE_USER,
  EDIT_USER_INDEX,
  UPDATE_USER,
  CLEAR_USERS,
  SET_USERS
} from "./user.action";

const initialState = {
  data: [],
  editIndex:""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        data: [...state.data, action.params]
      };
    case DELETE_USER:
      return {
        ...state,
        data: state.data.filter((item,index) => index !== action.params)
      };

    case EDIT_USER_INDEX:
      return {
        ...state,
        editIndex: action.params
      };
    case UPDATE_USER:
      return {
        ...state,
        data: state.data.map((content,index) =>
          index === action.index
            ? action.data
            : content
        )
      };
    case SET_USERS:
      return {
        ...state,
        data: action.params
     };
    default:
      return state;
  }
};

export default user;
