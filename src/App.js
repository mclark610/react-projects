import React, { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import MainAppBar from './components/MainAppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import InvalidPage from './components/InvalidPage'
import ProjectDetail from './components/ProjectDetail'
import TaskDetail from './components/TaskDetail'
import PartDetail from './components/PartDetail'

import { filterProjectData } from './components/FilterProjectData'
import { tmpTasks, tmpParts, tmpProjects } from './data/mockData'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authedUser: "Admin",
      projects: tmpProjects,
      tasks: tmpTasks,
      parts: tmpParts,
      projectID: -1
    }
  }

  handleSetAuthedUser = (authedUser) => {
    //setAuthedUser(authedUser)
  }

  handleProjectData = (projectID) => {
    // display only tasks associated with project if project id is not undefined
    // project: -1 show all projects
    const projects = this.state.projects;

    console.log("----------------------------------------------------")
    console.log("handleProjectData:assigning projectID " + projectID)
    console.log("----------------------------------------------------")
    console.log("pppppppppppppppppppppppppppppppppppppppppppppppppppp")
    console.log("handleProjectData:projects:: " + JSON.stringify(projects))
    console.log("pppppppppppppppppppppppppppppppppppppppppppppppppppp")

    if (projectID !== -1) {
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
      console.log("handleProjectData::project:: " + JSON.stringify(projects[projectID]))
      console.log("handleProjectData::tasks:: " + JSON.stringify(projects[projectID].tasks))
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
      let projectData = filterProjectData(projectID, tmpParts, tmpProjects, tmpTasks)
      this.setState({
        tasks: projectData.tasks,
        parts: projectData.parts,
        projectID: projectID,
      })
    }
    else {
      this.setState({
        tasks: tmpTasks,
        parts: tmpParts
      })
    }

    this.setState({ projectID: projectID })

  }

  filterProjectData = (projectID) => {
    let projectTasks = [];
    let projectParts = [];
    const parts = this.state.parts;
    const projects = this.state.projects;
    const tasks = this.state.tasks;
    let plist = Set();

    console.log("filterProjectData::parts list is : " + JSON.stringify(parts))
    if (projectID > -1) {
      // build tasks list
      projects[projectID].tasks && projects[projectID].tasks.map(taskID => {
        console.log("filterProjectData::taskID: " + taskID)
        projectTasks.push(tasks.filter((task) => task.id === taskID));

        //build parts list - ignore duplicates for now
        tasks[taskID].parts && tasks[taskID].parts.map(partID => {
          console.log(`filterProjectData:tasks[${taskID}].parts ID: ${partID}`)
          projectParts.push(parts.filter((part) => part.id === partID));
        })
      })
      /*
      setTasks(projectTasks);
      setParts(projectParts);
      */
      this.setState({
        tasks: [...projectTasks],
        parts: projectParts
      })
      console.log("filterProjectData::state.parts: " + JSON.stringify(parts))
    }

    console.log("filterProjectData::projectTasks : " + JSON.stringify(projectTasks))
    console.log("filterProjectData::projectParts : " + JSON.stringify(projectParts))
    console.log("filterProjectData::state.parts 2: " + JSON.stringify(parts))
  }

  render() {
    const parts = this.state.parts;
    const projects = this.state.projects;
    const tasks = this.state.tasks;
    const authedUser = this.state.authedUser;

    return (
      /* filter data based on selected active project id*/
      <div className="App">
        <Router>
          <MainAppBar authedUser={this.state.authedUser} setAuthedUser={this.handleSetAuthedUser} />
          <Switch>
            <Route path="/login">
              <Login authedUser={authedUser} setAuthedUser={this.handleSetAuthedUser} />
            </Route>
            <PrivateRoute path="/" exact authedUser={authedUser}>
              <MainPage authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} projectID={this.state.projectID} handleProjectData={this.handleProjectData} />
            </PrivateRoute>
            <PrivateRoute path="/project/:id" exact authedUser={authedUser}>
              <ProjectDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} />
            </PrivateRoute>
            <PrivateRoute path="/task/:id" exact authedUser={authedUser}>
              <TaskDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} />
            </PrivateRoute>
            <PrivateRoute path="/part/:id" exact authedUser={authedUser}>
              <PartDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} />
            </PrivateRoute>

            <Route path="/">
              <InvalidPage />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App
