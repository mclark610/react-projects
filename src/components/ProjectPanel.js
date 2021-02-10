import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';

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

class ProjectPanel extends React.Component {
    state = {
        open: false,
        maintain: [],
        expanded: 'panel-maintain',
        checked: [false]
    }

    componentDidMount() {
        this.setState({
            maintain: this.props.maintain
        })
    }

    handleChange = name => (event,expanded) => {

        console.log("event.target.value: " + event.target.value);
        console.log("expanded: " + expanded);
        console.log("typeof expanded: " + typeof expanded);
        this.setState({ [name]: event.target.value });

        if (typeof expanded != 'undefined') {
            this.setState({expanded: expanded ? 'panel-maintain' : false});
        }
    };

    handleToggle = value => (event) => {
        this.setState({[value]: event.target.value});
        console.log("value: " + value);
        console.log("state: " + this.state.value)
    }

    onComponent
    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        console.log(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" );
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
                        <Typography>Project</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <form  noValidate autoComplete="off">
                        <Grid container  spacing={8}>
                            <Grid item xs={8}>
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>


                            <Grid item xs={8}>
                                  <TextField
                                    id="maintain-name"
                                    label="Project"
                                    onChange={this.handleChange('maintain-name')}
                                    margin="normal"
                                    fullWidth
                                    value={this.state.maintain.name?this.state.maintain.name:''}
                                    inputProps={{
                                        error: "true",

                                    }}
                                  />
                            </Grid>
                            <Grid item xs={2} >
                                <TextField
                                    id="maintain-part-nbr"
                                    label="Part #"
                                    value={this.state.maintain.part_nbr?this.state.maintain.part_nbr:'xs4'}
                                    onChange={this.handleChange('part_nbr')}
                                    fullWidth
                                    margin="normal"
                                    />
                            </Grid>
                            <Grid item xs={2}>
                                    <Switch
                                        id="maintain-active"
                                        label="Active"
                                        onChange={this.handleToggle('maintain-active')}
                                        color="default"
                                        margin="normal"
                                        />
                            </Grid>

                            <Grid item xs={10}>
                                <Paper className={styles.paper}>
                                <TextField
                                    id="maintain-description"
                                    label="Description"
                                    multiline
                                    fullWidth
                                    inputProps= {{
                                          defaultValue: 'Yo boy Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eum deserunt, soluta voluptatem fugiat modi nulla, aut, accusamus neque dolorum molestiae repellat quidem. Error neque nisi doloribus mollitia quidem fuga.',
                                          error: "false",
                                          rows:4

                                    }}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                            </Grid>


                            <Grid item xs={4} >
                            </Grid>

                            <Grid item xs={4} >
                            </Grid>

                            <Grid item xs={2} >
                            </Grid>

                            <Grid item xs={2} >
                            </Grid>
                        </Grid>
                    </form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
        )
    }
}

export default withStyles(styles)(ProjectPanel);
