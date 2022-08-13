import React, { Component } from 'react'
import ListItem from '@mui/material/ListItem'
import {ListItemAvatar} from '@mui/material'
import Typography from '@mui/material/Typography'

import { Avatar, ListItemText } from '@mui/material'
import { PropTypes } from 'prop-types';
//import { useNavigate } from 'react-router-dom'

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
//  navigate = useNavigate();

  onDblClick = (e) => {
    console.log("-------------------------------------------")
    console.log("PartListItem::onDblClick::doubleclick called! ")
    console.log("PartListItem::onDblClick::current partId: " + this.props.currentPart.id)

    // Go to PartDetail
    /*
    this.props.history.push({
      pathname: `/part/${this.props.currentPart.id}`,
      currentPart: this.props.currentPart
    })
    */
   /*
    this.navigate({
      pathname: `/part/${this.props.currentPart.id}`,
      currentPart: this.props.currentPart
    })
    */
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
export default PartListItem;
