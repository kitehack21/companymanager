import React from 'react'

const Card = (props) => {
    return(
        <div className="col-sm-12 col-md-6" style={{"paddingLeft":"0px", "paddingBottom":"10px", "paddingRight":"30px"}} onClick={props.onClick}>
            <div className="b-a wrapper-md animated fadeInUp card-hover" style={{"borderRadius":"8px"}}>
                {props.children}
            </div>
        </div>
    )
}

export {Card}