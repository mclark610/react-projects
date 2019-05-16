const axios = require('axios');

const doLogin = (username, password) => {
    const url="http://localhost:5000/user/login";
    const localhostOptions = {
        rejectUnauthorized: false,
        withCredentials: true,
        crossdomain: true
    };

    const remoteOptions = {
        rejectUnauthorized: false,
        withCredentials: false,
        crossdomain: false
    };


    return axios.post("http://localhost:5000/user/login", {
                username: username,
                password: password
            },
            localhostOptions
    )
};

const doMaintainList = () => {
        return axios.get("http://localhost:5000/maintain", {    withCredentials: true,
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

export
    default {doLogin, doMaintainList};
