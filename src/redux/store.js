import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit';
import recommendedSlices from './slices/recommended/recommendedSlices';
import categoriesSlices from './slices/categories/categoriesSlices';
import productSlices from './slices/products/productSlices';
import userSlices from './slices/user/userSlices';

const reducers = combineReducers({
  recommended: recommendedSlices,
  categories: categoriesSlices,
  products: productSlices,
  user: userSlices,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [recommendedSlices],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export default store