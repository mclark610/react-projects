import React, { Component } from 'react'
import ProjectList from './ProjectList'
import { PropTypes } from 'prop-types'

import { Tabs, Tab, Box, FormControl, InputLabel, Select, MenuItem, Paper, Grid,FormHelperText } from '@material-ui/core'

function TabPanel(props) {
  const { children, value, index, ...rest } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <Box p={2}>
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      activeProject: 0
    }
  }

  handleChange = (event) => {
    this.setState({ activeProject: event.target.value });
  };

  render() {

    return (
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "80%" }}
        >
          <Grid item xs={12} style={{minWidth: "70%",paddingTop:"3px"}} >
            <Paper elevation={3} style={{margin:"1rem"}}>
              <FormControl style={{ padding: 3, margin: 3, minWidth: "85%" }}>
                <InputLabel id="projects-label">Active Project</InputLabel>
                <Select
                  labelId="projects-label"
                  id="active-project"
                  value={this.state.activeProject}
                  label="Active Project"
                  onChange={this.handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={0}>-- None --</MenuItem>
                  <MenuItem value={1}>Ranger</MenuItem>
                  <MenuItem value={2}>Elantra</MenuItem>
                  <MenuItem value={3}>Generator</MenuItem>
                </Select>
                <FormHelperText>Choose a project or none.</FormHelperText>
              </FormControl>
            </Paper>
          </Grid>

          <Grid item xs={12} style={{minWidth: "70%"}} >
          <Paper elevation={3} style={{margin:"1rem"}}>
            <Tabs indicatorColor="primary" value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
              <Tab label="Projects" {...a11yProps(0)} />
              <Tab label="Tasks"    {...a11yProps(1)} />
              <Tab label="Todos"    {...a11yProps(2)} />
              <Tab label="Parts"    {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={this.state.value} index={0}>
              <ProjectList projects={this.props.projects} />
            </TabPanel>
            <TabPanel value={this.state.value} index={1}>
              Tasks
            </TabPanel>
            <TabPanel value={this.state.value} index={2}>
              Two
            </TabPanel>
            <TabPanel value={this.state.value} index={3}>
              Three
            </TabPanel>
          </Paper>
        </Grid>

      </Grid>
      </div>
    )
  }
}

export default MainPage;
