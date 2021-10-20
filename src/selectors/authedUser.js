import React from 'react'
import {useSelector} from 'react-redux'
import {createSelector} from 'reselect'
import { setAuthedUser } from '../actions/authedUser'
import { doLogin} from '../components/ProjectData'

/**
* @description login authentication.  check if login is correct. if it is correct, 
* set state
* @param {string} username - username 
* @param {string} password - password
*/

export const handleDoLogin = (username, password) => {
  console.log("authedUser:doLogin:username: " + username + " password: " + password);

  // authenticate
  // send off.

  return(dispatch) => {
    return dispatch(setAuthedUser(username))
  }
};