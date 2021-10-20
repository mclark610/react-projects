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

const tmpUsers = [
  {
    id: 0,
    name: "admin",
    password: "test",
  }
]
const tmpTodos = [
  {
    id: 0,
    taskId: 0
  },
  {
    id: 1,
    taskId: 1
  },
  {
    id: 2,
    taskId: 2
  }
]
const tmpTasks = [
  {
    id: 0,
    name: "Change Oil",
    parts: [0, 2]
  },
  {
    id: 1,
    name: "Change Air filter",
    description: "Change air filter",
    parts: [15]
  },
  {
    id: 2,
    name: "Wash",
    description: "make it shine"
  },
  {
    id: 3,
    name: "clean brake calipers",
    description: "change out calipers"
  },
  {
    id: 4,
    name: "vacuum out the interor",
    description: "get the dirt out",
  }
]
const tmpParts = [
  {
    id: 0,
    name: "Oil: Mobil 1 5-20w",
    description: "pretty good oil",
  },
  {
    id: 1,
    name: "Oil: Mobil 1 10-30w",
    description: "none",
  },
  {
    id: 2,
    name: "Oil Filter: Fram PH3600",
    description: "Oil Filter",
  },
  {
    id: 13,
    name: "K&H Oil Filter",
    description: " MC oil filter.",
  },
  {
    id: 15,
    name: "Motorcraft Air filter",
    description: "This is an air filter",
  },


]
const tmpProjects = [
  {
    id: 0,
    name: "Ford Ranger",
    class: "Vehicle",
    description: "Very cool litle truck!",
    tasks: [0],
    todo: [
    ],
  },
  {
    id: 1,
    name: "Elantra",
    class: "Vehicle",
    description: "Very sporty fun car"
  },
  {
    id: 2,
    name: "Tiller",
    description: "Oldish tiller"
  }
]


const App = () => {
  const [authedUser, setAuthedUser] = useState(tmpUsers[0].name)
  const [users, setUser] = useState(tmpUsers)
  const [projects, setProject] = useState(tmpProjects)
  const [tasks, setTask] = useState(tmpTasks)
  const [todos, setTodo] = useState(tmpTodos)
  const [parts, setPart] = useState(tmpParts)

  const handleSetAuthedUser = (authedUser) => {
    setAuthedUser(authedUser)
  }

  const handleSetProject = (project) => {
    setProject(project)
  }
  console.log("App::tasks: " + tasks)

  return (
    <div className="App">
      <Router>
        <MainAppBar authedUser={authedUser} setAuthedUser={handleSetAuthedUser} />
        <Switch>
          <Route path="/login">
            <Login authedUser={authedUser} setAuthedUser={handleSetAuthedUser} />
          </Route>
          <PrivateRoute path="/" exact authedUser={authedUser}>
            <MainPage authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} todos={todos} />
          </PrivateRoute>
          <PrivateRoute path="/project/:id" exact authedUser={authedUser}>
            <ProjectDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} todos={todos} />
          </PrivateRoute>
          <PrivateRoute path="/task/:id" exact authedUser={authedUser}>
            <TaskDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} todos={todos} />
          </PrivateRoute>
          <PrivateRoute path="/part/:id" exact authedUser={authedUser}>
            <PartDetail authedUser={authedUser} parts={parts} projects={projects} tasks={tasks} todos={todos} />
          </PrivateRoute>

          <Route path="/">
            <InvalidPage />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App
