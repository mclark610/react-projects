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

export
    default doLogin;
