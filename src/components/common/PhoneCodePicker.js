import React, { Component } from 'react'
import ReactPhoneInput from 'react-phone-input-2'

class PhoneCodePicker extends Component{
    state = {phoneCode : ""}

    handleOnChange(value){
        this.setState({phoneCode: value})
        this.props.getPhoneCode(value)
    }

    render(){
        return(
            <ReactPhoneInput value={this.state.phoneCode} onChange={this.handleOnChange.bind(this)} placeholder="code" inputStyle={{"width":"100%"}} onKeyDown={(e)=>{e.preventDefault()}}/>
        )
    }
}

export { PhoneCodePicker }
