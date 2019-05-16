import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
        display: 'flex',
        flexWrap: 'wrap',
  },
  flex: {
    flex: 1,
  },
  grid: {
      textAlign: 'center'
  },
  textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
  },
});

class MaintainPanel extends React.Component {
    state = {
        open: false,
        maintain: [],
        expanded: 'panel-maintain',
        checked: [0]
    }
    handleChange = name => (event,expanded) => {
        this.setState({ [name]: event.target.value });
        if(typeof expanded != 'undefined') {
            this.setState({expanded: expanded ? 'panel-maintain' : false});
        }
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
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return(
                <ExpansionPanel
                square
                expanded={expanded === 'panel-maintain'}
                onChange={this.handleChange('panel-maintain')}
                >
                    <ExpansionPanelSummary>
                        <Typography>Maintain</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <form className={classes.container} noValidate autoComplete="off">
                        <Grid container className={styles.grid} spacing={24}>
                            <Grid item xs={12}>
                                <TextField
                                    id="maintain-name"
                                    label="Name"
                                    className={classes.TextField}
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                    />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="maintain-description"
                                    label="Description"
                                    className={classes.TextField}
                                    value={this.state.description}
                                    multiline
                                    onChange={this.handleChange('description')}
                                    margin="normal"
                                    />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    id="maintain-part-nbr"
                                    label="Part #"
                                    className={classes.TextField}
                                    value={this.state.part_nbr}
                                    onChange={this.handleChange('part_nbr')}
                                    margin="normal"
                                    />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    id="maintain-status"
                                    label="Status"
                                    className={classes.TextField}
                                    value={this.state.description}
                                    onChange={this.handleChange('status')}
                                    margin="normal"
                                    />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    id="maintain-complete"
                                    label="Complete"
                                    className={classes.TextField}
                                    value={this.state.complete}
                                    onChange={this.handleChange('complete')}
                                    margin="normal"
                                    />
                            </Grid>
                            <Grid item xs={3}>
                                <IconButton
                                    id="maintain-btn-add"
                                    label="Add"
                                    className={classes.TextField}
                                    value={this.state.complete}
                                    onChange={this.handleChange('add-button')}
                                    margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <IconButton
                                        id="maintain-btn-cancel"
                                        label="Cancel"
                                        className={classes.TextField}
                                        value={this.state.complete}
                                        onChange={this.handleChange('cancel-button')}
                                        margin="normal"
                                        />
                            </Grid>
                        </Grid>
                    </form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
        )
    }
}

export default withStyles(styles)(MaintainPanel);
