import { applyMiddleware } from 'redux';
import EventMiddleware from './event_middleware';
import SessionMiddleware from './session_middleware';
// import * from './____middleware';
import logger from 'redux-logger';
import BookmarkMiddleware from './bookmark_middleware';
import TicketMiddleware from './ticket_middleware';

export default applyMiddleware(
  logger(),
  EventMiddleware,
  BookmarkMiddleware,
  TicketMiddleware,
  SessionMiddleware
  );