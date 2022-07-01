import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

import { PropTypes } from 'prop-types';
import PartListItem from './PartListItem';

import { List, Box, Grid, ListItem, Typography } from '@material-ui/core';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

const styles = () => ({
  searchPartListPanel: {
    margin: '0',
    display: 'inline-flex',
    padding: '0',
    position: 'relative',
    minWidth: '0',
    flexDirection: 'column',
    verticalAlign: 'top',
    width: "90%",
    alignItems: "center",
    paddingTop: "2px",
    paddingBottom: "2px",
  },
  debugBox: {
    border: "2px solid blue",
    width: "80%",
  },
  gridBorder: {
    border: "1px solid ",
    borderColor: "black",
  },
  taskPartList: {
    margin: '0',
    display: 'inline-flex',
    padding: '0',
    position: 'relative',
    minWidth: '0',
    flexDirection: 'column',
    verticalAlign: 'top',
    width: "70%",
    alignItems: "center"
  },
  partListPanelActions: {
    border: '1px solid black',
    margin: '0',
    flex: '1',
    display: 'inline-flex',
    paddingRight: '10%',
    position: 'relative',
    minWidth: '0',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  partInTask: {
    color: "green"
  }
});

/**
 * @component PartList
 * @description Display parts list and search text for partlist
 * @param {array} partList - list of parts to display
 * @param {number} currentProject - project these parts are associated with
 */


const PartListPanel = (props) => {
  const [searchFor, SetSearchFor] = useState('')
  const navigate = useNavigate();

  const onSearchInputChange = (e) => {
    SetSearchFor(e.target.value);
  }

  const handleAddPart = (e) => {

    console.log("PartListPanel::handleAddPart")
    console.log("PartListPanel::handleAddPart:props: " + JSON.stringify(props))

    e.preventDefault();

    navigate('/partstore', props.currentProject);
  }
  
  const isPartInTaskList = (id) => {
    const { task,parts } = props;
    
    let found = false;
    if (parts) {
      found = parts.find( (element) => id === element.id);

      console.log("PartListPanel::isPartInTaskList::partInArray: " + JSON.stringify(found));
      console.log("PartListPanel::isPartInTaskList::part id      : " + JSON.stringify(id));
      console.log("PartListPanel::isPartInTaskList::parts      : " + JSON.stringify(parts));
    }
    
    return (!found ? false: true);
  }

  const { classes, parts } = props;
  return (

    <Grid container>

      <Grid item xs={12} className={classes.gridBorder + " " + classes.searchPartListPanel}>
        <Box className={classes.searchPartListPanel}>
          <TextField
            id="searchPartListPanel"
            placeholder="Part"
            onChange={onSearchInputChange}
          />
        </Box>
      </Grid>

      <Grid item
        className={
          classes.gridBorder + " " +
          classes.taskPartList
        }

        xs={8}>
        {console.log("PartListPanel::render::return")}
        {props.parts.map((currentPart, index) => {
          console.log("PartListPanel::render::currentPart: " + JSON.stringify(currentPart));
          console.log("PartListPanel::render::index will be: " + index);
        })}

        <Box className={classes.debugBox}>
          {parts && parts.length ? (
            <List>
              {props.parts.map((currentPart, index) => (
                <PartListItem 
                  key={index}                 
                  index={index}
                  currentPart={currentPart}
                  activeProject={props.activeProject}
                  textColor={isPartInTaskList(currentPart.id) === true ? "green" : "blue"}
                />
              ))}
            </List>
          ) : (
            <List>
              <ListItem>
                <Typography>
                  No Part in list
                </Typography>
              </ListItem>
            </List>
          )}

        </Box>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item className={
        classes.gridBorder + " " +
        classes.partListPanelActions
      }
        xs={8}
      >
        <Box>
          <Fab color="primary" aria-label="add">
            <AddIcon onClick={handleAddPart} />
          </Fab>
          <Fab disabled aria-label="delete">
            <DeleteIcon />
          </Fab>
        </Box>
      </Grid>
    </Grid>
  )
}


PartListPanel.propTypes = {
  parts: PropTypes.array,
  currentProject: PropTypes.object,
}

export default withStyles(styles)(PartListPanel);

