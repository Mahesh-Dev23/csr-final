import React,{useState, useReducer, useEffect, useContext} from 'react'

import Radio5 from '../elements/Radio5'
import {getResponce} from '../../../App'
import Panel from '../elements/panel'
import findEmpty from '../../conrollers/findEmpty'

import data from '../../../data.json'

function Demographic() {

    const captureQue1Values = useContext(getResponce)
    //const getDefaults = useContext(forDefaultValues)
    const [user, setUser] = useState()
    const [rel, setRel] = useState()
    const [courses, setCourses] = useState()
    const [city, setCity] = useState()
    const [city2, setCity2] = useState()
    const [city3, setCity3] = useState()
    const [service, setService] = useState()
    const [ind, setInd] = useState()
    const [objectKeys, setObjectKeys] = useState([])
    const [dataKeys, setDataKeys] = useState([])

    const reducer = (state, action)=>{
        switch(action.type){
            case 'demo':
                return {...state, [action.name]:action.value}
            case 'default' :
                return state    
        }
    }

    const [userNew, dispatch] = useReducer(reducer, user)

    let regexp = /[^a-z]/gi

    const radioClicked = (n, d) => {
        
        
        dispatch({type:'demo', value:d, name: n})
        if(userNew && userNew.education && userNew.education === "Professional Course"){ dispatch({type:'demo', name:"education", value:courses}) }

        if(userNew && userNew.residence && userNew.residence === "Metro"){ dispatch({type:'demo', name:"residence", value:city}) }
        if(userNew && userNew.residence && userNew.residence === "II"){ dispatch({type:'demo', name:"residence", value:city2}) }
        if(userNew && userNew.residence && userNew.residence === "III"){ dispatch({type:'demo', name:"residence", value:city3}) }

        if(userNew && userNew.occupation && userNew.occupation === "If Service, please specify"){ dispatch({type:'demo', name:"occupation", value:service}) }

        if(userNew && userNew.industry && userNew.industry === "Other industry"){ dispatch({type:'demo', name:"industry", value:ind}) }

        if(userNew && userNew.religion && userNew.religion === "Others"){ dispatch({type:'demo', name:"religion", value:rel}) }
    }

    useEffect(()=>{
        if(rel){
         dispatch({type:'demo', name:"religion", value:rel}) }
    },[rel])

    useEffect(()=>{
        if(city){
        dispatch({type:'demo', name:"residence", value:city})} 
    },[city])

    useEffect(()=>{
        if(city2){
       dispatch({type:'demo', name:"residence", value:city2})} 
    },[city2])

    useEffect(()=>{
        if(city3){
         dispatch({type:'demo', name:"residence", value:city3}) }
    },[city3])

    useEffect(()=>{
        if(ind){
         dispatch({type:'demo', name:"industry", value:ind}) }
    },[ind])

    useEffect(()=>{
        if(service){
         dispatch({type:'demo', name:"occupation", value:service}) }
    },[service])

    useEffect(()=>{
        if(courses){
         dispatch({type:'demo', name:"education", value:courses}) }
    },[courses])

    useEffect(()=>{
        if(userNew){
            setObjectKeys(Object.keys(userNew))
            setDataKeys(data.que1.q.map(res => res.name))
            if(userNew.religion && userNew.religion === "Others"){ dispatch({type:'demo', name:"religion", value:rel}) }
            if(Object.keys(userNew).length === data.que1.q.length){
                captureQue1Values.countDispatch({type:'que1', value:userNew})
               // captureQue1Values.countDispatch({type:'count', value:2})
            }
               
        }
        findEmpty(data.que1.key, data.que1.q, userNew)
    },[userNew])
    //console.log( data.que1.q.map(res => res.name) ) //done
    //console.log(userNew) //done
    return (
        <div id="Demographic" className="section">
            <Panel color={"#0F7DC2"} title={data.que1.sec}>
                {data.que1.q.map( res =>
                    <div  key={data.que1.key + res.name}>
                        <label key={data.que1.key + res.label} className="labelDemo">{res.label}</label>
                            <div className="radioInlineDemo" id={data.que1.key + res.name}>
                                {res.des.map(desc => 
                                <label key={data.que1.key + desc}>
                                    <input type="radio" id={res.label} key={res.name} name={res.name}  onClick={ ()=> radioClicked(`${res.name}`,`${desc}`)} />{desc}
                                </label>)}
                                {res.name === "religion" ? <label  ><input type="text" id={res.label} name={res.name} que={data.que1.key} defaultValue={""} onChange={ e => setRel(e.target.value.replace(regexp, ""))} placeholder="please specify" /></label> :
                                res.name === "education" ? <label  ><input type="text" id={res.label} name={res.name} que={data.que1.key} defaultValue={""} onChange={ e => setCourses(e.target.value.replace(regexp, ""))} placeholder="CA/ CS/ CMA etc."/></label> :
                                res.name === "industry" ? <label  ><input type="text" id={res.label} name={res.name} que={data.que1.key} defaultValue={""} onChange={ e => setInd(e.target.value.replace(regexp, ""))} placeholder="please specify"/></label> :
                                res.name === "occupation" ? <label  ><select type="text" id={res.label} name={res.name} que={data.que1.key} defaultValue={"Private Sector"} onChange={ e => setService(e.target.value)} >
                                    <option name={res.name} value="State Government" >State Government</option>
                                    <option name={res.name} value="Central Government" >Central Government</option>
                                    <option name={res.name} value="Government Local bodies" >Government Local bodies</option>
                                    <option name={res.name} value="Private Sector" >Private Sector</option>
                                    </select></label> :
                                res.name === "residence" ? 
                                    <><label  ><input type="radio"  name={res.name} value={"Metro"} que={data.que1.key} onClick={ ()=> radioClicked(`${res.name}`, city ? city :"Metro")} />Metro City <input type="text"  onChange={ e => setCity(e.target.value.replace(regexp, ""))} placeholder="Mumbai/ Delhi/ Bangalore/ Kolkata/ Chennai"/></label>
                                    <label  ><input type="radio"  name={res.name} value={"II"} que={data.que1.key} onClick={ ()=> radioClicked(`${res.name}`, city2 ? city2 :"II")}/>II tier City <input type="text"   onChange={ e => setCity2(e.target.value.replace(regexp, ""))} placeholder="Pune /Cochin/ Jaipur/Lucknow etc."/></label>
                                    <label  ><input type="radio"  name={res.name} value={"III"} que={data.que1.key} onClick={ ()=> radioClicked(`${res.name}`, city3 ? city3 : "III")}/>III tier City <input type="text"   onChange={ e => setCity3(e.target.value.replace(regexp, ""))} placeholder="Coimbatore / Nashik etc."/></label></> :    
                                '' }
                            </div>   
                    </div>
                )}
            </Panel>    
        </div>
    )
}

export default Demographic
