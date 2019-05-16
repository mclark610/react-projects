import  React, {Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import MaintainCard from './MaintainCard';
import doLogin from './MaintainData';

import axios from 'axios'

class MaintainList extends Component {
    state = {
        maintains: [],
        searchFor: '',
    }
    componentDidMount() {
//        this.getMaintains();
        doLogin();
    }

    getMaintains() {
        console.log("IN GET MAINTAINS")
/*
        axios.post("http://localhost:5000/user/login", {
                username: 'mclark',
                password: 'password'
            },
            {
                    rejectUnauthorized: false,
                    withCredentials: true,
                    crossdomain: true
                })
                .then( (response) => {
                    console.log("response: " + JSON.stringify(response));
                    console.log("id: " + response.session_id);
                    console.log("cookie: " + document.cookie);
                    return(response)
                })
        axios.post("https://casualcoder.net:5000/user/login", {
            username: 'mclark',
            password: 'password'
        },
        {
            rejectUnauthorized: false,
            withCredentials: false,
            crossdomain: false
        })
        .then( (response) => {
            console.log("response: " + JSON.stringify(response));
            console.log("id: " + response.session_id);
            console.log("cookie: " + document.cookie);
            return(response)
        })

        .then( (response2) => {


           axios.get("https://casualcoder.net:5000/maintain", {withCredentials: true,
                                                                crossdomain: true,
                                                                rejectUnauthorized: false,

               })
*/
    axios.get("http://localhost:5000/maintain", {    withCredentials: true,
                                                     crossdomain: true,
                                                     rejectUnauthorized: false,

        })

                .then( (response) => {
                    console.log("get maintain response: " + JSON.stringify(response));
                    console.log("response header: " + JSON.stringify(response.headers));
                    this.setState({maintains: response.data});

                    // User logged in?
                    if (this.state.maintains.status) {
                        console.log("user status is : " + this.state.maintains.status);
                        throw( new Error("User not logged in"));
                    }

                    console.log("MAINTAINS--- " + JSON.stringify(this.state.maintains));
                })
        .catch( (err) => {
            console.log("error!: " + JSON.stringify(err));
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
                        "nothing to maintain"
                    }


                </div>
            )
        }

}

export default MaintainList;
