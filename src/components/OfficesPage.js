import React, { Component } from 'react'
import { connect } from 'react-redux'
import Officecard from './OfficeCard'
import { getOffices } from '../actions'

class OfficesPage extends Component{

    componentWillMount(){
        this.props.getOffices()
    }

    renderOffices(){
        console.log(this.props.match.params.companyId)
        console.log(this.props.offices)

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
                    <h3>Offices</h3>
                </div>
                <div className="padder-v cold-md-12 m-l-md">
                <h3>Offices</h3>
                    {this.renderOffices()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { companies, offices } = state

    return { companies, offices }
}

export default connect(mapStateToProps, { getOffices })(OfficesPage)