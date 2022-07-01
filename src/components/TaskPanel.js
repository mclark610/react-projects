import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

import { List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import TaskDialog from './TaskDialog'

class TaskPanel extends React.Component {
  state = {
    open: false,
    tasks: [],
    expanded: 'panel-tasks',
    checked: [0],
    bottomNav: 0,
    selectedValue:-1

  }

  // Accordion: expand or contract
  handleChange = name => (event, expanded) => {
    this.setState({ [name]: event.target.value });
    this.setState({ expanded: expanded ? 'panel-tasks' : false });
  };

  handleEditClick = value => (e) => {
    console.log("TaskPanel:handleEditClick:value: " + value)
    console.log("TaskPanel:handleEditClick:target.value: " + e.target.value)
    console.log("TaskPanel:handleEditClick:target.name: " + e.target.name)
  
    console.log("TaskPanel:handleEditClick:task: " + JSON.stringify(this.props.tasks[value]))
    
    // Go to TaskDetail
    
    this.props.history.push({
      pathname: `/task/${value}`,
      currentTask: this.props.tasks[value]
    })
  
  }

  handleDeleteClick = name => (e) => {
    console.log("TaskPanel:name: " + name);
    console.log("TaskPanel:value: " + e.target.value)
    console.log("TaskPanel:name: " + e.target.name)
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };


  render() {
    const { classes, tasks } = this.props;
    const { expanded } = this.state;

    console.log("TaskPanel::tasks: " + JSON.stringify(this.props.tasks));

    return (
      <Accordion
        square
        expanded={expanded === 'panel-tasks'}
        onChange={this.handleChange('panel-tasks')}
      >
        <AccordionSummary>
          <Typography>Tasks</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "red" }}>
          <Paper className={styles.paper} style={{ width: "50%", maxHeight: "25rem", maxWidth: "80%", overflow: 'auto', backgroundColor: 'lightblue'}}>
            <List className={classes.root} >
              {tasks.map(value => (
                <ListItem key={value.id} role={undefined} dense button onClick={this.handleToggle(value.id)}>
                  <Checkbox
                    checked={this.state.checked.indexOf(value.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                   />

                  <ListItemText primary={`${value.name}`} />
                  <ListItemSecondaryAction>
                    <Fab enabled="true" size="small" variant="circular" aria-label="Edit" className={classes.fab} onClick={this.handleEditClick(value.id)}>
                      <EditIcon/>
                    </Fab>
                    <Fab enabled="true" size="small" variant="circular" aria-label="Delete" className={classes.fab} onClick={this.handleDeleteClick(value.id)}>
                      <DeleteIcon />
                    </Fab>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
          <Fab color="primary" size="small" variant="circular" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
            <AddIcon />
          </Fab>

          <TaskDialog
            selectedValue={this.state.selectedValue}
            taskID={this.state.taskID}
            open={this.state.open}
            onClose={this.handleClose}
          />

        </AccordionDetails>
      </Accordion>
    )
  } /*{ render }*/
}

TaskPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};


const styles = theme => ({
  flex: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  fab: {
    margin: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(3),
  },

});


export default withStyles(styles)(TaskPanel);
