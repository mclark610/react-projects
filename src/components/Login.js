import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, TextField, Button } from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Authorize.js";

/**
 * @component Login
 * @param {function} log user in if valid
 * @param {object} authedUser      authenticated user
 * @description retrieves user name and password from user.
 *   checks if valid entry.
 * @return
 *   valid: sets username
 */

const Login = (props) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  // address user wants to go to after he logs in
  let from = location.state?.from?.pathname || "/";
  console.log("Login::from: " + from);

  console.log("Login::props: " + JSON.stringify(props));
  console.log("Login::auth: " + JSON.stringify(auth));

  /**
   * handleLogin
   * @param {event} e
   * check if user entry is valid.
   */
  const handleLogin = (e) => {
    // get data
    console.log(
      `Login::handleLogin::username/password state : ${username} password: ${password}`
    );

    // TODO:validate
    console.log("handleLogin::auth: " + JSON.stringify(auth));

    // TODO:authenticate
    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  };

  const handleClose = () => {
    // redirect to home.
    //    this.props.history.push('/')
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          "& button": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoFocus
          id="username"
          name="username"
          label="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          autoFocus
          id="password"
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mr={12}
        />
        <div>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogin} variant="contained" color="primary">
            Login
          </Button>
        </div>
      </Box>
    </div>
  );
};

Login.propTypes = {
  //  setAuthedUser: PropTypes.func.isRequired,
  //  authedUser: PropTypes.string.isRequired,
};
export default Login;
