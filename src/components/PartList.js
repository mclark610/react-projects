import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

import { Paper } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import PartListItem from './PartListItem';

import { List, Box, Grid } from '@material-ui/core';

const styles = theme => ({
  taskPartList: {

    width: "80%",
    paddingTop: "20px",
    marginBottom: "4px",
    marginLeft: "20px",
    textAlign: "left",
  },
  searchPartList: {

    width: "80%",
    paddingTop: "20px",
    marginBottom: "4px",
    marginLeft: "20px",
    textAlign: "left",

  }
});


class PartList extends Component {

  state = {
    searchFor: '',
  }

  componentDidMount() {
  }

  render() {
    const { classes, parts } = this.props;

    return (
      parts && parts.length ? (
        <div>
          <Grid item xs={5} className={classes.searchPartList}>
            <TextField 
              id="searchPartList"
              placeholder="Part"
              onChange={this.onSearchInputChange}
            />
          </Grid>

          <Grid item xs={8} className={classes.taskPartList}>
            {console.log("************** PartList::render::return ")}
            <Box width="100%" sx={{ border: '2px solid blue' }}>
              <List >
                {this.props.parts.map((currentPart, index) => (
                  <PartListItem key={index}
                    currentPart={currentPart}
                  />
                ))}
              </List>
            </Box>
          </Grid>
        </div>
      )
        : (
          <Grid container>
            {console.log("???????????? PartList::render::return 2")}
            <Paper elevation={1} className={classes.container}>
              {this.state.loginStatus}<br />
            </Paper>
          </Grid>
        )
    )
  }
}

PartList.propTypes = {
  parts: PropTypes.array
}

export default withStyles(styles)(PartList);

