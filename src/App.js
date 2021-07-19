import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import MainAppBar from './components/MainAppBar';

import cookies from 'js-cookie';


class App extends React.Component {

    state = {
        username: cookies.get('37943e50-9319-438f-abcf-9f8f09a1091f'),
        loginName: "Login"
    };

    render() {
        return(
            <div className="App">
                <MainAppBar loginName={this.state.loginName}/>
                <MainPage logName={this.state.loginName}/>
            </div>
        );
    };
}

export default App;
