export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";

export const DELETE_USER = "DELETE_USER";
export const EDIT_USER_INDEX = "EDIT_USER_INDEX";
export const UPDATE_USER = "UPDATE_USER";
export const SET_USERS = "SET_USERS";

export const createUser = (params) => {
  return {
    type: CREATE_USER,
    params
  };
};

export const deleteUser = (params) => {
  return {
    type: DELETE_USER,
    params
  }; 
};

export const updateUser = (index,data) => { 
  return {
    type: UPDATE_USER,
    index,
    data
  };
}

export const setUsers = (params) => { 
  return {
    type: SET_USERS,
    params
 
  };
}

export const editUserIndex  = (params) => { 
  return {
    type: EDIT_USER_INDEX,
    params
  };
}