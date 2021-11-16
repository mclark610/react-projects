
export const filterProjectData = (projectID,partList,projectList,taskList) => {

  let projectData = {
      currentProject: -1,
      tasks: [],
      parts: []
  }

  // validate projectID:
  if (!Number.isInteger(projectID)) { return null }

  projectData.currentProject = projectList[projectID];

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++")
  const pSet = new Set();

  // 2. parts in partlist could be duplicates need to filter
  if (projectID>-1) {
          if (projectData.currentProject.tasks) {
              // parse current project
              // 1. build task List
              // - get task IDs
              // - place tasks in projectData.tasks.

              projectData.currentProject.tasks.map(taskID => {
                  console.log("taskID: "+taskID)
                  projectData.tasks.push(taskList[taskID]);
                  // part id list:
                  //pSet.add(projectData.tasks[taskID].parts);
                  taskList[taskID].parts.map(t=>pSet.add(t))
              })
          }

      const arr = [...pSet]
      console.log("Set: " +arr )
      for (let item of pSet) {
          console.log(item)
          projectData.parts.push(...partList.filter(part => part.id===item))
      }

      console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++")
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
      console.log("partList: " + JSON.stringify(partList))
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")

  }
  else {
      console.log("projectID is -1");
      projectData.projectTasks = taskList;
      projectData.projectParts = partList;
  }

  return projectData;
}