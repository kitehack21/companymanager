import React from 'react'

const CardHeader = (props) => {
    return(
        <div className="b-b b-dark">
            <h4>
                <strong>{props.children}</strong>
                <button type="button" className="close" onClick={props.onClick}>×</button>
            </h4>
        </div>
    )
}

export {CardHeader}