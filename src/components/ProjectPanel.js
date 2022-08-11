import React from 'react';

import Typography from '@mui/material/Typography';
import {TextField} from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';

import { Accordion,AccordionSummary, AccordionDetails  } from '@mui/material';

const styles = theme => ({
  container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: "green",
        color:"red"
  },
  flex: {
    flex: 1,
  },
  grid: {
      textAlign: 'left',
      border: '2px solid black',
      borderStyle: 'solid',
      borderColor: 'red',
      borderTopWidth: 1,
      borderRadius: 3
  },
  textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: 19,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

});

class ProjectPanel extends React.Component {
    state = {
        open: false,
        expanded: 'panel-project',
        checked: [false]
    }

    handleChange = name => (event,expanded) => {

        console.log("event.target.value: " + event.target.value);
        console.log("expanded: " + expanded);
        console.log("typeof expanded: " + typeof expanded);
        this.setState({ [name]: event.target.value });

        if (typeof expanded !== 'undefined') {
            this.setState({expanded: expanded ? 'panel-project' : false});
        }
    };

    handleToggle = value => (event) => {
        this.setState({[value]: event.target.value});
        console.log("value: " + value);
        console.log("state: " + this.state.value)
    }

    render() {
        const { expanded } = this.state;
        console.log(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" );
        console.log("this.props: " + JSON.stringify(this.props));
        console.log("this.state: " + JSON.stringify(this.state.project));
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

        return(
                <Accordion
                square
                expanded={expanded === 'panel-project'}
                onChange={this.handleChange('panel-project')}
                >
                    <AccordionSummary>
                        <Typography>Project</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <form  noValidate autoComplete="off">
                        <Grid container  spacing={8}>
                            <Grid item xs={8}>
                                  <TextField
                                    id="project-name"
                                    label="Project"
                                    onChange={this.handleChange('project-name')}
                                    margin="normal"
                                    fullWidth
                                    value={this.props.project.name?this.props.project.name:''}
                                    inputProps={{
                                        error: "true",
                                    }}
                                  />
                            </Grid>
                            <Grid item xs={2} >
                                <TextField
                                    id="project-part-nbr"
                                    label="Part #"
                                    value={this.props.project.part_nbr?this.state.project.part_nbr:'xs4'}
                                    onChange={this.handleChange('part_nbr')}
                                    fullWidth
                                    margin="normal"
                                    />
                            </Grid>
                            <Grid item xs={2}>
                                    <Switch
                                        id="project-active"
                                        label="Active"
                                        onChange={this.handleToggle('project-active')}
                                        color="default"
                                        margin="normal"
                                        />
                            </Grid>

                            <Grid item xs={10}>
                                <Paper className={styles.paper}>
                                <TextField
                                    id="project-description"
                                    label="Description"
                                    multiline
                                    fullWidth
                                    inputProps= {{
                                          defaultValue: this.props.project.description,
                                          error: "false",
                                          minRows:4

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
                    </AccordionDetails>
                </Accordion>
        )
    }
}

export default ProjectPanel;
