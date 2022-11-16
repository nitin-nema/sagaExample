
import {call,put,takeEvery} from "redux-saga/effects"

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApiData() {
    return fetch(apiUrl).then(res => res.json().catch(err => err));
}

function* fetchUsers() {
    try {
        const users = yield call(getApiData);  //get all data
        yield put({ type: 'GET_USER_SUCCESS', users: users });

    } catch (error) {
        yield put({ type: 'GET_USERS_FAILED', message: error.message });
    }
}



//watcher saga 

function* userSaga() {

    // yield takeEvery("Action", "Worker Saga");

    yield takeEvery('GET_USER_REQUESTED', fetchUsers)
}


export default userSaga;


// Watcher --> all the action -> takeEvey/takeLatest
// Worker --> 

// either api response //suucess
// error  //error
// call - getting
//put 