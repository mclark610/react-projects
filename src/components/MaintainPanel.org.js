import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const inputProps = {
    step: 300,
    defaultValue: "Howdy hoe",
    fullwidth: "true",
    multiline: "true"

};

const styles = theme => ({
  container: {
        display: 'flex',
        flexWrap: 'wrap',
  },
  flex: {
    flex: 1,
  },
  grid: {
      textAlign: 'center',
      border: '2px solid rgba(0, 0, 0, 0.23)',
      borderStyle: 'solid',
      borderColor: 'red',
      borderTopWidth: 1,
      borderRadius: 3
  },
  textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 19,
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

});

class MaintainPanel extends React.Component {
    state = {
        open: false,
        maintain: [],
        expanded: 'panel-maintain',
        checked: [0]
    }
    componentDidMount() {
        this.setState({
            maintain: this.props.maintain
        })
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

    onComponent
    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        console.log(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" );
        console.log("this.props: " + JSON.stringify(this.props));
        console.log("this.state: " + JSON.stringify(this.state.maintain));
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

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
                        <Grid container className={styles.grid} spacing={8}>
                            <Grid item sm={3} className={styles.grid}>
                                <TextField
                                    id="maintain-name"
                                    label="Name"
                                    className={classes.TextField}
                                    value={this.state.maintain.name?this.state.maintain.name:''}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                    >
                                </TextField>
                            </Grid>
                            <Grid item xs={6} className={styles.grid}>
                                <TextField
                                    id="maintain-description"
                                    label="Description"
                                    className={classes.TextField}
                                    value={this.state.maintain.description?this.state.maintain.description:''}
                                    multiline
                                    onChange={this.handleChange('description')}
                                    margin="normal"
                                    />
                            </Grid>
                            <Grid item xs={4} className={styles.grid}>
                                <TextField
                                    id="maintain-part-nbr"
                                    label="Part #"
                                    className={classes.TextField}
                                    value={this.state.maintain.part_nbr?this.state.maintain.part_nbr:''}
                                    onChange={this.handleChange('part_nbr')}
                                    margin="normal"
                                    />
                            </Grid>
                            <Grid item xs={3} className={styles.grid}>
                                <TextField
                                    id="maintain-status"
                                    label="Status"
                                    className={classes.TextField}
                                    value={this.state.maintain.status?this.state.maintain.status:''}
                                    onChange={this.handleChange('status')}
                                    margin="normal"
                                    />
                            </Grid>
                            <Grid item xs={3} className={styles.grid}>
                                <TextField
                                    id="maintain-complete"
                                    label="Complete"
                                    className={classes.TextField}
                                    value={this.state.maintain.complete?this.state.maintain.complete:''}
                                    onChange={this.handleChange('complete')}
                                    margin="normal"
                                    fullWidth
                                    />
                            </Grid>
                            <Grid item xs={3} className={styles.grid}>
                                <IconButton
                                    id="maintain-btn-add"
                                    label="Add"
                                    className={classes.Button}
                                    value="Add"
                                    onChange={this.handleChange('add-button')}
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
