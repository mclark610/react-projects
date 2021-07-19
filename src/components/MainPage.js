import  React, {Component } from 'react'
import ProjectList from './ProjectList'


class MainPage extends Component {
    render() {
        let loginMessage;
        let projectList;

        if ( this.props.name !== 'Login')  {
            loginMessage = <h4>User not logged in</h4>;
        }
        else {
            loginMessage = <h4>User Logged in</h4>;
            projectList = <ProjectList/>;
        }

        return (
            <div>
                <h2>MainPage</h2>
                {loginMessage}
                {projectList}
            </div>
        )
    }
}

export default MainPage;
