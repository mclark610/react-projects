import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UserDialog from './UserDialog.js';

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

class Authenticate extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUmount() {
        clearInterval(this.timerID);
    }

    render() {
        return(
            <div>
            <h1>{this.state.date.toLocaleString()}</h1>
            <UserDialog />
            </div>
        );
    }
}

export default withStyles(styles)(Authenticate);
