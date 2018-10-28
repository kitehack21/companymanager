import React from 'react'

const CardInfo = (props) => {
    return(
        <div className="padder-v-xs">
            <div>
                <strong>{props.title}</strong>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export {CardInfo}