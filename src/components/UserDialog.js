import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {doLogin} from './MaintainData';

export default class FormDialog extends React.Component {
  state = {
    open: false,
    btnLogin: "Login",
    username: '',
    password: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    alert("username; " + this.state.username );
    if ( this.state.username !== '') {
        alert("Signout?");
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => (event) => {
      this.setState({ [name]: event.target.value });
  };

  componentDidMount() {
      console.log("componentDidMount ID: " + this.props.maintainID)
      this.setState({btnLogin:"Login"});
  }

  handleLogin = (e) => {
     // axios
    doLogin(this.state.username,this.state.password)
        .then( (results) => {
            console.log("results: " + JSON.stringify(results));
            this.setState({username: results.data});
            this.setState({btnLogin: results.data});

            console.log("handleLogin: checking state: " + this.state.btnLogin);
            console.log("handleLogin: checking state: " + this.state.username);

            this.setState({open: false});
            alert(this.state.username + " logged in");
        })
        /*
        .catch( (error) => {
            alert("MaintainData:FAILED:  " + JSON.stringify(error));

            this.setState({btnLogin:"Login"});

        })
        */
  }

  handleSubmit(e) {
      alert('A name was submitted: ' + this.state.value);
      e.preventDefault();
  }
  render() {
      const { classes } = this.props;
    return (
      <div>
        <Button
            id="btnLogin"
            variant="outlined"
            color="secondary"
            onClick={this.handleClickOpen}
        >{this.state.btnLogin}</Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              For each wrong password given is one child we will take and feed to the hounds.
            </DialogContentText>
            <form action="">
                <TextField
                  autoFocus
                  margin="dense"
                  id="username"
                  label="User Name"
                  value={this.state.username}
                  onChange={this.handleChange('username')}
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  fullWidth
                />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
