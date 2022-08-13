import React,{useState} from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";
import {useAuth} from "./Authorize.js"

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

/**
 * @component Login
 * @param {function} setAuthedUser function to set authenticated user.
 * @param {object} authedUser      authenticated user
 * @description retrieves user name and password from user.
 *   checks if valid entry. 
 * @return
 *   valid: sets username
 */

const Login = (props) => {
  const navigate = useNavigate();

  let location = useLocation();
  let auth = useAuth();

  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");

  console.log("Login::props: " + JSON.stringify(props));
  console.log("Login::auth: " + JSON.stringify(auth));

  const handleChange = (e) => {
    console.log("Login::name: " + e.target.name);
    console.log("Login::value:" + e.target.value);
    console.log("Login::id: " + e.target.id);

//    setUsername(e.target.value);
  };

  /**
   * handleLogin
   * @param {event} e
   * check if user entry is valid. 
   */
  const handleLogin = (e) => {

    console.log(`Login::username: ${username} password: ${password}` );


    // TODO:validate
    console.log(`current: ${auth.user}`)
    // pass authed user to app.
  //  props.setAuthedUser(username);

    // redirect to home.
    navigate("/");
  };

  const handleClose = () => {
    // redirect to home.
    //    this.props.history.push('/')
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form action="">
        <TextField
          autoFocus
          id="username"
          name="username"
          label="User Name"
          value={username}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          id="password"
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={handleChange}
          mr={12}
        />
      </form>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={handleLogin} color="primary">
        Login
      </Button>
    </div>
  );
};

Login.propTypes = {
//  setAuthedUser: PropTypes.func.isRequired,
//  authedUser: PropTypes.string.isRequired,
};
export default Login;
