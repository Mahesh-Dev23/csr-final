import React, {useState, useReducer, useContext, useEffect} from 'react'

import Panel from '../elements/panel'
import QTitles from '../elements/qTitles'
import Radio5 from '../elements/Radio5'
import data from '../../../data.json'
import findEmpty from '../../conrollers/findEmpty'

import {getResponce} from '../../../App'

export const Radio4AValue = React.createContext()
export const Radio4BValue = React.createContext()
export const Radio4CValue = React.createContext()

function Motivational() {

    const captureQue4aValues = useContext(getResponce)
    const captureQue4bValues = useContext(getResponce)
    const captureQue4cValues = useContext(getResponce)

    const [radio4A, setradio4A] = useState([])
    const [radio4B, setradio4B] = useState([])
    const [radio4C, setradio4C] = useState([])

    const reducer = (state, action)=>{
        switch(action.type){
            case 'que4a':
                return {...state, [action.name]:action.value}
            case 'que4b':
                return {...state, [action.name]:action.value}  
            case 'que4c':
                return {...state, [action.name]:action.value}   
            case 'default':
                return state
        }
    }

    const [state4A, dispatchA ] = useReducer(reducer, radio4A)
    const [state4B, dispatchB ] = useReducer(reducer, radio4B)
    const [state4C, dispatchC ] = useReducer(reducer, radio4C)

    

    
    useEffect(()=>{
        if(state4A){
            if( Object.keys(state4A).length === data.que4a.q.length){
                captureQue4aValues.countDispatch({type:'que4a', value:state4A})
                //console.log(state4A)

                // checking state4B
                if(state4B){
                    if(Object.keys(state4B).length === data.que4b.q.length){
                        captureQue4bValues.countDispatch({type:'que4b', value:state4B})
                        //console.log(state4B)

                        // checking state4C
                        if(state4C){
                            if(Object.keys(state4C).length === data.que4c.q.length){
                                captureQue4cValues.countDispatch({type:'que4c', value:state4C})
                                //captureQue4cValues.countDispatch({type:'count', value:5})
                                //console.log(state4C)
                            }
                            //console.log(Object.keys(state4C).length + " " + data.que4c.q.length)
                            //findEmpty(data.que4c.key, data.que4c.q, state4C)
                        }
                    }
                   //console.log(Object.keys(state4B).length + " " + data.que4b.q.length)
                   //findEmpty(data.que4b.key, data.que4b.q, state4B)
                }
            }
            //console.log(Object.keys(state4A).length + " " + data.que4a.q.length)
            //findEmpty(data.que4a.key, data.que4a.q, state4A)
        }
        
    },[state4A, state4B, state4C])

    useEffect(() => {if(state4A){ findEmpty(data.que4a.key, data.que4a.q, state4A) }},[ state4A ])
    useEffect(() => {if(state4B){ findEmpty(data.que4b.key, data.que4b.q, state4B) }},[ state4B ])
    useEffect(() => {if(state4C){ findEmpty(data.que4c.key, data.que4c.q, state4C) }},[ state4C ])


    return (
        <div id="Motivational" className="section">
            <Panel color={"Tomato"} title={data.que4a.sec}>
                
                <h4>{data.que4a.qSec}</h4>
                {/* <QTitles num={data.que4a.des1} dist={data.que4a.des2} inst={data.que4a.des3} /> */}
                <Radio4AValue.Provider value={{countState: state4A, countDispatch: dispatchA}}>
                    <div style={{marginTop: "0px", paddingBottom:"50px"}}>
                        { data.que4a.q.map( res =>
                            <div className="radioInline" id={data.que4a.key + res.A} key={data.que4a.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis"><p>{res.d}</p></div>
                                <div className="selectPanel">
                                    {data.que4a.des4.map( (des, index) => 

                                        <Radio5 key={data.que4a.key + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que4a.key} 
                                            index={index}
                                            len={data.que4a.q.length}
                                        />
                                    )}
                                </div>    
                        </div>
                        )}
                    </div>
                </Radio4AValue.Provider>

                <h4>{data.que4b.qSec}</h4>
                <QTitles num={data.que4b.des1} dist={data.que4b.des2} inst={data.que4b.des3} />
                <Radio4BValue.Provider value={{countState: state4B, countDispatch: dispatchB}}>
                    <div style={{marginTop: "0px", paddingBottom:"50px"}}>
                        { data.que4b.q.map( res =>
                            <div className="radioInline4c" id={data.que4b.key + res.A} key={data.que4b.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis" ><p>{res.d}</p></div>
                                <div className="selectPanel4c" >
                                    {data.que4b.des4.map( (des, index) => 

                                        <Radio5 key={data.que4b.key + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que4b.key} 
                                            index={index}
                                            len={data.que4b.q.length}
                                        />
                                    )}
                                </div>    
                        </div>
                        )}
                    </div>
                </Radio4BValue.Provider>

                <h4>{data.que4c.qSec}</h4>
                {/* <QTitles num={data.que4c.des1} dist={data.que4c.des2} inst={data.que4c.des3} /> */}
                <Radio4CValue.Provider value={{countState: state4C, countDispatch: dispatchC}}>
                    <div style={{marginTop: "0px", paddingBottom:"50px"}}>
                        { data.que4c.q.map( res =>
                            <div className="radioInline4c" id={data.que4c.key + res.A} key={data.que4c.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis"><p>{res.d}</p></div>
                                <div className="selectPanel4c" >
                                    {data.que4c.des4.map( (des, index) => 

                                        <Radio5 key={data.que4c.key + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que4c.key} 
                                            index={index}
                                            len={data.que4c.q.length}
                                        />
                                    )}
                                </div>
                                <div className="selectPanel4c">
                                {res.opt.map(resp => 
                                    <div className={resp.slot} key = {resp.slot}>
                                        
                                        <span>{resp.opt}</span>
                                        
                                    </div>)}
                                </div>    
                        </div>
                        )}
                    </div>
                </Radio4CValue.Provider>
           </Panel>
        </div>
    )
}

export default Motivational
