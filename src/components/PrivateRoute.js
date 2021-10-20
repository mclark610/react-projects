import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

// TODO: add error message feature?

/**
* @description PrivateRoute  - a great object that checks if the user is currently
*                              authorized to use the given route.  
*                              Perfect demonstration of how to use ...rest feature
* @constructor
* @param {object} authedUser - The authorized userID that may answer the question
*/

function PrivateRoute({ children, ...rest }) {
  console.log("authedUser is : " + rest.authedUser)
  console.log("autheduser null?: " + rest.authedUser===null? "is Null" : "isnt Null")
  console.log("authedUser: " + rest.authedUser !== "" ? "children" : "redirect")

  return (
    <Route {...rest} render={() => {

      return rest.authedUser !== ""
        ? children
        : <Redirect to='/login' />
    }} />
  )
}

export default withRouter(PrivateRoute)