import React, { Component } from 'react'
import { connect }from 'react-redux'

class CompanyCard extends Component{

    onCompanyDelete(){

    }

    render(){
        return(
            <div className="col-md-6" style={{"padding-left":"0px", "padding-right":"30px"}}>
                <div className="b-a wrapper-md" style={{"borderRadius":"8px"}}>
                    <div className="b-b b-dark">
                        <h4><strong>{this.props.name}</strong><button type="button" class="close">×</button></h4>
                    </div>
                    <div className="padder-v-xs">
                        <div>
                            <strong>Address:</strong>
                        </div>
                        <div>
                            {this.props.address}
                        </div>
                    </div>
                    <div className="padder-v-xs">
                        <div>
                            <strong>Revenue:</strong>
                        </div>
                        <div>
                            {this.props.revenue}
                        </div>
                    </div>
                    <div className="padder-v-xs">
                        <div>
                            <strong>Phone No.:</strong>
                        </div>
                        <div>
                            {this.props.phone}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(null,)(CompanyCard)