import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CommentIcon from '@mui/icons-material/Comment';
import {List, ListItem,ListItemText, ListItemSecondaryAction,Checkbox} from '@mui/material';
import { Accordion,AccordionSummary, AccordionDetails  } from '@mui/material';


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
        const { styles } = this.props;
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
            <List className={styles.root}>
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

export default PartPanel;
