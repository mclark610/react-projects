import React from 'react';
import {useState} from 'react';

import PartListPanel from './PartListPanel';

import Button from '@mui/material/Button';

//This is a part list that can be added to the current project from the project screen.
// drag drop? or add button to start..
/**
 * @description PartList allows one to select parts to add to project.  
 *              Parts in part list of store are colored green.
 *              
 * @param {*} props 
 * @returns Part List page
 * 
 */

const PartStore = (props) => {
  console.log("PartStore::props: " + JSON.stringify(props));
  props.handleLocation("Parts Store");

  const [taskPartList, setTaskPartList] = useState(props.parts)

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
        <PartListPanel parts={taskPartList} allParts={props.allParts} activeProject={props.activeProject}/>
      </div>
      <div>
      <Button variant="outlined" size="small" onClick={()=>{console.log("PartStore Button hit")}}>
          Save
        </Button>
        <Button variant="outlined" size="small">
          Clear
        </Button>

      </div>
    </div>
  )
}

export default PartStore;


