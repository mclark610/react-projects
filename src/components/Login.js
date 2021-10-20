import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { TextField,Button } from '@material-ui/core';
import { withRouter } from 'react-router';

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

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "admin",
      password: ""
    }
  }

  handleChange = (e) => {
    console.log("name: " + e.target.name);
    console.log("value:" + e.target.value);
    console.log("id: " + e.target.id);

    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    console.log("username: " + this.state.username + " password: " + this.state.password)
    // TODO:validate

    // pass authed user to app.
    this.props.setAuthedUser(this.state.username)

    // redirect to home.
    this.props.history.push('/')


  }

  handleClose = () => {
    // redirect to home.
    this.props.history.push('/')
  }

  render() {
    return(
        <div>
        <h2>Login</h2>
        <form action="">
                  <TextField
                    autoFocus
                    id="username"
                    name="username"
                    label="User Name"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <TextField
                    autoFocus
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    mr={12}
                  />
              </form>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleLogin} color="primary">
                Login
              </Button>
        </div>
    );
  }
}

Login.propTypes = {
  setAuthedUser: PropTypes.func.isRequired,
  authedUser: PropTypes.string.isRequired
}
export default withRouter(withStyles(styles)(Login));
