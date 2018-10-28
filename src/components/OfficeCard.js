import React, { Component } from 'react'
import { connect }from 'react-redux'
import { deleteOffice } from '../actions'
import { Card, CardHeader, CardInfo } from './common'

class OfficeCard extends Component{

    onOfficeDeleteClick(event){
        event.stopPropagation()
        if(window.confirm("Are you sure you want to delete Office?")){
            this.props.deleteOffice(this.props.id)
        }
    }

    render(){
        return(
            <Card>
                <CardHeader onClick={(e)=>this.onOfficeDeleteClick(e)}>{this.props.name}</CardHeader>
                <CardInfo title="Location:">
                    <div>
                        Lat - {this.props.longitude}
                    </div>
                    <div>
                        Log - {this.props.latitude}
                    </div>
                </CardInfo>
                <CardInfo title="Office Start Date:">
                    {this.props.startDate}
                </CardInfo>
            </Card>
        )
    }

}

export default connect(null, {deleteOffice})(OfficeCard)