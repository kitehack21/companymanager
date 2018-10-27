import React, { Component } from 'react'
import { connect } from 'react-redux'

class OfficesPage extends Component{



    renderOffices(){
        return(
            <div>offices</div>
        )
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

export default connect(mapStateToProps, {})(OfficesPage)