import React from 'react';

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

    render() {
        return(
            <div>
            <UserDialog />
            </div>
        );
    }
}

export default withStyles(styles)(Authenticate);
