import React from 'react'
import data from '../../../data.json'

function Que1({que1, ans}) {
    
    return (
        <div >
            <h4>{que1.sec}</h4>
            {que1.q.map(res => 
                <div className="resultToPrint">
                    <p>{res.A} </p> 
                    
                    {Object.keys(ans).map( key => key === res.name ? 
                    res.des.map(des => <h5 > {ans[key] === des ? <span>{des}</span> : des }</h5>) :''
                    )}
                </div>)}
        </div>
    )
}

export default Que1
