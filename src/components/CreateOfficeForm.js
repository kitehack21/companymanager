import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class CreateOfficeForm extends Component{

    renderOfficeSelect(){
        var arrJSX = this.props.companies.map((company) => {
            return <option value={company.id}>{company.name}</option>
        })

        return arrJSX
    }

    onOfficeCreateClick(){

    }

    render(){
        return(
            <div>
                <h4>Create Office</h4>
                <div className="padder-v-xs">
                    <div>
                        <strong>Name:</strong>
                    </div>
                    <div>
                        <input type="text" placeholder="name" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Location:</strong>
                    </div>
                    <div>
                        <div className="col-md-6 padder-right-only padder-bottom-sm">
                            <input type="text" placeholder="latitude" className="form-control"/>
                        </div>
                        <div className="col-md-6 padder-left-only padder-bottom-sm">
                            <input type="text" placeholder="longitude" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <b>Office Start Date:</b>
                    </div>
                    <div>
                        <input type="text" placeholder="date" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Company:</strong>
                    </div>
                    <div>
                        <select placeholder="select company" className="form-control">
                            <option value={0}>Select Company</option>
                            {this.renderOfficeSelect()}
                        </select>
                    </div>
                </div>
                <div className="padder-v">
                    <Button style={{"borderRadius": "5px"}} block>Create</Button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const companies = state.companies

    return { companies }
}

export default connect(mapStateToProps, )(CreateOfficeForm)