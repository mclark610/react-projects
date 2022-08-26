import React, { createContext,useState } from "react";

export const AuthContext = createContext()

class AuthContextProvider extends React.Component {
  state = {
    isAuthenticated: false,
    auth: {
      name: '',
      pwd: '',
    }
  }

  setAuth = (user,pwd) => {
    this.setState({auth: {
      name:user,
      pwd:pwd
    }})
  }
  toggleAuth = () => {
    this.setState({isAuthenticated: !this.state.isAuthenticated})
  }

  login = async (user,pwd) => {
    console.log("AuthContext::login:setting state Auth ");

    this.setAuth(user,pwd);
    if ((user === "Mark" ) && (pwd === "SecretPassword")) {
      console.log("AuthContext::login:found that mark is user")
      this.setState({isAuthenticated: true});
    }
    if ((user === "admin" ) && (pwd === "password")) {
      console.log("AuthContext::login:found that admin is user")
      this.setState({isAuthenticated: true});
    }
  }

  logout = () => {
    this.setState({auth:{
      user:'',
      pwd:'',
    }});
    this.setState({isAuthenticated: false});

  }
  render() {
  return (
    <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth, login:this.login,logout:this.logout}}>
    {this.props.children}
  </AuthContext.Provider>  )
  }
}
export default AuthContextProvider;