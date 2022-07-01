import React, { Component,useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import { ListItemAvatar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import { Avatar, ListItemText } from '@material-ui/core'

import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom'

/**
 * @description Draws the Part list item.
 * @param {array} partList
 * @param {number} currentProject
 * @param {object} currentPart
 */


const PartListItem = (props) => {
  const [open, SetOpen] = useState(false);
  const [selectedValue, SetSelectedValue] = useState(false);

  const navigate = useNavigate();

  console.log("PartListItem:::Props: " + JSON.stringify(props))

  const onDblClick = (e) => {
    console.log("-------------------------------------------")
    console.log("PartListItem::onDblClick::doubleclick called! ")
    console.log("PartListItem::onDblClick::current partId: " + props.currentPart.id)
    console.log("PartListItem::onDblClick::current currentPart: " + JSON.stringify(props.currentPart))

    navigate(`/part/${props.currentPart.id}`, { currentPart: props.currentPart })
  }

  const part = props.currentPart
  const txtColor = props.textColor
  
  console.log("PartListItem:render:part: " + JSON.stringify(part))
  console.log("PartListItem:render:color: " + txtColor);
  console.log("PartListItem:render:index: " + props.index);
  return (
    <ListItem key={props.index} alignItems="flex-start" onDoubleClick={onDblClick} button sx={{ color: '#FFA', minWidth: '80%', maxWidth: '50px' }}>

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
            style={{ color: txtColor }}
          >
            {part.name}
          </Typography>
        }

        secondary={
          <React.Fragment>
            <Typography
              style={{ color: txtColor }}
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

class PartListItemOrg extends Component {
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
    console.log("PartListItem:render:key: " + this.props.key)
    return (
      <ListItem  alignItems="flex-start" onDoubleClick={this.onDblClick} button sx={{ color: '#FFA', minWidth: '80%', maxWidth: '50px' }}>

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
              style={{ color: txtColor }}
            >
              {part.name}
            </Typography>
          }

          secondary={
            <React.Fragment>
              <Typography
                style={{ color: txtColor }}
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
  partlist: PropTypes.object,
  activeProject: PropTypes.object.isRequired,
  textColor: PropTypes.string
}
export default PartListItem;
