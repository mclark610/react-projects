import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import {List, ListItem,ListItemText, ListItemSecondaryAction,Checkbox} from '@material-ui/core';
import { Accordion,AccordionSummary, AccordionDetails  } from '@material-ui/core';


const styles = {
  flex: {
    flex: 1,
  },
};

class PartPanel extends React.Component {
    state = {
        open: false,
        part: [],
        expanded: 'panel-parts',
        checked: [0]
    }

    handleChange = name => (event,expanded) => {
        this.setState({ [name]: event.target.value });
        this.setState({expanded: expanded ? 'panel-parts' : false});
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
            <Accordion
            square
            expanded={expanded === 'panel-parts'}
            onChange={this.handleChange('panel-parts')}
            >
            <AccordionSummary>
            <Typography>Part List</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <List className={classes.root}>
                {[0, 1, 2, 3].map(value => (
                  <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                    <Checkbox
                      checked={this.state.checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                    />
                    <ListItemText primary={`Part item ${value + 1}`} />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Comments">
                        <CommentIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
            </List>
            </AccordionDetails>
            </Accordion>
        )} /*{ render }*/
    }

    PartPanel.propTypes = {
      classes: PropTypes.object.isRequired,
    };
export default withStyles(styles)(PartPanel);
