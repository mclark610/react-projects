import React, { useState, useContext } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/**
 * @component Login
 * @param {function} log user in if valid
 * @param {object} auth      authenticated user
 * @description retrieves user name and password from user.
 *   checks if valid entry.
 * @return
 *   valid: sets username
 */

const Login = () => {
  const { isAuthenticated, auth, login, logout } = useContext(AuthContext);

  console.log("LOGIN isAuthenticated: " + isAuthenticated);
  console.log("LOGIN auth: " + JSON.stringify(auth));

  const [username, setUsername] = useState(auth.name);
  const [password, setPassword] = useState(auth.pwd);

  const navigate = useNavigate();
  let location = useLocation();

  // address user wants to go to after he logs in
  let from = location.state?.from?.pathname || "/";
  console.log("Login::from: " + from);

  /**
   * handleLogin
   * @param {event} e
   * check if user entry is valid.
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    // get data
    console.log(
      `Login::handleLogin::username/password state : ${username} password: ${password}`
    );

    try {
      await login(username, password);
      if (isAuthenticated === true) {
        console.log("Login: from: " + from);
        navigate(from, { replace: true });
      }
    
    } catch (err) {
      console.log(`error found in calling login ${err}`);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const handleClose = () => {
    if (isAuthenticated === true) {
      navigate(from, { replace: true });
    } 
};

  return (
    <div>
      <h2>Login</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch", border: "2px solid red" },
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
          <Button onClick={handleLogout} variant="contained" color="primary">
            Logout
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
