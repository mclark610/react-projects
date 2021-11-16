import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import { Grid, FormGroup, FormControlLabel, Switch } from '@material-ui/core';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  partName: {
    backgroundColor: "green",
    width:"80%",
    paddingLeft: "20px",
    marginLeft: "20px",
    textAlign:"left",
  },
  partDescription: {
    backgroundColor: "yellow",
    width:"80%",
    paddingLeft: "20px",
    marginLeft: "20px",
    textAlign:"left",
    
  },
  partNotes: {
    backgroundColor: "red",
    width:"80%",
    paddingLeft: "20px",
    marginLeft: "20px",
    textAlign:"left",
  },
  partParts: {
    backgroundColor: "#ffdcf2",
    width:"80%",
    paddingLeft: "20px",
    marginLeft: "20px",
    textAlign:"left",
  },
});

class PartDetail extends React.Component {
  state = {
    open: false,
    expanded: 'panel-project',
    checked: [0]
  };

  componentDidMount() {
    console.log("PartDetail:parts: " + this.props.parts)
    console.log("PartDetail:Project: " + this.props.match)
  }

  handleClickOpen = () => {
    console.log("handleClickOpen ID: " + this.props.partID)
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
    this.setState({ expanded: expanded ? 'panel-part' : false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
      <section>
        <h2>This is where the Part detail lives</h2>
        <Grid container  spacing={2}>
          <Grid  className={classes.partName} item xs={8} >
            <TextField className={classes.partName} variant="outlined" placeholder="Part Name" />
          </Grid>
          <Grid item xs={1}>
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} label="Active" />
            </FormGroup>
          </Grid>
          <Grid item className={classes.partDescription} xs={10} >
            <TextField multiline variant="outlined" maxRows={4} minRows={4} className={classes.partDescription} placeholder="Part Description"></TextField>
          </Grid>
        </Grid>
        </section>
        <section>
        <Grid container  spacing={2}>
          <Grid item xs={8}>
            Notes
          </Grid>
          <Grid item className={classes.partNotes} xs={10}>
            <TextField multiline variant="outlined" minRows={8} className={classes.partNotes} placeholder="Notes"></TextField>
          </Grid>
        </Grid>
        </section>

        <ul>
          <li><strike>Part Name</strike></li>
          <li><strike>Part Description</strike></li>
          <li><strike>Open Closed</strike></li>
          <li><strike>Notes</strike></li>
        </ul>

      </div>
    );
  }
}

PartDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(PartDetail));
