import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import Officecard from './OfficeCard'
import { getCompanies, getOffices } from '../actions'

class OfficesPage extends Component{

    componentWillMount(){
        this.props.getCompanies();
        this.props.getOffices()
    }

    onReturnClick(){
        this.props.history.push('/')
    }

    renderOffices(){

        var arrJSX = this.props.offices.map((office) => {
            if(parseInt(office.companyId) === parseInt(this.props.match.params.companyId))
            return(
                <Officecard key={office.id} id={office.id} name={office.name} longitude={office.longitude} latitude={office.latitude} startDate={office.startDate}/>
            )
        })

        if(arrJSX.length === 0){
            return(
                <div>There are no offices created yet</div>
            )
        }
        else{
            return arrJSX
        }
    }

    

    render(){
        
        return(
            <div className="col-md-push-2 col-md-8 wrapper b-a b-dark m-t-lg" style={{"borderRadius":"8px"}}>
                <div className="padder-v col-md-12 b-b b-dark" >  
                    <div className="b-b b-dark">
                        <h3>{this.props.selectedCompany.name}</h3>
                    </div>
                    <div className="padder-v-xs">
                        <div>
                            <strong>Address:</strong>
                        </div>
                        <div>
                            {this.props.selectedCompany.address}
                        </div>
                    </div>
                    <div className="padder-v-xs">
                        <div>
                            <strong>Revenue:</strong>
                        </div>
                        <div>
                            {this.props.selectedCompany.revenue}
                        </div>
                    </div>
                    <div className="padder-v-xs">
                        <div>
                            <strong>Phone No.:</strong>
                        </div>
                        <div>
                            {this.props.selectedCompany.phoneCode}{this.props.selectedCompany.phoneNumber} 
                            <Button style={{"float": "right"}} onClick={() => this.onReturnClick()}>Back to Overview</Button>
                        </div>
                    </div>
                </div>
                <div className="padder-v col-md-12 m-l-md">
                <h3>Offices</h3>
                    {this.renderOffices()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state, props) => {
    const { companies, offices } = state
    var selectedCompany = {}
    for(var index in companies){
        if(parseInt(props.match.params.companyId) === parseInt(companies[index].id)){
            selectedCompany = companies[index]
        }
    }

    return { selectedCompany, offices }
}

export default connect(mapStateToProps, { getCompanies, getOffices })(OfficesPage)