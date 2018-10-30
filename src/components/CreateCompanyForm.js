import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createCompany } from '../actions'
import { PhoneCodePicker } from './common'

class CreateCompanyForm extends Component{
    state = {phoneCode : "", nameError: false, addressError: false, revenueError: false, phoneError: false}

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
            else if (this.value.length == 11){
                e.preventDefault();
            }
        });
    }
    
    componentWillReceiveProps(NewProps){
        console.log(NewProps)
    }

    onCreateCompanyClick(){
        if(this.refs.companyName.value === "" || this.refs.companyName.value === "" || this.refs.companyRevenue.value === "" || this.state.phoneCode === "" || this.refs.companyPhoneNumber === ""){
            if(this.refs.companyName.value === ""){
                this.setState({nameError:true})
            }
            else{
                this.setState({nameError:false})
            }
            if(this.refs.companyAddress.value === ""){
                this.setState({addressError:true})
            }
            else{
                this.setState({addressError:false})
            }

            if(this.refs.companyRevenue.value === ""){
                this.setState({revenueError:true})
            }
            else{
                this.setState({revenueError:false})
            }

            if(this.state.phoneCode === "" || this.refs.companyPhoneNumber === ""){
                this.setState({phoneError:true})
            }
            else{
                this.setState({phoneError:false})
            }
        }
        else{
            var data = {
                name: this.refs.companyName.value,
                address: this.refs.companyAddress.value,
                revenue: this.refs.companyRevenue.value,
                phoneCode: this.state.phoneCode,
                phoneNumber: this.refs.companyPhoneNumber.value
            }
            this.props.createCompany(data)
            this.resetValues()
            alert("Company has been created")
        }
        
    }

    resetValues(){
        document.getElementById("companyName").value = ""
        document.getElementById("companyAddress").value = ""
        document.getElementById("companyRevenue").value = ""
        document.getElementById("companyPhoneNumber").value = ""
    }

    getPhoneCode(value){
        this.setState({phoneCode: value})
        console.log(this.state.phoneCode)
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
                address: () => {
                    if(this.state.addressError){
                        return(<div className="label bg-danger">Please fill this form</div>)
                    }
                    else{return}
                },
                revenue: () => {
                    if(this.state.revenueError){
                        return(<div className="label bg-danger">Please fill this form</div>)
                    }
                    else{return}
                },
                phone: () => {
                    if(this.state.phoneError){
                        return(<div className="label bg-danger">Please fill this form</div>)
                    }
                    else{return}
                }
            }
        )
    }

    render(){
        
        return(
            <div>
                <h4>Create Company</h4>
                <div className="padder-v-xs">
                    <div>
                        <strong>Name:</strong>{this.renderError().name()}
                    </div>
                    <div >
                        <input type="text" ref="companyName" id="companyName" placeholder="name" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Address:</strong>{this.renderError().address()}
                    </div>
                    <div>
                        <input type="text" ref="companyAddress" id="companyAddress" placeholder="address" className="form-control"/>
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Revenue:</strong>{this.renderError().revenue()}
                    </div>
                    <div>
                        <input type="number" ref="companyRevenue" id="companyRevenue" min="0" placeholder="revenue" className="form-control" />
                    </div>
                </div>
                <div className="padder-v-xs">
                    <div>
                        <strong>Phone No: {this.props.phone}</strong>{this.renderError().phone()}
                    </div>
                    <div>
                        <div className="col-md-4 no-padder-h padder-bottom-only" >
                            <PhoneCodePicker getPhoneCode={this.getPhoneCode.bind(this)}/>
                        </div>
                        <div className="col-md-8 no-padder-h padder-bottom-only">
                            <input type="number" ref="companyPhoneNumber" id="companyPhoneNumber" min="0" placeholder="number" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="padder-v">
                    <Button style={{"borderRadius": "5px"}} block onClick={()=>this.onCreateCompanyClick()}>Create</Button>
                </div>
            </div>
        )
    }

}

export default connect(null, { createCompany })(CreateCompanyForm)