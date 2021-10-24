import React, {useState, useReducer, useContext, useEffect} from 'react'

import Panel from '../elements/panel'
import QTitles from '../elements/qTitles'
import Radio5 from '../elements/Radio5'
import data from '../../../data.json'
import findEmpty from '../../conrollers/findEmpty'

import {getResponce} from '../../../App'
export const Radio2Values = React.createContext()

function Loyalty() {
    
    const combinedQ2Values = useContext(getResponce)
    const [radio2, setRadio2] = useState([])

    const reducer = (state, action)=>{
        switch(action.type){
            case 'que2':
                return {...state, [action.name]:action.value}
            case 'default':
                return state
        }
    }

    const [state2, dispatch ] = useReducer(reducer, radio2)
    const [state2Id, setState2Id] = useState()
    const [state2Key, setState2Key] = useState([])

    useEffect(()=>{
        
        if(state2){
            setState2Key( Object.keys(state2) )
            if( Object.keys(state2).length === data.que2.q.length){
                combinedQ2Values.countDispatch({type:'que2', value:state2})
            }
            findEmpty(data.que2.key, data.que2.q, state2)
        }
        
        //
    },[state2])

   
    
    //console.log( Object.keys(state2).length + " " + data.que2.q.length ) // done
    return (
        <div id="Loyalty" className="section">
           <Panel color={"#663399"} title={data.que2.sec}>
                <QTitles num={data.que2.des1} dist={data.que2.des2} inst={data.que2.des3} />
                <Radio2Values.Provider value={{countState: state2, countDispatch: dispatch}}>
                    <div style={{marginTop: "10px", paddingBottom:"50px"}}>
                        { data.que2.q.map( res =>
                            <div className="radioInline" 
                                id={data.que2.key + res.A} 
                                key={data.key + res.A} 
                            >
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis"><p>{res.d}</p></div>
                                <div className="selectPanel">
                                    {data.que2.des4.map( (des, index) => 

                                        <Radio5 key={data.que2 + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que2.key} 
                                            index={index}
                                            len={data.que2.q.length}
                                        />
                                    )}
                                </div>    
                        </div>
                        )}
                    </div>
                </Radio2Values.Provider>
           </Panel>
        </div>
    )
}

export default Loyalty
