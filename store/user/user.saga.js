import {
  CREATE_USER,
} from "./user.action";
import { all, put, takeEvery } from "redux-saga/effects";

function* createUserSaga(action) {
  try {
    yield put({
      type: CREATE_USER_SUCCESS,
      payload: action.params
    });
  } catch (e) {
    //handle failed case
  }
}

// function* deleteTodo(action) {
//   try {
//     yield put({
//       type: DELETE_TODO_SUCCESS,
//       payload: action.params
//     });
//   } catch (e) {
//     //handle failed case
//   }
// }

// function* changeStatus(action) {
//   try {
//     yield put({
//       type: CHANGE_STATUS_SUCCESS,
//       payload: action.params
//     });
//   } catch (e) {
//     //handle failed case
//   }
// }

// watcher
function* actionWatcher() {
  yield takeEvery(CREATE_USER, createUserSaga);
  // yield takeEvery(DELETE_TODO, deleteTodo);
  // yield takeEvery(CHANGE_STATUS, changeStatus);
}

// combine sagas
export default function* todosSaga() {
  yield all([actionWatcher()]);
}
