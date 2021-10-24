import React from 'react'

function panel( {color, title, ...props } ) {
    return (
        
        <div className="panel panel-default">
                <div className="panel-heading" style={{backgroundColor: `${color}`, borderBottomColor: `${color}`, borderRadius: "0"}}>{title}</div>
                <div className="panel-body">
                    {props.children}
                </div>
        </div>     
               
    )
}

export default panel
