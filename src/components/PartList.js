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
  searchPartList: {
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
  partListActions: {
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


const PartList = (props) => {
  const [searchFor, SetSearchFor] = useState('')
  const navigate = useNavigate();

  const onSearchInputChange = (e) => {
    SetSearchFor(e.target.value);
  }

  const handleAddPart = (e) => {

    console.log("PartList::handleAddPart")
    console.log("PartList::handleAddPart:props: " + JSON.stringify(props))

    e.preventDefault();

    navigate('/partstore', props.currentProject);
  }
  
  const isPartInTaskList = (id) => {
    const { task,parts } = props;
    
    let found = false;
    if (parts) {
      found = parts.find( (element) => id === element.id);

      console.log("PartList::isPartInTaskList::partInArray: " + JSON.stringify(found));
      console.log("PartList::isPartInTaskList::part id      : " + JSON.stringify(id));
      console.log("PartList::isPartInTaskList::parts      : " + JSON.stringify(parts));
    }
    
    return (!found ? false: true);
  }

  const { classes, parts } = props;
  return (

    <Grid container>

      <Grid item xs={12} className={classes.gridBorder + " " + classes.searchPartList}>
        <Box className={classes.searchPartList}>
          <TextField
            id="searchPartList"
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
        {console.log("PartList::render::return")}
        {console.log("PartList::parts: " + JSON.stringify(parts))}
        {
          
          parts.map((currentPart,index) => {
            console.log("PartList::render:index::" + index)
          })
        }
        <Box className={classes.debugBox}>
          {parts && parts.length ? (
            <List>
              {props.parts.map((currentPart, index) => (
                <PartListItem 
                  key={index}
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
        classes.partListActions
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

/*
class PartListOrg extends Component {

  state = {
    searchFor: ''
  }

  handleAddPart = () => {
    console.log("PartList::handleAddPart")
    console.log("PartList::handleAddPart:props: " + JSON.stringify(this.props))
    // Go to Part Store and add a part to the project
    this.props.history.push({
      pathname: `/partstore`,
      currentProject: this.props.currentProject
    })

  }
  isPartInTaskList = (part) => {
    const { parts } = this.props;

    let found = false;
    if (parts) {
      found = parts.find(element => element.id === part.id);

      console.log("PartList::isPartInTask::partInArray: " + JSON.stringify(found));
      console.log("PartList::isPartInTask::part       : " + JSON.stringify(part));
      console.log("PartList::isPartInTask::parts      : " + JSON.stringify(parts));
    }

    return (found);
  }

  render() {
    const { classes, parts } = this.props;

    return (
      <Grid container>

        <Grid item xs={12} className={classes.gridBorder + " " + classes.searchPartList}>
          <Box className={classes.searchPartList}>
            <TextField
              id="searchPartList"
              placeholder="Part"
              onChange={this.onSearchInputChange}
            />
          </Box>
        </Grid>

        <Grid item
          className={
            classes.gridBorder + " " +
            classes.taskPartList
          }

          xs={8}>
          {console.log("PartList::render::return")}
          <Box className={classes.debugBox}>
            {parts && parts.length ? (
              <List>
                {this.props.parts.map((currentPart, index) => (
                  <PartListItem key={index}
                    currentPart={currentPart}
                    activeProject={this.props.activeProject}
                    textColor={this.isPartInTaskList(currentPart) === undefined ? "green" : "blue"}
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
          classes.partListActions
        }
          xs={8}
        >
          <Box>
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={this.handleAddPart} />
            </Fab>
            <Fab disabled aria-label="delete">
              <DeleteIcon />
            </Fab>
          </Box>
        </Grid>
      </Grid>
    )
  }
}
*/

PartList.propTypes = {
  parts: PropTypes.array,
  currentProject: PropTypes.object,
}

export default withStyles(styles)(PartList);

