import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {Button} from '@material-ui/core';
import MaintainPanel from './MaintainPanel';
import PartPanel from './PartPanel';
import NotePanel from './NotePanel';
import TaskPanel from './TaskPanel';

import axios from 'axios';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class MaintainDialog extends React.Component {
  state = {
    open: false,
    maintain: [],
    expanded: 'panel-maintain',
    checked: [0]
  };

    componentDidMount() {
        console.log("componentDidMount ID: " + this.props.maintainID)
        this.getMaintain(this.props.maintainID);
    }

  handleClickOpen = () => {
      console.log("handleClickOpen ID: " + this.props.maintainID)
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleToggle = value => () => {
      const { checked } = this.state;
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      this.setState({
        checked: newChecked,
      });
  };
  getMaintain(id) {
      let query = `query{
        maintain(id:${id}) {
          name,
          todos {
            id,
            name,
            parts{
              id,
              name
            }
          }
        }
      }`;

      axios({
          url: 'http://localhost:5000/toto/graphql',
          method: 'post',
          data: {
              query: query
          }
      })
      /*
      axios.post("http://localhost:5000/graphql", { withCredentials: true,
                                                    crossdomain: true,
                                                    rejectUnauthorized: false,

          })
      */
              .then( (response) => {
                  console.log("get maintain response: " + JSON.stringify(response));
                  console.log("response header: " + JSON.stringify(response.headers));
                  console.log("******************************** set state maintain data ************************")
                  console.log("response.data: " + JSON.stringify(response.data["data"]["maintain"]));
                  console.log("*********************************************************************************");
                  this.setState({maintain: response.data["data"]["maintain"]});
                  // User logged in?
                  if (this.state.maintain.status) {
                      console.log("user status is : " + this.state.maintain.status);
                      throw( new Error("User not logged in"));
                  }
                 console.log("STATE MAINTAIN: " + JSON.stringify(this.state.maintain));
                  console.log("MAINTAIN OBJECT ===== " + JSON.stringify(this.state.maintain.data.maintain));
                  console.log("MAINTAIN OBJECT NAME ===== " + JSON.stringify(this.state.maintain.data.maintain.name));
              })
              .catch( (err) => {
                  console.log("err maintain response: " + JSON.stringify(err));
              })
      }
      handleChange = name => (event,expanded) => {
          this.setState({ [name]: event.target.value });
          this.setState({expanded: expanded ? 'panel-maintain' : false});
      };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open full-screen dialog
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >

          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                  {this.state.maintain["name"]}
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
            <MaintainPanel />
            <TaskPanel />
            <NotePanel />
            <PartPanel />
        </Dialog>
      </div>
    );
  }
}

MaintainDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaintainDialog);
