import React from 'react';
import PartList from './PartList';

import Button from '@mui/material/Button';

//This is a part list that can be added to the current project from the project screen.
// drag drop? or add button to start..
/**
 * @description PartList allows one to select parts to add to project.  
 *              Parts part of project are colored green.
 * @param {*} props 
 * @returns Part List page
 * 
 */
const PartStore = (props) => {
  console.log("PartStore::props: " + JSON.stringify(props));
  return (
    <div>
      This is part store.
      <div>Project parts will be associated with.</div>
      <ul>
        <li className={"active-project"}>Current Project</li>
        <li className={"add-part"}>Add New Part</li>
        <li className={"edit-part"}>Add Existing part</li>
        <li className={"delete-part"}>Remove Part</li>
        <li className={"part-select-mode"}>select parts to add to project</li>
      </ul>
      <h2>Part Store</h2>
      <div className="part-list">
        <PartList parts={props.parts} activeProject={props.activeProject}/>
      </div>
      <div>
      <Button variant="outlined" size="small">
          Add Part
        </Button>
        <Button variant="outlined" size="small">
          Remove Part          
        </Button>

      </div>
    </div>
  )
}

export default PartStore;


