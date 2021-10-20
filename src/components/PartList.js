import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import PartCard from './PartCard';

import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const styles = theme => ({
  container: {
    height: "80%",
    width: "80%",
    margin: "1rem",
    textAlign: 'center',
    display: 'inline-block',

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
      <Fragment>
        {
          typeof parts !== 'undefined' && parts.length ?
            (
              <div>
                <TextField style={{ padding: 24 }}
                  id="searchInput"
                  placeholder="Parts"
                  margin="normal"
                  onChange={this.onSearchInputChange}
                />
                <Grid container spacing={1} style={{ padding: 24 }}>
                  {this.props.parts.map(currentPart => (
                    <Grid item key={currentPart.id} xs={12}>
                      {console.log("PartList::currentPart: " + JSON.stringify(currentPart))}
                      <PartCard currentPart={currentPart} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            )
            :
            <Container maxWidth="lg">
              <Paper elevation={1} className={classes.container}>
                {this.state.loginStatus}<br />
              </Paper>
            </Container>
        }
      </Fragment>
    )
  }
}

PartList.propTypes = {
  parts: PropTypes.array
}

export default withStyles(styles)(PartList);

