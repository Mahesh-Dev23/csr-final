import React from 'react'

function QTitles({num, dis, inst}) {
    return (
        <div className=" qTitles">
            <div className="num">{num}</div>
            <div className="dis">{dis}</div>
            <div className="selectPanel" style={{fontWeight:"500"}}>{inst}</div>
        </div>
    )
}

export default QTitles
