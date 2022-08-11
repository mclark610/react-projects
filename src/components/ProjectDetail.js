import React from 'react';
import PropTypes from 'prop-types';

import ProjectPanel from './ProjectPanel';
import PartPanel from './PartPanel';
import NotePanel from './NotePanel';
import TaskPanel from './TaskPanel';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },

});

class ProjectDetail extends React.Component {
  state = {
    open: false,
    expanded: 'panel-project',
    checked: [0]
  };

  componentDidMount() {
    console.log("ProjectDetail:tasks: " + this.props.tasks)
    console.log("ProjectDetail:Project: " + this.props.match)
  }

  handleClickOpen = () => {
    console.log("handleClickOpen ID: " + this.props.maintainID)
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
  };

  handleChange = name => (event, expanded) => {
    this.setState({ [name]: event.target.value });
    this.setState({ expanded: expanded ? 'panel-project' : false });
  };

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <ProjectPanel project={{ id: 0, name: "TestProject", description: "Test Project Description" }} tasks={tasks} />
        <TaskPanel tasks={tasks} />
        <NotePanel />
        <PartPanel />
      </div>
    );
  }
}

ProjectDetail.propTypes = {
};

export default ProjectDetail;
