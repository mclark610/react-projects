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
    }


    componentDidMount() {
    }

    componentWillUmount() {
    }

    render() {
        return(
            <div>
            <UserDialog />
            </div>
        );
    }
}

export default withStyles(styles)(Authenticate);
