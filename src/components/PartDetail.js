import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Grid, FormGroup, FormControlLabel, Switch } from '@mui/material';

const styles = theme => ({
  partName: {
    width: "80%",
    paddingTop: "20px",
    marginBottom: "4px",
    marginLeft: "20px",
    textAlign: "left",
  },
  partActive: {
    marginTop: "20px",
    paddingTop: "20px",
    marginBottom: "4px",
    textAlign: "left",
  },
  partDescription: {
    width: "80%",
    textAlign:"left",
    marginLeft: "20px",
  },
  partNotes: {
    width:"80%",
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
    const { styles } = this.props;
    return (
      <div>
        <Grid container  spacing={2}>
          <Grid  className={styles.partName} item xs={6} >
            <TextField className={styles.partName} variant="outlined" placeholder="Part Name" />
          </Grid>
          <Grid item xs={2} className={styles.partActive}>
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} label="Active" />
            </FormGroup>
          </Grid>
          <Grid item className={styles.partDescription} xs={10} >
            <TextField multiline variant="outlined" maxRows={4} minRows={4} className={styles.partDescription} placeholder="Part Description"></TextField>
          </Grid>
        </Grid>
        <Grid container  spacing={2}>
          <Grid item xs={8}>
            Notes
          </Grid>
          <Grid item className={styles.partNotes} xs={10}>
            <TextField multiline variant="outlined" minRows={8} className={styles.partNotes} placeholder="Notes"></TextField>
          </Grid>
        </Grid>
      </div>
    );
  }
}

PartDetail.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default PartDetail;
