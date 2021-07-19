import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import Grid from '@material-ui/core/Grid';
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails} from '@material-ui/core';
import {List, ListItem,ListItemText, ListItemSecondaryAction,Checkbox} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import TaskDialog from './TaskDialog';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
},

});

class TaskPanel extends React.Component {
    state = {
        open: false,
        tasks: [],
        expanded: 'panel-tasks',
        checked: [0],
        bottomNav: 0
    }
    componentDidMount() {
        this.setState({
            tasks: this.props.tasks
        })
    }
    handleChange = name => (event,expanded) => {
        this.setState({ [name]: event.target.value });
        this.setState({expanded: expanded ? 'panel-tasks' : false});
    };

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
        const { classes } = this.props;
        const { expanded } = this.state;

        console.log("tasks: " + JSON.stringify(this.state.tasks));

        return (
            <ExpansionPanel
            square
            expanded={expanded === 'panel-tasks'}
            onChange={this.handleChange('panel-tasks')}
            >
            <ExpansionPanelSummary>
            <Typography>Tasks</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container >
                    <Grid item xs={8}>
                        <Paper className={styles.paper}>
                        <List className={classes.root}>
                            {this.state.tasks.map(value => (
                              <ListItem key={value.id} role={undefined} dense button onClick={this.handleToggle(value)}>
                                <Checkbox
                                  checked={this.state.checked.indexOf(value) !== -1}
                                  tabIndex={-1}
                                  disableRipple
                                />
                            <ListItemText primary={`${value.name}`} />
                                <ListItemSecondaryAction>
                                  <IconButton aria-label="Comments">
                                    <CommentIcon />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItem>
                            ))}
                        </List>
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <TaskDialog
                          selectedValue={this.state.selectedValue}
                          taskID={1}
                          open={this.state.open}
                          onClose={this.handleClose}
                        />
                        <br/>
                        <Fab enabled="true" size="small" variant="round" aria-label="Delete" className={classes.fab}>
                          <DeleteIcon />
                        </Fab>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
            </ExpansionPanel>
        )} /*{ render }*/
    }

    TaskPanel.propTypes = {
      classes: PropTypes.object.isRequired,
    };


export default withStyles(styles)(TaskPanel);
