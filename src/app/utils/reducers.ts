// @ts-nocheck

/* eslint-disable no-param-reassign */

/* eslint-disable consistent-return */
// import produce from 'immer';

/**
 * Combine all reducers in this file and export the combined reducers.
 */
 import { combineReducers } from 'redux';
//  import { connectRouter } from 'connected-react-router';

 /**
  * Creates the main reducer with the dynamically injected ones
  */
 
 export default function createReducer(injectedReducers) {
   return combineReducers({
     router: {},
     ...injectedReducers
   });
 }
 