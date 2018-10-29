import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createOffice } from '../actions'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreateOfficeForm extends Component{
    constructor (props) {
        super(props)
        this.state = {
          startDate: "",
          nameError: false,
          locationError: false,
          dateError: false,
          companyIdError: false
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
    
    componentDidMount(){
        function isFloat(n){
            return Number(n) === n && n % 1 !== 0;
        }
        document.getElementById("officeLat").addEventListener("keydown", function (e) {
            if (!isFloat(this.step)) {
                if (e.key == "-" || e.key == "+") {
                    e.preventDefault();
                }
                if (e.key == "." ) {
                    const regex = /[0-9]+(\.[0-9]+)?/;
                    if(!regex.test(this.value)){
                        e.preventDefault()
                    }
                }
            }
        });
        document.getElementById("officeLong").addEventListener("keydown", function (e) {
            if (!isFloat(this.step)) {
                if (e.key == "-" || e.key == "+") {
                    e.preventDefault();
                }
                if (e.key == "." ) {
                    const regex = /[0-9]+(\.[0-9]+)?/;
                    if(!regex.test(this.value)){
                        e.preventDefault()
                    }
                }
            }
        });
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
        if(this.refs.officeName.value === "" || this.refs.officeLat.value === "" || this.refs.officeLong.value === "" || this.state.startDate === "" || this.refs.officeCompanyId.value == 0){
            if(this.refs.officeName.value === ""){
                this.setState({nameError:true})
            }
            else{
                this.setState({nameError:false})
            }

            if(this.refs.officeLat.value === "" || this.refs.officeLong.value === ""){
                this.setState({locationError:true})
            }
            else{
                this.setState({locationError:false})
            }

            if(this.state.startDate === ""){
                this.setState({dateError:true})
            }
            else{
                this.setState({dateError:false})
            }

            if(this.refs.officeCompanyId.value == 0){
                this.setState({companyIdError:true})
            }
            else{
                this.setState({companyIdError:false})
            }
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

    renderError(){
        return(
            {
                name: () => {
                    if(this.state.nameError){
                        return(<div className="label bg-danger">Please fill this form</div>)
                    }
                    else{return}
                },
                location: () => {
                    if(this.state.locationError){
                        return(<div className="label bg-danger">Please fill this form</div>)
                    }
                    else{return}
                },
                date: () => {
                    if(this.state.dateError){
                        return(<div className="label bg-danger">Please fill this form</div>)
                    }
                    else{return}
                },
                companyId: () => {
                    if(this.state.companyIdError){
                        return(<div className="label bg-danger">Please select company</div>)
                    }
                    else{return}
                }
            }
        )
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
                        <strong>Name:</strong>{this.renderError().name()}
                    </div>
                    <div>
                        <input type="text" placeholder="name" ref="officeName" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Location:</strong>{this.renderError().location()}
                    </div>
                    <div>
                        <div className="col-md-6 padder-right-only padder-bottom-sm">
                            <input type="number" placeholder="latitude" ref="officeLat" id="officeLat" className="form-control"/>
                        </div>
                        <div className="col-md-6 padder-right-only padder-bottom-sm">
                            <input type="number" placeholder="longitude" ref="officeLong" id="officeLong" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <b>Office Start Date:</b>{this.renderError().date()}
                    </div>
                    <div>
                        <DatePicker selected={this.state.startDate} onChange={this.handleChange} className="form-control" style={{"width":"100%"}}/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Company:</strong>{this.renderError().companyId()}
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