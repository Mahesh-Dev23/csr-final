import React, {useState, useReducer, useContext, useEffect} from 'react'

import Panel from '../elements/panel'

import Radio5 from '../elements/Radio5'
import data from '../../../data.json'
import findEmpty from '../../conrollers/findEmpty'

import {getResponce} from '../../../App'
export const Radio6Values = React.createContext()

function Govt() {

    const combinedQ6Values = useContext(getResponce)
    const [radio6, setRadio6] = useState([])

    const reducer = (state, action)=>{
        switch(action.type){
            case 'que6':
                return {...state, [action.name]:action.value}
            case 'default':
                return state
        }
    }

    const [state6, dispatch ] = useReducer(reducer, radio6)

    useEffect(()=>{
        if(state6){
            if( Object.keys(state6).length === data.que6.q.length){
                combinedQ6Values.countDispatch({type:'que6', value:state6})
            }
            findEmpty(data.que6.key, data.que6.q, state6)
        }
        
    },[state6])

    return (
        <div id="Govt" className="section">
            <Panel color={"#bdb76b"} title={data.que6.sec}>
                
                <Radio6Values.Provider value={{countState: state6, countDispatch: dispatch}}>
                    <div style={{marginTop: "10px", paddingBottom:"50px"}}>
                        { data.que6.q.map( res =>
                            <div className="radioInline6" id={data.que6.key + res.A} key={data.que6.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis"><p>{res.d}</p></div>
                                <div className="selectPanel6">
                                    {data.que6.des4.map( (des, index) => 

                                        <Radio5 key={data.que6 + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que6.key} 
                                            index={index}
                                            len={data.que6.q.length}
                                        />
                                    )}
                                </div>    
                        </div>
                        )}
                    </div>
                </Radio6Values.Provider>
           </Panel>
        </div>
    )
}

export default Govt
