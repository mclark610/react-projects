import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails} from '@material-ui/core';
import {List, ListItem,ListItemText, ListItemSecondaryAction,Checkbox} from '@material-ui/core';

const styles = {
  flex: {
    flex: 1,
  },
};

class TaskPanel extends React.Component {
    state = {
        open: false,
        task: [],
        expanded: 'panel-tasks',
        checked: [0]
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
            <List className={classes.root}>
                {[0, 1, 2, 3].map(value => (
                  <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                    <Checkbox
                      checked={this.state.checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                    />
                <ListItemText primary={`Task # ${value + 1}`} />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Comments">
                        <CommentIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
            </List>
            </ExpansionPanelDetails>
            </ExpansionPanel>
        )} /*{ render }*/
    }

    TaskPanel.propTypes = {
      classes: PropTypes.object.isRequired,
    };


export default withStyles(styles)(TaskPanel);
