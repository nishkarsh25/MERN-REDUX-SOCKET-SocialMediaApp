import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import chatReducer from '../slice/chatSlice';
import postReducer from '../slice/postSlice';
import uploadReducer from '../slice/uploadSlice';
import userReducer from '../slice/userSlice';
import messageReducer from '../slice/messageSlice';


function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if (serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();








