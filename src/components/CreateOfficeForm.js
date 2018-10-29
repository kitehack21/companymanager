import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createOffice } from '../actions'
import DatePicker from 'react-datepicker';
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';

class CreateOfficeForm extends Component{
    constructor (props) {
        super(props)
        this.state = {
          startDate: "",
          latitude:"",
          longitude: ""
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
    handleChange(date) {
        this.setState({
          startDate: date
        });
      }

    renderOfficeSelect(){
        var arrJSX = this.props.companies.map((company) => {
            return <option value={company.id} key={company.id}>{company.name}</option>
        })

        return arrJSX
    }

    onOfficeCreateClick(){
        if(this.refs.officeName.value === ""){

        }
        else if(this.refs.officeLat.value === ""){

        }
        else if(this.refs.officeLong.value === ""){

        }
        else if(this.state.startDate === "" ){

        }
        else if(this.refs.officeCompanyId.value == 0 ){

        }
        else{
            var data = {
                name: this.refs.officeName.value,
                latitude: this.refs.officeLat.value,
                longitude: this.refs.officeLong.value,
                startDate: this.state.startDate.format("MM/DD/YYYY"),
                companyId: this.refs.officeCompanyId.value
            }
            this.props.createOffice(data)
            this.resetValues()
        }
    }

    resetValues(){
        this.refs.officeName.value = ""
        this.refs.officeLat.value = ""
        this.refs.officeLong.value = ""
        this.refs.officeCompanyId.value = 0
        this.setState({startDate: ""})
    }

    onChange(){
        return (
            {
                Latitude: (key) => {
                    const regex = /^[0-9\b]+$/;
                    console.log(key.target.value)
                    if (key.target.value === '' || regex.test(key.target.value)) {
                    this.setState({Location: {Lat: key.target.value}})
                    }
                },
                Longitude: (key) => {
                    const regex = /^[-+]?\d*(\.\d*)?$/;
                    if (key.target.value === '' || regex.test(key.target.value)) {
                        this.setState({longitude: key.target.value})
                    }
                }
            }
        )
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
                        <input type="text" placeholder="name" ref="officeName" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Location:</strong>
                    </div>
                    <div>
                        <div className="col-md-6 padder-right-only padder-bottom-sm">
                            <input type="number" placeholder="latitude" ref="officeLat" className="form-control"/>
                        </div>
                        <div className="col-md-6 padder-right-only padder-bottom-sm">
                            <input type="number" placeholder="longitude" ref="officeLong" onChange={this.onChange()['Longitude'].bind(this)} value={this.state.longitude}  className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <b>Office Start Date:</b>
                    </div>
                    <div>
                        <DatePicker selected={this.state.startDate} onChange={this.handleChange} className="form-control" style={{"width":"100%"}}/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Company:</strong>
                    </div>
                    <div>
                        <select placeholder="select company" ref="officeCompanyId" className="form-control">
                            <option value={0}>Select Company</option>
                            {this.renderOfficeSelect()}
                        </select>
                    </div>
                </div>
                <div className="padder-v">
                    <Button style={{"borderRadius": "5px"}} onClick={()=>this.onOfficeCreateClick()} block>Create</Button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const companies = state.companies

    return { companies }
}

export default connect(mapStateToProps, { createOffice })(CreateOfficeForm)