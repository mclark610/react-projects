import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { Tabs, Tab, FormControl, InputLabel, Select, MenuItem, Paper, Grid, FormHelperText } from '@mui/material'
import PartList from './PartList'
import TaskList from './TaskList'

import { AuthContext } from '../context/AuthContext';

import { TabPanel, a11yProps } from './TabPanel'

import { Navigate } from 'react-router'
/**
* @description This is the starting page.  
* @constructor sets tab, parts and projects state
* @param {array}  projects   - array of projects
* @param {array} parts       - array of parts
* @param {array} tasks       - array of tasks
*/

class Dashboard extends Component {
  static authContextType = AuthContext;

  state = {
      selectedTab: 0,
      selectedProject: -1,
  };

  handleChange = (e) => {
    console.log("Dashboard::handleChange: new value: <" + e.target.value + ">");
    this.setState({selectedProject:e.target.value})
//    this.props.handleProjectData(e.target.value)
    
  };

  handleTabClick = (e, val) => {
    this.setState({ selectedTab: val });
  };

  render() {
      const {isAuthenticated} = this.context;
      console.log("dashboard isauthenticiated: " + isAuthenticated);
    if (!isAuthenticated) {
      return(
        <Navigate to="/login" replace />
      );
    }
    return (

      <div>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} style={{ minWidth: "70%" }} >
            <Paper elevation={3} style={{ margin: "1rem" }}>
              <FormControl style={{ padding: 3, margin: 3, minWidth: "85%" }}>
                <InputLabel id="projects-label">Active Project</InputLabel>
                <Select
                  labelId="projects-label"
                  id="active-project"
                  value={this.state.selectedProject}
                  label="Active Project"
                  onChange={this.handleChange}
                >
                  <MenuItem key={0} value={-1}><em>-- Not Set --</em></MenuItem>
                  {/*
                  <MenuItem key={1} value={0}><em>Ford</em></MenuItem>
                  <MenuItem key={2} value={1}><em>Hyundai</em></MenuItem>
                  <MenuItem key={3} value={2}><em>Tiller</em></MenuItem>
 */}
                  {this.props.projects.map((project,index) => (

                    <MenuItem key={index+1} value={project.id}>
                      {project.name}
                    </MenuItem>
                  ))
                  }

                </Select>
                  <FormHelperText>Choose a project or none.</FormHelperText>
              </FormControl>
            </Paper>
          </Grid>

          <Grid item xs={12} style={{ minWidth: "70%", border: '2px solid green' }} >
            <Paper elevation={3} style={{ margin: "1rem" }}>
              <Tabs value={this.state.selectedTab} onChange={this.handleTabClick} aria-label="simple tabs example">
                {/* <Tab label="Projects" {...a11yProps(0)} /> */}
                <Tab label="Tasks"    {...a11yProps(0)} />
                <Tab label="Parts"    {...a11yProps(1)} />
              </Tabs>
              <h2>state.value:{this.state.selectedTab}</h2>
              <TabPanel value={this.state.selectedTab} index={0}>
                <TaskList tasks={this.props.tasks} activeProject={this.props.activeProject}/>
              </TabPanel>
              <TabPanel value={this.state.selectedTab} index={1}>
                <PartList parts={this.props.parts} activeProject={this.props.activeProject}/>
              </TabPanel>
            </Paper>
          </Grid>

        </Grid>
      </div>
    )
  }
}

Dashboard.propTypes = {
//  handleProjectData:PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,  
  parts: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  activeProject: PropTypes.object.isRequired,
}

export default Dashboard;
