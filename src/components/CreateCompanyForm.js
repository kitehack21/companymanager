import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createCompany } from '../actions'
import ReactPhoneInput from 'react-phone-input-2'

class CreateCompanyForm extends Component{

    onCreateCompanyClick(){
        var data = {
            name: this.refs.companyName.value,
            address: this.refs.companyAddress.value,
            revenue: this.refs.companyRevenue.value,
        }
        this.props.createCompany(data)
    }

    render(){
        return(
            <div>
                <h4>Create Company</h4>
                <div className="padder-v-xs">
                    <div>
                        <strong>Name:</strong>
                    </div>
                    <div >
                        <input type="text" ref="companyName" placeholder="name" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Address:</strong>
                    </div>
                    <div>
                        <input type="text" ref="companyAddress" placeholder="address" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Revenue:</strong>
                    </div>
                    <div>
                        <input type="text" ref="companyRevenue" placeholder="revenue" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Phone No:</strong>
                    </div>
                    <div>
                        <ReactPhoneInput inputStyle={{"width":"100%"}}/>
                    </div>
                </div>
                <div className="padder-v">
                    <Button style={{"borderRadius": "5px"}} block onClick={()=>this.onCreateCompanyClick()}>Create</Button>
                </div>
            </div>
        )
    }

}

export default connect( null, { createCompany })(CreateCompanyForm)