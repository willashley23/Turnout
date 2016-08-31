import { createStore } from 'redux';
import RootReducer from '../reducers';
import MasterMiddleware from '../middleware';

const configureStore = (preloadedState = {}) => (
    createStore(
      RootReducer,
      preloadedState,
      MasterMiddleware
    )
  );

export default configureStore;