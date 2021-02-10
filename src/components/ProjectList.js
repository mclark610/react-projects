import  React, {Component } from 'react'
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ProjectCard from './ProjectCard';
import {doProjectList} from './ProjectData';
import {Container} from '@material-ui/core';
import {Paper} from '@material-ui/core';

const styles = theme => ({
    container: {
        height: "80%",
        width: "80%",
        margin: "1rem",
        textAlign: 'center',
        display: 'inline-block',
        
    }
});

class ProjectList extends Component {

    state = {
        maintains: [],
        searchFor: '',
        loginStatus: 'Please Login'
    }

    componentDidMount() {
        doProjectList()
            .then( (response) => {
                console.log("get maintain response react: " + JSON.stringify(response));
                console.log("data is : " + JSON.stringify(response.data));
                this.setState({maintains: response.data});
                console.log("MAINTAINS--- " + JSON.stringify(this.state.maintains));

                // User logged in?
                if (this.state.maintains.status) {
                    console.log("user status is : " + this.state.maintains.status);
                    //throw( new Error("User not logged in"));
                }
                else {
                    this.setState({loginStatus: "Please Login"});
                }

            })
    }

    render() {
        const {classes} = this.props;
            return (
                <div>
                    {
                        this.state.maintains.length ?
                        (
                            <div>
                            <TextField style={{padding: 24}}
                                id="searchInput"
                                placeholder="Maintenance"
                                margin="normal"
                                onChange={this.onSearchInputChange}
                                />
                            <Grid container spacing={24} style={{padding: 24}}>
                                { this.state.maintains.map(currentProject => (
                                    <Grid item key={currentProject.id} xs={12} sm={6} lg={4} xl={3}>
                                        <ProjectCard maintain={currentProject} />
                                    </Grid>
                                ))}
                            </Grid>
                            </div>
                        )
                        :
                        <Container maxWidth="lg">
                            <Paper elevation={1} className={classes.container}>
                                {this.state.loginStatus}<br/>

                            </Paper>

                        </Container>
                    }


                </div>
            )
        }

}

export default withStyles(styles)(ProjectList);
