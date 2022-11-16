//Guard // Assistant

import { put, takeEvery } from "@redux-saga/core/effects";

//watcher function

// checker/watcher

function Guard(){
    //you reacshed to campus -
    //show your ID
    if(DEPARTMENT === "INFOSEC"){
        assistant();
    }
}

//generator part of es6

function* Guard(){

    yield takeEvery(INFOSEC, assistant);
}


function* assistant() {
    
    yield call(resources)

    yield put({DEPARTMENT :"HR", task : "neccessary Task"})

    yield put({DEPARTMENT :"HR", task : "neccessary Task"})

}

