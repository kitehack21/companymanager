import React, { Component } from 'react'
import { connect }from 'react-redux'
import { deleteOffice } from '../actions'

class OfficeCard extends Component{

    onOfficeDeleteClick(event){
        event.stopPropagation()
        this.props.deleteOffice(this.props.id)
    }


    render(){
        return(
            <div className="col-md-6" style={{"paddingLeft":"0px", "paddingRight":"30px"}}>
                <div className="b-a wrapper-md" style={{"borderRadius":"8px"}}>
                    <div className="b-b b-dark">
                        <h4><strong>{this.props.name}</strong><button type="button" className="close" onClick={(e)=>this.onOfficeDeleteClick(e)}>×</button></h4>
                    </div>
                    <div className="padder-v-xs">
                        <div>
                            <strong>Location:</strong>
                        </div>
                        <div>
                            Lat - {this.props.longitude}
                        </div>
                        <div>
                            Log - {this.props.latitude}
                        </div>
                    </div>
                    <div className="padder-v-xs">
                        <div>
                            <strong>Office Start Date:</strong>
                        </div>
                        <div>
                            {this.props.startDate}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(null, {deleteOffice})(OfficeCard)