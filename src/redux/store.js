import { configureStore } from '@reduxjs/toolkit'
import rootReducers from "./reducer"
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/index'


const persistedState = loadFromLocalStorage();
console.log('persist store', persistedState);
const store = configureStore({
    reducer: rootReducers,
    preloadedState: persistedState
  })

store.subscribe(() => saveToLocalStorage(store.getState()));  
  
export default store;

