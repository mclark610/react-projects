import React, { Component, Fragment } from 'react'
import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Container } from '@mui/material';
import { Paper } from '@mui/material';
import { PropTypes } from 'prop-types';
import {List,Box} from '@mui/material';
import ProjectListItem from './ProjectListItem';

const styles = theme => ({
  container: {
    height: "80%",
    width: "80%",
    margin: "1rem",
    textAlign: 'center',
    display: 'inline-block',

  }
});

class ProjectList extends Component {

  state = {
    searchFor: '',
  }

  componentDidMount() {
  }

  render() {
    const { classes, projects } = this.props;

    return(
    projects && projects.length ? (
      <Fragment>
      <TextField style={{ padding: 22 }}
        id="searchInput"
        placeholder="Maintenance"
        margin="normal"
        onChange={this.onSearchInputChange}
      />
      {console.log("************** ProjectList::render::return ")}
      <Box width="100%" sx={{ border: '2px solid blue'}}>
      <List>

        {this.props.projects.map((currentProject,index) => (
            <ProjectListItem  key={index}      
              currentProject={currentProject} />
        ))}
        </List>
        </Box>
      </Fragment>
    )
    :
    (
      <Container maxWidth="lg">
      {console.log("???????????? ProjectList::render::return 2")}
      <Paper elevation={1} className={classes.container}>
        {this.state.loginStatus}<br />
      </Paper>
      </Container>
    )
    )
  }
}

ProjectList.propTypes = {
  projects: PropTypes.array
}

export default withStyles(styles)(ProjectList);
