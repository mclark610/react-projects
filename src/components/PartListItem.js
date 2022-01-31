import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import {ListItemAvatar} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import { Avatar, ListItemText } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { PropTypes } from 'prop-types';

/**
 * @description Draws the Part list item.
 * @param {array} partList
 * @param {number} currentProject
 * @param {object} currentPart
 */

class PartListItem extends Component {
  state = {
    open: false,
    selectedValue: false
  }

  onDblClick = (e) => {
    console.log("-------------------------------------------")
    console.log("PartListItem::onDblClick::doubleclick called! ")
    console.log("PartListItem::onDblClick::current partId: " + this.props.currentPart.id)

    // Go to PartDetail
    this.props.history.push({
      pathname: `/part/${this.props.currentPart.id}`,
      currentPart: this.props.currentPart
    })
  }

  componentDidMount() {
    console.log("PartListItem::componentDidMount:Props: " + JSON.stringify(this.props))
  }

  render() {
    const part = this.props.currentPart
    const txtColor = this.props.textColor

    console.log("PartListItem:render:part: " + JSON.stringify(part))
    console.log("PartListItem:render:color: " + txtColor);
    return (
      <ListItem key={this.props.key} alignItems="flex-start" onDoubleClick={this.onDblClick}  button sx={{color: '#FFA',minWidth: '80%', maxWidth:'50px'}}>
     
          {
            part && (part.avatarURL ? 
                <ListItemAvatar>
                  <Avatar src={part.avatarURL} />
                </ListItemAvatar>
              : 
                null)
          }

        <ListItemText 
          
          primary={
            <Typography
              style={{color:txtColor }}
            >
            {part.name}
            </Typography>
          }
          
          secondary={
            <React.Fragment>
              <Typography
                style={{color:txtColor}}
                component="span"
                variant="body2"
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

PartListItem.propTypes = {
  key: PropTypes.number,
  partlist: PropTypes.object,
  activeProject: PropTypes.object.isRequired,
  textColor: PropTypes.string
}
export default withRouter(PartListItem);
