import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import categoriesSlices from './slices/categories/categoriesSlices';
import productSlices from './slices/products/productSlices';
import recommendedSlices from './slices/recommended/recommendedSlices';
import userSlices from './slices/user/userSlices';

const rootReducer = combineReducers({
  recommended: recommendedSlices,
  categories: categoriesSlices,
  products: productSlices,
  user: userSlices,
});

export default persistReducer(
  {
    key: 'global',
    storage,
    whitelist: [],
  },
  rootReducer
);