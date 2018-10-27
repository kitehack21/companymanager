import React, { Component } from 'react'
import { connect }from 'react-redux'
import { deleteCompany } from '../actions'


class CompanyCard extends Component{

    onCompanyDeleteClick(event){
        event.stopPropagation()
        this.props.deleteCompany(this.props.id)
    }

    onCompanyCardClick(){
        this.props.history.push(`/companies/${this.props.id}`)
    }

    render(){
        return(
            <div className="col-md-6" style={{"padding-left":"0px", "padding-right":"30px"}} onClick={()=>this.onCompanyCardClick()}>
                <div className="b-a wrapper-md" style={{"borderRadius":"8px"}}>
                    <div className="b-b b-dark">
                        <h4><strong>{this.props.name}</strong><button type="button" class="close" onClick={(e)=>this.onCompanyDeleteClick(e)}>×</button></h4>
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

export default connect(null, { deleteCompany })(CompanyCard)