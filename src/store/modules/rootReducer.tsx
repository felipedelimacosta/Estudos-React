import { combineReducers } from 'redux';
import exemploReducer from './exemplo/reducer';
import exampleReducer from './example/reducer';
import duckReducer from './ducks/duckExample';
import nomeReducer from './nome/nomeDuck';

export const rootReducer = combineReducers({
  duck: duckReducer,
  nomeDuck: nomeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
