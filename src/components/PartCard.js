import  React, {Component } from 'react'
import Card from '@mui/material/Card'

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { Avatar } from '@mui/material'
import {withRouter} from 'react-router-dom'

class PartCard extends Component {
        state = {
            open: false,
            selectedValue: false
        }

        onDblClick = (e) => {
            console.log("-------------------------------------------")
            console.log("PartCard::onDblClick::doubleclick called! ")
            console.log("current partid: " + this.props.currentPart.id)
            // Go to partDetail
            this.props.history.push({
                pathname: `/part/${this.props.currentPart.id}`,
                currentPart: this.props.currentPart
            })
        }
        
        componentDidMount() {
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
            console.log("PartCard::componentDidMount:Props: " + JSON.stringify(this.props))
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        }

        render() {
            const part = this.props.currentPart
            console.log("PartCard:render:part: " + JSON.stringify(part))
            return(
                <div>
                    <Card onDoubleClick={this.onDblClick}>
                        <CardContent>
                        {
                            part && (part.avatarURL ? <Avatar src={part.avatarURL} />  : null)
                        }
                            <Typography gutterBottom variant="headline" component="h2">
                                {part.name}
                            </Typography>
                            <Typography component="p">
                                {part.description ?part.description : ''}
                            </Typography>
                            <Typography component="p">
                                {part.part_nbr ? part.part_nbr : ''}
                            </Typography>
                            <Typography component="p">
                                {part.status ? part.status : ''}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )
        }
    }

export default withRouter(PartCard);
