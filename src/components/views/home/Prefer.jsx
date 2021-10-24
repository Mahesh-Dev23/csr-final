import React, {useState, useReducer, useContext, useEffect} from 'react'

import Panel from '../elements/panel'
import QTitles from '../elements/qTitles'
import Radio5 from '../elements/Radio5'
import data from '../../../data.json'
import findEmpty from '../../conrollers/findEmpty'

import {getResponce} from '../../../App'
export const Radio7Values = React.createContext()

function Prefer() {

    const combinedQ7Values = useContext(getResponce)
    const [radio7, setRadio7] = useState([])

    const reducer = (state, action)=>{
        switch(action.type){
            case 'que7':
                return {...state, [action.name]:action.value}
            case 'default':
                return state
        }
    }

    const [state7, dispatch ] = useReducer(reducer, radio7)

    const date = new Date()

    useEffect(()=>{
        if(state7){
            if( Object.keys(state7).length === data.que7.q.length){
                combinedQ7Values.countDispatch({type:'que7', value:state7})
                combinedQ7Values.countDispatch({type:'file', value:date})
            }
            findEmpty(data.que7.key, data.que7.q, state7)
        }
        
    },[state7])


    return (
        <div id="Prefer" className="section">
            <Panel color={"#556b2f"} title={data.que7.sec}>
                <QTitles num={data.que7.des1} dist={data.que7.des2} inst={data.que7.des3} />
                <Radio7Values.Provider value={{countState: state7, countDispatch: dispatch}}>
                    <div style={{marginTop: "20px", paddingBottom:"50px"}}>
                        { data.que7.q.map( res =>
                            <div className="radioInline" id={data.que7.key + res.A} key={data.que7.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis"><p>{res.d}</p></div>
                                <div className="selectPanel">
                                    {data.que7.des4.map( (des, index) => 

                                        <Radio5 key={data.que7 + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que7.key} 
                                            index={index}
                                            len={data.que7.q.length}
                                        />
                                    )}
                                </div>    
                        </div>
                        )}
                    </div>
                </Radio7Values.Provider>
           </Panel>
        </div>
    )
}

export default Prefer
