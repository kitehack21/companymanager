import React, { Component } from 'react'
import CreateCompanyForm from './CreateCompanyForm'
import CreateOfficeForm from './CreateOfficeForm'
import { connect } from 'react-redux'
import { getCompanies } from '../actions'
import CompanyCard from './CompanyCard'

class OverviewPage extends Component{

    componentWillMount(){
        this.props.getCompanies()
    }
    
    renderCompaniesList(){
        console.log(this.props.companies)
        if(this.props.companies.length === 0){
            return(
                <div>There are no companies created yet</div>
            )
        }
        else{
            var arrJSX = this.props.companies.map((company) => {
                return(<CompanyCard id={company.id} name={company.name} address={company.address} revenue={company.revenue} phone={company.phone} history={this.props.history}/>)
            })
            return arrJSX
        }
    }
    
    render(){
        return(
            <div className="col-md-push-2 col-md-8 wrapper b-a b-dark m-t-lg" style={{"borderRadius":"8px"}}>
                <div className="padder-v col-md-12 b-b b-dark" >
                    <div className="col-md-6 b-r">
                        <CreateCompanyForm />
                    </div>
                    <div className="col-md-6">
                        <CreateOfficeForm />
                    </div>
                </div>
                <div className="padder-v cold-md-12 m-l-lg">
                    <h3>Companies</h3>
                    {this.renderCompaniesList()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    const companies = state.companies
    return { companies }
}

export default connect(mapStateToProps, {getCompanies})(OverviewPage)