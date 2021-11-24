import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { Tabs, Tab, FormControl, InputLabel, Select, MenuItem, Paper, Grid,FormHelperText } from '@material-ui/core'
import PartList from './PartList'
import TaskList from './TaskList'

import {TabPanel,a11yProps} from './TabPanel'

/**
* @description This is the starting page.  
* @constructor sets tab, parts and projects state
* @param {array}  projects   - array of projects
* @param {object} authedUser - The authorized userID that may answer the question
* @param {array} parts       - array of parts
* @param {array} tasks       - array of tasks
*/

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0,
    }
  }

  handleChange = (e) => {
    this.setState({ activeProject: e.target.value });
    this.props.handleProjectData(e.target.value)


  };

  handleTabClick = (e,val) => {
    console.log("handleTabClick::event val: " + val);
    
    this.setState({ selectedTab: val });
  };

  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} style={{minWidth: "70%"}} >
            <Paper elevation={3} style={{margin:"1rem"}}>
              <FormControl style={{ padding: 3, margin: 3, minWidth: "85%" }}>
                <InputLabel id="projects-label">Active Project</InputLabel>
                <Select
                  labelId="projects-label"
                  id="active-project"
                  value={this.props.projectID}
                  label="Active Project"
                  onChange={this.handleChange}
                >
                  <MenuItem value={-1}><em>-- Not Set --</em></MenuItem>

                  {this.props.projects.map( (project) => (
                    <MenuItem key={project.id} value={project.id}>
                      {project.name}
                    </MenuItem>
                  ))
                  }

                </Select>
                <FormHelperText>Choose a project or none.</FormHelperText>
              </FormControl>
            </Paper>
          </Grid>

          <Grid item xs={12} style={{minWidth: "70%",border: '2px solid green'}} >
          <Paper elevation={3} style={{margin:"1rem"}}>
            <Tabs value={this.state.selectedTab} onChange={this.handleTabClick} aria-label="simple tabs example">
              {/* <Tab label="Projects" {...a11yProps(0)} /> */}
              <Tab label="Tasks"    {...a11yProps(0)} />
              <Tab label="Parts"    {...a11yProps(1)} />
            </Tabs>
            <h2>state.value:{this.state.selectedTab}</h2>
            <TabPanel value={this.state.selectedTab} index={0}>
              <TaskList tasks={this.props.tasks} />
            </TabPanel>
            <TabPanel value={this.state.selectedTab} index={1}>
              <PartList parts={this.props.parts} />
            </TabPanel>
          </Paper>
        </Grid>

      </Grid>
      </div>
    )
  }
}

MainPage.propTypes = {
  authedUser: PropTypes.any.isRequired,
  parts: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
}

export default MainPage;
