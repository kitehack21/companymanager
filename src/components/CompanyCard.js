import React, { Component } from 'react'
import { connect }from 'react-redux'
import { deleteCompany } from '../actions'
import { Card, CardHeader, CardInfo } from './common'

class CompanyCard extends Component{

    onCompanyDeleteClick(event){
        event.stopPropagation()
        if(window.confirm("Are you sure you want to delete Company?")){
            this.props.deleteCompany(this.props.id)
        }
    }

    onCompanyCardClick(){
        this.props.history.push(`/companies/${this.props.id}`)
    }

    render(){
        return(
            <Card onClick={() => this.onCompanyCardClick()}>
                <CardHeader onClick={(e)=>this.onCompanyDeleteClick(e)}>{this.props.name}</CardHeader>
                <CardInfo title="Address:">{this.props.address}</CardInfo>
                <CardInfo title="Revenue:">{this.props.revenue}</CardInfo>
                <CardInfo title="Phone No.:">{this.props.phone}</CardInfo>
            </Card>
        )
    }

}

export default connect(null, { deleteCompany })(CompanyCard)