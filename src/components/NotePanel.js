import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

import Typography from '@mui/material/Typography';
import {List, ListItem,ListItemText, ListItemSecondaryAction,Checkbox} from '@mui/material';
import { Accordion,AccordionSummary, AccordionDetails  } from '@mui/material';

const styles = {
  flex: {
    flex: 1,
  },
};

class NotePanel extends React.Component {
    state = {
        open: false,
        note: [],
        expanded: 'panel-notes',
        checked: [0]
    }

    handleChange = name => (event,expanded) => {
        this.setState({ [name]: event.target.value });
        this.setState({expanded: expanded ? 'panel-notes' : false});
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
            expanded={expanded === 'panel-notes'}
            onChange={this.handleChange('panel-notes')}
            >
            <AccordionSummary>
            <Typography>Notes</Typography>
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
                <ListItemText primary={`Note # ${value + 1}`} />
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

    NotePanel.propTypes = {
    };

export default NotePanel;
