
import { PropTypes } from 'prop-types';

/**
 * @function filterProjectData
 * @description filters parts projects tasks data based on project id..
 * @param {number} projectID 
 * @param {array} partList 
 * @param {array} projectList 
 * @param {array} taskList 
 * @returns partList taskList that is associated with the projectID
 */
const filterProjectData = (projectID,partList,projectList,taskList) => {

  let projectData = {
      currentProject: -1,
      tasks: [],
      parts: []
  }
  // validate projectID:
  if (!Number.isInteger(projectID)) { 
      return null;
  }

  projectData.currentProject = projectList[projectID];

  console.log("--------------------------------------------")
  const pSet = new Set();

  // 2. parts in partlist could be duplicates need to filter
  if (projectID>-1) {
          if (projectData.currentProject.tasks) {
              // parse current project
              // 1. build task List
              // - get task IDs
              // - place tasks in projectData.tasks.
              projectData.currentProject.tasks.map(taskID => {
                  console.log("FilterProjectData::taskID: "+taskID)
                  projectData.tasks.push(taskList[taskID]);
                  // part id list:
                  //pSet.add(projectData.tasks[taskID].parts);
                  taskList[taskID].parts.map(t=>pSet.add(t))
                  return(taskList);
              })
          }

      for (let item of pSet) {
          projectData.parts.push(...partList.filter(part => part.id===item))
      }

      console.log("FilterProjectData::partList: " + JSON.stringify(partList))
      console.log("FilterProjectData::projectData : " + JSON.stringify(projectData));

  }
  else {
      console.log("FilterProjectData::projectID is -1");
      projectData.projectTasks = taskList;
      projectData.projectParts = partList;
  }
  console.log("--------------------------------------------")

  return projectData;
}

filterProjectData.propTypes = {
    projectTasks: PropTypes.array.isRequired,
    projectParts: PropTypes.array.isRequired,
    activeProject: PropTypes.number.isRequired
  }

export default filterProjectData;