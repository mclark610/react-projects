import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import MainAppBar from "./components/MainAppBar";
import { Route, Routes } from "react-router-dom";


import Login from "./components/Login";
import ProjectDetail from "./components/ProjectDetail";
import PartStore from "./components/PartStore";

import { filterProjectData } from "./components/FilterProjectData";
import * as mockData from "./data/mockData";

import appTheme from "./themes/muiTheme.js";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AuthContextProvider from "./context/AuthContext";

/**
 * @description Beginning of application. Please see README.md
 * @constructor
 */

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      authedUser: "",
      projects: mockData.tmpProjects,
      tasks: mockData.tmpTasks,
      parts: mockData.tmpParts,
      activeProject: { id: -1, name: "Project" },
      allParts: mockData.tmpParts,
    };
  }

  /**
   * @function handleProjectData
   * @param {projectID} active Project ID.
   * @description sets up data to display data for project (id) or display all
   *              data if no project (-1) is selected
   */

  handleProjectData = (projectID) => {
    const projects = this.state.projects;

    console.log("----------------------------------------------------");
    console.log("App::handleProjectData:assigning projectID " + projectID);
    console.log("----------------------------------------------------");
    console.log("App::handleProjectData:projects: " + JSON.stringify(projects));

    if (projectID > -1) {
      console.log(
        "App::handleProjectData::project:: " +
          JSON.stringify(projects[projectID])
      );
      console.log(
        "App::handleProjectData::tasks:: " +
          JSON.stringify(projects[projectID].tasks)
      );

      console.log(
        "App::handleProjectData:current activeProject:: " +
          JSON.stringify(this.state.activeProject)
      );
      console.log(
        "App::handleProjectData:current tasks: " +
          JSON.stringify(this.state.tasks)
      );
      console.log(
        "App::handleProjectData:current parts: " +
          JSON.stringify(this.state.parts)
      );

      const activeProject = filterProjectData(
        projectID,
        mockData.tmpParts,
        mockData.tmpProjects,
        mockData.tmpTasks
      );
      console.log(
        "App::handleProjectData:activeProject:: " +
          JSON.stringify(activeProject)
      );
      console.log(
        "App::handleProjectData:tasks: " + JSON.stringify(activeProject.tasks)
      );
      console.log(
        "App::handleProjectData:parts: " + JSON.stringify(activeProject.parts)
      );

      this.setState({
        activeProject: activeProject,
        tasks: activeProject.tasks,
        parts: activeProject.parts,
      });
    } else {
      this.setState({
        tasks: mockData.tmpTasks,
        parts: mockData.tmpParts,
        activeProject: {
          id: -1,
          name: "DefaultProjects",
        },
        allParts: mockData.tmpParts,
      });
    }

    this.setState({ projectID: projectID });
  };

  handleSetAuthedUser = (authedUser) => {
    this.setState({ authedUser: authedUser });
  };

  handleAddTask = (activeProject, tasks, parts) => {
    this.setState({
      activeProject,
      tasks,
      parts,
    });
  };
  /**
   * @function handleTaskEditor
   * @param {projectID} projectID to associate with current task.
   * @description Call taskDetail to add task or edit task.
   */

  handleTaskEditor = (task) => {};

  render() {
    const parts = this.state.parts;
    const projects = this.state.projects;
    const tasks = this.state.tasks;
    const authedUser = this.state.authedUser;
    const projectID = this.state.projectID;
    const activeProject = this.state.activeProject;
    const allParts = this.state.allParts;
    //    const projectParts = this.state.projectParts;

    return (
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />
        <AuthContextProvider>
        <div className="App">
          <MainAppBar
            activeProject={this.state.activeProject}
          />
          <Routes>
            <Route
              path="/login"
              element={ <Login />}
            />

            <Route
              path="/"
              element={
                <Dashboard
                  parts={parts}
                  projects={projects}
                  tasks={tasks}
                  activeProject={activeProject}
                  handleProjectData={this.handleProjectData}
                />
              }
              exact
              authedUser={authedUser}
            />

            <Route
              path="/project/:id"
              exact
              authedUser={authedUser}
              element={
                <ProjectDetail
                  authedUser={authedUser}
                  parts={parts}
                  projects={projects}
                  tasks={tasks}
                  projectID={projectID}
                  activeProject={activeProject}
                />
              }
            />
            <Route
              path="/partstore"
              exact
              authedUser={authedUser}
              element={
                <PartStore
                  authedUser={authedUser}
                  parts={allParts}
                  projects={projects}
                  tasks={tasks}
                  projectID={projectID}
                  activeProject={activeProject}
                />
              }
            />

            {/*
            <Route 
              path="/" 
              exact 
              authedUser={authedUser}
              element={
                <RequireAuth>
                  <Dashboard authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} activeProject={activeProject} handleProjectData={this.handleProjectData}/>
                </RequireAuth>
              }
              />
  

            <Route 
              path="/task/:id" 
              exact 
              authedUser={authedUser}
              element={
                <RequireAuth>
                  <TaskDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} projectID={projectID} activeProject={activeProject}/>
                </RequireAuth>
              }
            />

            <Route 
              path="/addtask" 
              exact 
              authedUser={authedUser}
              element={
                <RequireAuth>
                  <AddTask authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} projectID={projectID} activeProject={activeProject}/>
                </RequireAuth>
              }
            />

            <Route 
              path="/part/:id" 
              exact 
              authedUser={authedUser}
              element={
                <RequireAuth>
                  <PartDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} projectID={projectID} activeProject={activeProject}/>
                </RequireAuth>
              }
            />

            <Route 
              path="/partstore" 
              exact 
              authedUser={authedUser}
              element={
                <RequireAuth>
                  <PartStore authedUser={authedUser} parts={allParts} projects={projects} tasks={tasks} projectID={projectID} activeProject={activeProject}/>
                </RequireAuth>
              }
            />

            <Route path="/">
              <InvalidPage />
            </Route>
             */}
          </Routes>
        </div>
        </AuthContextProvider>
      </ThemeProvider>
    );
  }
}

export default App;
