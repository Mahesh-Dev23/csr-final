import React, {useContext, useState, useEffect, useReducer} from 'react'

import {Radio2Values} from '../home/Loyalty'
import {Radio3AValue} from '../home/Roi'
import {Radio3BValue} from '../home/Roi'
import {Radio3CValue} from '../home/Roi'
import {Radio3DValue} from '../home/Roi'
import {Radio4AValue} from '../home/Motivational'
import {Radio4BValue} from '../home/Motivational'
import {Radio4CValue} from '../home/Motivational'
import {Radio5AValue} from '../home/Leadership'
import {Radio5BValue} from '../home/Leadership'
import {Radio6Values} from '../home/Govt'
import {Radio7Values} from '../home/Prefer'


function Radio5({res, des, keys, index, len}) {

    
    const captureRadio2Values = useContext(Radio2Values)
    const captureRadio3AValues = useContext(Radio3AValue)
    const captureRadio3BValues = useContext(Radio3BValue)
    const captureRadio3CValues = useContext(Radio3CValue)
    const captureRadio3DValues = useContext(Radio3DValue)
    const captureRadio4AValues = useContext(Radio4AValue)
    const captureRadio4BValues = useContext(Radio4BValue)
    const captureRadio4CValues = useContext(Radio4CValue)
    const captureRadio5AValues = useContext(Radio5AValue)
    const captureRadio5BValues = useContext(Radio5BValue)
    const captureRadio6Values = useContext(Radio6Values)
    const captureRadio7Values = useContext(Radio7Values)

    const radioClicked = (n, i, v) =>{
        if(keys === "que2" ){
            captureRadio2Values.countDispatch({type:'que2', value:v, name: n})
        }else if(keys === "que3a" ){
            captureRadio3AValues.countDispatch({type:'que3a', value:v, name: n})
        }else if(keys === "que3b" ){
            captureRadio3BValues.countDispatch({type:'que3b', value:v, name: n})
        }else if(keys === "que3c" ){
            captureRadio3CValues.countDispatch({type:'que3c', value:v, name: n})
        }else if(keys === "que3d" ){
            captureRadio3DValues.countDispatch({type:'que3d', value:v, name: n})
        }else if(keys === "que4a" ){
            captureRadio4AValues.countDispatch({type:'que4a', value:v, name: n})
        }else if(keys === "que4b" ){
            captureRadio4BValues.countDispatch({type:'que4b', value:v, name: n})
        }else if(keys === "que4c" ){
            captureRadio4CValues.countDispatch({type:'que4c', value:v, name: n})
        }else if(keys === "que5a" ){
            captureRadio5AValues.countDispatch({type:'que5a', value:v, name: n})
        }else if(keys === "que5b" ){
            captureRadio5BValues.countDispatch({type:'que5b', value:v, name: n})
        }else if(keys === "que6" ){
            captureRadio6Values.countDispatch({type:'que6', value:v, name: n})
        }else if(keys === "que7" ){
            captureRadio7Values.countDispatch({type:'que7', value:v, name: n})
        }
    }
    
    return ( 
        <label 
            className="radioLabel" 
            key={keys + index + des} 
            //id={keys  + index + des} 
           
        >
            <input 
                type="radio" 
                key={keys + index + res} 
                name={keys + res} 
                // defaultChecked={false} 
                //value={des}
                //id={keys + index + res}
                onClick={ ()=> radioClicked( res, index, des)}
            />
            {des}
        </label>
    )
}

export default React.memo(Radio5)
