import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createCompany } from '../actions'
import ReactPhoneInput from 'react-phone-input-2'

class CreateCompanyForm extends Component{

    state = {companyPhoneCode: ""}

    componentDidMount(){
        function isFloat(n){
            return Number(n) === n && n % 1 !== 0;
        }
        document.getElementById("companyRevenue").addEventListener("keydown", function (e) {
            if (!isFloat(this.step)) {
                if (e.key == "." || e.key == "-" || e.key == "+") {
                    e.preventDefault();
                }
            }
            while ( this.value.toString()[0] === "0" && this.value.length > 0){
               this.value = this.value.toString().slice(1);
            }
        });
        document.getElementById("companyPhoneNumber").addEventListener("keydown", function (e) {
            if (!isFloat(this.step)) {
                if (e.key == "." || e.key == "-" || e.key == "+") {
                    e.preventDefault();
                }
            }
            if(e.key == "Backspace"){
                return
            }
            else if (this.value.length == 8){
                e.preventDefault();
            }
        });
    }
    
    onCreateCompanyClick(){
        if(this.refs.companyName.value === ""){

        }
        else if(this.refs.companyAddress.value === ""){

        }
        else if(this.refs.companyRevenue.value === ""){

        }
        else if(this.state.companyPhoneCode === "" || this.refs.phoneNumber){

        }
        else{
            var data = {
                name: this.refs.companyName.value,
                address: this.refs.companyAddress.value,
                revenue: this.refs.companyRevenue.value,
                phoneCode: "",
                phoneNumber: ""
            }
            this.props.createCompany(data)
            this.resetValues()
        }
        
    }

    resetValues(){
        document.getElementById("companyName").value = ""
        document.getElementById("companyAddress").value = ""
        document.getElementById("companyRevenue").value = ""
        document.getElementById("companyPhoneNumber").value = ""
    }

    handleCodeChange(e){
        console.log(e)
        this.setState({companyPhoneCode: e})
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
                        <input type="text" ref="companyName" id="companyName" placeholder="name" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Address:</strong>
                    </div>
                    <div>
                        <input type="text" ref="companyAddress" id="companyAddress" placeholder="address" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Revenue:</strong>
                    </div>
                    <div>
                        <input type="number" ref="companyRevenue" id="companyRevenue" min="0" placeholder="revenue" className="form-control" />
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Phone No:</strong>
                    </div>
                    <div>
                        <div className="col-md-4 no-padder-h padder-bottom-only"><ReactPhoneInput inputStyle={{"width":"100%"}} placeholder="code" onKeyDown={(e) => {e.preventDefault()}} onChange={(e) => this.handleCodeChange(e)}/></div>
                        <div className="col-md-8 no-padder-h padder-bottom-only"><input type="number" ref="companyPhoneNumber" id="companyPhoneNumber" min="0" placeholder="number" className="form-control" /></div>
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