import { applyMiddleware } from 'redux';
import EventMiddleware from './event_middleware';
import SessionMiddleware from './session_middleware';
// import * from './____middleware';
import logger from 'redux-logger';

export default applyMiddleware(
  logger(),
  EventMiddleware,
  SessionMiddleware
  );