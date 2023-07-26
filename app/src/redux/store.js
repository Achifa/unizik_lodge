import { configureStore } from '@reduxjs/toolkit';
import facilities from './agent/facilities';

let store = configureStore({
  reducer: {
    facilities: facilities
  }

})


export default store;