import  React, {Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import MaintainDialog from './MaintainDialog';

class MaintainCard extends Component {
        state = {
            open: false,
            selectedValue: false
        }

        render() {
            console.log(this.props)
            return(
                <div>
                    { this.props.maintain ? (
                        <Card >
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {this.props.maintain.name}
                                </Typography>
                                <Typography component="p">
                                    {this.props.maintain.description}
                                </Typography>
                                <Typography component="p">
                                    {this.props.maintain.part_nbr}
                                </Typography>
                                <Typography component="p">
                                    {this.props.maintain.status}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <MaintainDialog
                                  selectedValue={this.state.selectedValue}
                                  maintainID={this.props.maintain.id}
                                  open={this.state.open}
                                  onClose={this.handleClose}
                                />
                            </CardActions>
                        </Card>
                    ) : null}
                </div>
            )
        }
    }

export default MaintainCard;
