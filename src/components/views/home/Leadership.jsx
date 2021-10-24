import React, {useState, useReducer, useContext, useEffect} from 'react'

import Panel from '../elements/panel'
import QTitles from '../elements/qTitles'
import Radio5 from '../elements/Radio5'
import data from '../../../data.json'
import findEmpty from '../../conrollers/findEmpty'

import {getResponce} from '../../../App'

export const Radio5AValue = React.createContext()
export const Radio5BValue = React.createContext()


function Leadership() {

    const captureQue5aValues = useContext(getResponce)
    const captureQue5bValues = useContext(getResponce)

    const [radio5Array, setRadio5Array] = useState([])
    const [radio5bArray, setRadio5bArray] = useState([])
    

    const reducer = (state, action)=>{
        switch(action.type){
            case 'que5a':
                return{...state, [action.name]:action.value}
            case 'que5b':
                return{...state, [action.name]:action.value}    
            default :
                return state       
        }      
    }
    const reducer2 = (state, action)=>{
        switch(action.type){
            
            case 'q5b':
                return{...state, [action.name]:action.value}    
            default :
                return state       
        }      
    }
    // user reducer 
    const [newState5, dispatch] = useReducer( reducer, radio5Array)
    const [newState5b, dispatch2] = useReducer( reducer, radio5bArray)
    

    useEffect(()=>{
        if(newState5){
            if( Object.keys(newState5).length === data.que5a.q.length){
                captureQue5aValues.countDispatch({type:'que5a', value:newState5})
                //console.log(newState5)

                // checking newState5b
                if(newState5b){
                    if(Object.keys(newState5b).length === data.que5b.q.length){
                        captureQue5bValues.countDispatch({type:'que5b', value:newState5b})
                        //captureQue5bValues.countDispatch({type:'count', value:6})
                        //console.log(newState5b)
                    }
                    //console.log(Object.keys(newState5b).length + " " + Data.que5b.q.length)
                    findEmpty(data.que5b.key, data.que5b.q, newState5b)
                }
            }
            //console.log(Object.keys(newState5).length + " " + Data.que5a.q.length)
            findEmpty(data.que5a.key, data.que5a.q, newState5)
        }
        
    },[newState5, newState5b])

    return (
        <div id="Leadership" className="section">
            <Panel color={"#7b68ee"} title={data.que5a.sec}>
                
                {/* <h4>{data.que5a.qSec}</h4> */}
                <QTitles num={data.que5a.des1} dist={data.que5a.des2} inst={data.que5a.des3} />
                <Radio5AValue.Provider value={{countState: newState5, countDispatch: dispatch}}>
                    <div style={{marginTop: "10px", paddingBottom:"50px"}}>
                        { data.que5a.q.map( res =>
                            <div className="radioInline" id={data.que5a.key + res.A} key={data.que5a.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis"><p>{res.d}</p></div>
                                <div className="selectPanel">
                                    {data.que5a.des4.map( (des, index) => 

                                        <Radio5 key={data.que5a + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que5a.key} 
                                            index={index}
                                            len={data.que5a.q.length}
                                        />
                                    )}
                                </div>    
                        </div>
                        )}
                    </div>
                </Radio5AValue.Provider>

                <h4>{data.que5b.des5}</h4>
                {/* <QTitles num={data.que5b.des1} dist={data.que5b.des2} inst={data.que5b.des3} /> */}
                <Radio5BValue.Provider value={{countState: newState5b, countDispatch: dispatch2}}>
                    <div style={{marginTop: "0px", paddingBottom:"50px"}}>
                        { data.que5b.q.map( res =>
                            <div className="radioInline" id={data.que5b.key + res.A} key={data.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis"><p>{res.d}</p></div>
                                <div className="selectPanel">
                                    {data.que5b.des4.map( (des, index) => 

                                        <Radio5 key={data.que5b + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que5b.key} 
                                            index={index}
                                            len={data.que5b.q.length}
                                        />
                                    )}
                                </div>    
                        </div>
                        )}
                    </div>
                </Radio5BValue.Provider>


           </Panel>
        </div>
    )
}

export default Leadership
