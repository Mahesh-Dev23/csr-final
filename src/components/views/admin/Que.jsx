import React from 'react'
import data from '../../../data.json'

function Que1({que, ans}) {
    
    return (
        <div >
            <h4>{que.sec}</h4>
            {que.q.map(res => 
                <div className="resultToPrint">
                    <p>{res.A} </p> 
                    
                    {Object.keys(ans).map( key => key === res.A ? 
                    que.des4.map(des => <h5 > {ans[key] === des ? <span>{des}</span> : des }</h5>) :''
                    )}
                </div>)}
        </div>
    )
}

export default Que1
