import React, {useState, useReducer, useContext, useEffect} from 'react'

import Panel from '../elements/panel'
import QTitles from '../elements/qTitles'
import Radio5 from '../elements/Radio5'
import data from '../../../data.json'
import findEmpty from '../../conrollers/findEmpty'

import {getResponce} from '../../../App'

export const Radio3AValue = React.createContext()
export const Radio3BValue = React.createContext()
export const Radio3CValue = React.createContext()
export const Radio3DValue = React.createContext()

function Roi() {

    const captureQue3aValues = useContext(getResponce)
    const captureQue3bValues = useContext(getResponce)
    const captureQue3cValues = useContext(getResponce)
    const captureQue3dValues = useContext(getResponce)

    const [radio3A, setradio3A] = useState([])
    const [radio3B, setradio3B] = useState([])
    const [radio3C, setradio3C] = useState([])
    const [radio3D, setradio3D] = useState([])

    const [radio3, setRadio3] = useState([])

    const reducer = (state, action)=>{
        switch(action.type){
           case 'que3a':
                return {...state, [action.name]:action.value}
            case 'que3b':
                return {...state, [action.name]:action.value}  
            case 'que3c':
                return {...state, [action.name]:action.value}
            case 'que3d':
                return {...state, [action.name]:action.value}      
            case 'default':
                return state
        }
    }

    const [state3A, dispatchA ] = useReducer(reducer, radio3A)
    const [state3B, dispatchB ] = useReducer(reducer, radio3B)
    const [state3C, dispatchC ] = useReducer(reducer, radio3C)
    const [state3D, dispatch ] = useReducer(reducer, radio3D)
    // console.log(state3A )
    // console.log(state3B )
    // console.log(state3C )
    // console.log(state3D )


    useEffect(()=>{
        if(state3A){
            if(Object.keys(state3A).length === data.que3a.q.length ){
                
                
                //console.log(state3A )
                // state3B checking -----------------------------------
                if(state3B){
                    if(Object.keys(state3B).length === data.que3b.q.length ){
                        
                        //console.log(state3B ) 

                        // state3C checking -----------------------------------
                        if(state3C){
                            if(Object.keys(state3C).length === data.que3c.q.length ){
                                
                                //console.log(state3C ) 
                                
                                // state3D checking -----------------------------------
                                if(state3D){
                                    if(Object.keys(state3D).length === data.que3d.q.length ){
                                        captureQue3aValues.countDispatch({type:'que3a', value:state3A})
                                        captureQue3bValues.countDispatch({type:'que3b', value:state3B})
                                        captureQue3cValues.countDispatch({type:'que3c', value:state3C})
                                        captureQue3dValues.countDispatch({type:'que3d', value:state3D})
                                        //console.log(state3D ) 
                                        //captureQue3dValues.countDispatch({type:'count', value:4})
                                    }
                                    //console.log(Object.keys(state3D).length + " " + data3.que3d.q.length)
                                    findEmpty(data.que3d.key, data.que3d.q, state3D)
                                }
                                
        
                                
                            }
                            //console.log(Object.keys(state3C).length + " " + data3.que3d.q.length)
                            findEmpty(data.que3c.key, data.que3c.q, state3C)
                        }
                        


                    }
                    //console.log(Object.keys(state3B).length + " " + data3.que3b.q.length)
                    findEmpty(data.que3b.key, data.que3b.q, state3B)
                }
            }
            //console.log(Object.keys(state3A).length + " " + data3.que3a.q.length)
            findEmpty(data.que3a.key, data.que3a.q, state3A)
        }
    },[state3A, state3B, state3C, state3D])

    

    return (
        <div id="Roi" className="section">
            <Panel color={"MediumSeaGreen"} title={data.que3a.sec}>
                <h4>{data.que3a.qSec}</h4>
                {/* <QTitles num={data.que3a.des1} dist={data.que3a.des2} inst={data.que3a.des3} /> */}
                <Radio3AValue.Provider value={{countState: state3A, countDispatch: dispatchA}}>
                    <div style={{marginTop: "0px", paddingBottom:"50px"}}>
                        { data.que3a.q.map( res =>
                            <div className="radioInline two" id={data.que3a.key + res.A} key={data.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis-scale">{res.L}</div>
                                <div className="selectPanel">
                                    {data.que3a.des4.map( (des, index) => 

                                        <Radio5 key={data.que3a + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que3a.key} 
                                            index={index}
                                            len={data.que3a.q.length}
                                        />
                                    )}
                                </div>
                                <div className="dis-scale" style={{marginLeft:"2%"}}>{res.R}</div>    
                        </div>
                        )}
                    </div>
                </Radio3AValue.Provider>
                <h4>{data.que3b.qSec}</h4>
                {/* <QTitles num={data.que3b.des1} dist={data.que3b.des2} inst={data.que3b.des3} /> */}
                <Radio3BValue.Provider value={{countState: state3B, countDispatch: dispatchB}}>
                    <div style={{marginTop: "0px", paddingBottom:"50px"}}>
                        { data.que3b.q.map( res =>
                            <div className="radioInline two" id={data.que3b.key + res.A} key={data.que3b.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis-scale">{res.L}</div>
                                <div className="selectPanel">
                                    {data.que3b.des4.map( (des, index) => 

                                        <Radio5 key={data.que3b.key + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que3b.key} 
                                            index={index}
                                            len={data.que3b.q.length}
                                        />
                                    )}
                                </div>
                                <div className="dis-scale" style={{marginLeft:"2%"}}>{res.R}</div>    
                        </div>
                        )}
                    </div>
                </Radio3BValue.Provider>
                <h4>{data.que3c.qSec}</h4>
                {/* <QTitles num={data.que3c.des1} dist={data.que3c.des2} inst={data.que3c.des3} /> */}
                <Radio3CValue.Provider value={{countState: state3C, countDispatch: dispatchC}}>
                    <div style={{marginTop: "0px", paddingBottom:"50px"}}>
                        { data.que3c.q.map( res =>
                            <div className="radioInline two" id={data.que3c.key + res.A} key={data.que3c.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis-scale">{res.L}</div>
                                <div className="selectPanel">
                                    {data.que3c.des4.map( (des, index) => 

                                        <Radio5 key={data.que3c.key + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que3c.key} 
                                            index={index}
                                            len={data.que3c.q.length}
                                        />
                                    )}
                                </div>
                                <div className="dis-scale" style={{marginLeft:"2%"}}>{res.R}</div>    
                        </div>
                        )}
                    </div>
                </Radio3CValue.Provider>
                <h4>{data.que3d.qSec}</h4>
                <QTitles num={data.que3d.des1} dist={data.que3d.des2} inst={data.que3d.des3} />
                <Radio3DValue.Provider value={{countState: state3D, countDispatch: dispatch}}>
                    <div style={{marginTop: "0px", paddingBottom:"50px"}}>
                        { data.que3d.q.map( res =>
                            <div className="radioInline" id={data.que3d.key + res.A} key={data.que3d.key + res.A}>
                                <div className="num"><h5>{res.A}</h5></div>
                                <div className="dis"><p>{res.d}</p></div>
                                <div className="selectPanel">
                                    {data.que3d.des4.map( (des, index) => 

                                        <Radio5 key={data.que3d.key + des}
                                            res={res.A} 
                                            des={des} 
                                            keys={data.que3d.key} 
                                            index={index}
                                            len={data.que3d.q.length}
                                        />
                                    )}
                                </div>    
                        </div>
                        )}
                    </div>
                </Radio3DValue.Provider>
           </Panel>
        </div>
    )
}

export default Roi
