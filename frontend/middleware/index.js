import { applyMiddleware } from 'redux';
import EventMiddleware from './event_middleware';
import SessionMiddleware from './session_middleware';
// import * from './____middleware';

export default applyMiddleware(
  EventMiddleware,
  SessionMiddleware
  );