import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import PropTypes from 'prop-types';

class UserDialog extends React.Component {
  state = {
    open: false,
    btnLogin: '',
    username: '',
    password: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    console.log("name: " + e.target.name);
    console.log("value:" + e.target.value);
    console.log("id: " + e.target.id);

    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    console.log("UserDialog coming up")
      this.setState({btnLogin:"Login"});
      this.setState({ open: true });
  }

  handleLogin = (e) => {
    this.handleClose()
  }

  handleSubmit(e) {
      e.preventDefault();
  }
  
  render() {
    // 
    return (
      <div>
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
                  name="username"
                  label="User Name"
                  value={this.state.username}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
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

UserDialog.propTypes = {
  username: PropTypes.string,
}

export default UserDialog
