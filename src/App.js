import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'

import MainAppBar from './components/MainAppBar';
import Login from './components/Login'

import MainPage from './components/MainPage';
import ProjectDetail from './components/ProjectDetail'
import AddTask from './components/AddTask'
import PartStore from './components/PartStore'
import PartDetail from './components/PartDetail'
import TaskDetail from './components/TaskDetail'
import InvalidPage from './components/InvalidPage'

import filterProjectData from './components/FilterProjectData'

import * as mockData from './data/mockData'

/**
 * @description Beginning of application. Please see README.md
 * @constructor
 */


function App() {
  const [projects, setProjects] = useState(mockData.tmpProjects)
  const [parts, setParts] = useState(mockData.tmpParts)
  const [tasks, setTasks] = useState(mockData.tmpTasks)
  const [allParts, setAllParts] = useState(mockData.tmpParts)
  const [authedUser, setAuthedUser] = useState("Admin")
  const [activeProject, setActiveProject] = useState({ id: -1, name: "Project" })
  const [projectID, setProjectID] = useState(-1);
  const [location,setLocation] = useState('Project')

  const handleSetAuthedUser = (authedUser) => {
    setAuthedUser(authedUser);
  }

  const handleLocation = (location) => {
    setLocation(location)
  }

  const handleSaveTask = (task) => {
    console.log("App::handleSaveTask:task: " + JSON.stringify(task));
    // task_id == -1 : save new task. 
    if ( task.id === -1) {
      console.log("App::handleSaveTask:task:last task " + JSON.stringify(tasks[tasks.length-1]));
      
      const lastTaskID = tasks[tasks.length-1].id;
      task.id = lastTaskID+1;
      console.log("App::handleSaveTask:task:saving new task id" + lastTaskID);

    }
    else {
      console.log("App::handleSaveTask:task:saving old task id" + task.id);
      const tmpTaskList = [...tasks];
      const foundTask = tmpTaskList.map( (id) => (
        task.id === id
      ))
      console.log("App::handleSaveTask:task:foundTask: " + JSON.stringify(foundTask));
      
    }

    // save to tasklist
    setTasks(prevTaskArray=>[...prevTaskArray,task])

    console.log("App::handleSaveTask:task:taskList is now" + JSON.stringify(tasks) );

    // save to database
  }


  const handleProjectData = (projectID) => {

    console.log("----------------------------------------------------")
    console.log("App::handleProjectData:assigning projectID " + projectID)
    console.log("----------------------------------------------------")
    console.log("App::handleProjectData:projects: " + JSON.stringify(projects))

    if (projectID > -1) {
      console.log("App::handleProjectData::project:: " + JSON.stringify(projects[projectID]))
      console.log("App::handleProjectData::tasks:: " + JSON.stringify(projects[projectID].tasks))

      console.log("App::handleProjectData:current activeProject:: " + JSON.stringify(projects[projectID]))
      console.log("App::handleProjectData:current tasks: " + JSON.stringify(tasks))
      console.log("App::handleProjectData:current parts: " + JSON.stringify(parts))


      const activeProject = filterProjectData(projectID, mockData.tmpParts, mockData.tmpProjects, mockData.tmpTasks)

      console.log("App::handleProjectData:activeProject:: " + JSON.stringify(activeProject))
      console.log("App::handleProjectData:tasks: " + JSON.stringify(activeProject.tasks))
      console.log("App::handleProjectData:parts: " + JSON.stringify(activeProject.parts))

      setActiveProject(projects[projectID])
      setTasks(activeProject.tasks)
    }
    else {
      setActiveProject({
        id: -1,
        name: "DefaultProjects"
      })
      setTasks(mockData.tmpTasks)
      setParts(mockData.tmpParts)
      setAllParts(mockData.tmpParts)
    }

    setProjectID(projectID)

  }

  return (
    <div className="App">
      <h1>App Rebuild in Progress...</h1>
      <Router>
        <MainAppBar authedUser={authedUser} setAuthedUser={handleSetAuthedUser} activeProject={activeProject} location={location}/>
        <Routes>

          <Route path="/login" element={
            <Login authedUser={authedUser} setAuthedUser={handleSetAuthedUser} />
          } />

          <Route
            path="/"
            element={
              <PrivateRoute authedUser={authedUser}>
                <MainPage authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} activeProject={activeProject} handleProjectData={handleProjectData} handleLocation={handleLocation}/>
              </PrivateRoute>
            }
          />

          <Route
            path="/project/:id"
            element={
              <PrivateRoute authedUser={authedUser}>
                <ProjectDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} projectID={projectID} activeProject={activeProject} handleLocation={handleLocation}/>
              </PrivateRoute>
            }
          />
          <Route
            path="/addtask"
            element={
              <PrivateRoute authedUser={authedUser}>
                <AddTask authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} projectID={projectID} activeProject={activeProject} handleLocation={handleLocation} saveTask={handleSaveTask}/>
              </PrivateRoute>
            }
          />
          <Route
            path="/partstore"
            element={
              <PrivateRoute authedUser={authedUser}>
                <PartStore authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} projectID={projectID} activeProject={activeProject} handleLocation={handleLocation}/>
              </PrivateRoute>
            }
          />

          <Route
            path="/part/:id"
            element={
              <PrivateRoute authedUser={authedUser}>
                <PartDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} projectID={projectID} activeProject={activeProject} handleLocation={handleLocation}/>
              </PrivateRoute>
            }
          />

          <Route
            path="/task/:id"
            element={
              <PrivateRoute authedUser={authedUser}>
                <TaskDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} projectID={projectID} activeProject={activeProject} handleLocation={handleLocation}/>
              </PrivateRoute>
            }
          />

          <Route
            path="/"
            element={
              <Route path="/">
                <InvalidPage />
              </Route>
            }
          />

        </Routes>
      </Router>
    </div>
  )
}


export default App
