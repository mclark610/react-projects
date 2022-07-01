import React from 'react'
import { Route, Navigate } from 'react-router-dom'

// TODO: add error message feature?

/**
* @description PrivateRoute  - a great object that checks if the user is currently
*                              authorized to use the given route.  
*                              Perfect demonstration of how to use ...rest feature
* @constructor
* @param {object} authedUser - The authorized userID that may answer the question
*/

function PrivateRoute({ children, ...rest }) {
  console.log("PrivateRoute::authedUser is : " + rest.authedUser)
  console.log("PrivateRoute::autheduser  " + (rest.authedUser === null ? "is Null" : "isnt Null"))
  console.log("PrivateRoute::authedUser  " + (rest.authedUser !== "" ? "children" : "redirect"))

  return rest.authedUser !== ""
    ? children
    : <Navigate to='/login' />
}

export default PrivateRoute;