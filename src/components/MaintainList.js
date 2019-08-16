import  React, {Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import MaintainCard from './MaintainCard';
import {doMaintainList} from './MaintainData';


class MaintainList extends Component {
    state = {
        maintains: [],
        searchFor: '',
        loginStatus: 'Please Login'
    }

    componentDidMount() {
        doMaintainList()
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
                                { this.state.maintains.map(currentMaintain => (
                                    <Grid item key={currentMaintain.id} xs={12} sm={6} lg={4} xl={3}>
                                        <MaintainCard maintain={currentMaintain} />
                                    </Grid>
                                ))}
                            </Grid>
                            </div>
                        )
                        :
                        this.state.loginStatus
                    }


                </div>
            )
        }

}

export default MaintainList;
