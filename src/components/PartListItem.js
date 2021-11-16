import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import {ListItemAvatar} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import { Avatar, ListItemText } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  tr: {
    background: "#f1f1f1",
    '&:hover': {
       background: "#f00",
    },
  },
});
class PartListItem extends Component {
  state = {
    open: false,
    selectedValue: false
  }

  onDblClick = (e) => {
    console.log("-------------------------------------------")
    console.log("PartListItem::onDblClick::doubleclick called! ")
    console.log("current partId: " + this.props.currentPart.id)
    // Go to TaskDetail
    this.props.history.push({
      pathname: `/part/${this.props.currentPart.id}`,
      currentPart: this.props.currentPart
    })
  }
  componentDidMount() {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log("PartListItem::componentDidMount:Props: " + JSON.stringify(this.props))
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
  }

  render() {
    const part = this.props.currentPart
    console.log("PartListItem:render:part: " + JSON.stringify(part))
    return (
      <ListItem key={this.props.key} alignItems="flex-start" onDoubleClick={this.onDblClick}  button sx={{color: '#F0A',minWidth: '100%', maxWidth:'100px'}}
      sx={{
          '&:hover': {
            background: "#f00",
          },
          width:"500",
      }}

        key={part.id}
      >
        
          {
            part && (part.avatarURL ? 
                <ListItemAvatar>
                  <Avatar src={part.avatarURL} />
                </ListItemAvatar>
              : 
                null)
          }

        <ListItemText
          primary={part.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {part.description ? part.description : ''}
              </Typography>
            </React.Fragment>
          }
        >
          {part.name}
        </ListItemText>
      </ListItem>
    )
  }
}

export default withRouter(PartListItem);
