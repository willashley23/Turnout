import { applyMiddleware } from 'redux';
import BenchesMiddleware from './benches_middleware';
import SessionMiddleware from './session_middleware';
// import * from './____middleware';

export default applyMiddleware(
  BenchesMiddleware,
  SessionMiddleware
  );