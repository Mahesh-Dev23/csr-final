import React,{useEffect, useState} from 'react'
import axios from 'axios'
import get from '../../conrollers/get'

import data from '../../../data.json'
import Que1 from './Que1'
import Que from './Que'

export const ComponentToPrint = React.forwardRef(({content}, ref) =>{
    
    const responce = {
        "demo" : {"salutation": "", "name": "", "mobile":""},
        "que1" : {},
        "que2" : {},
        "que3a":{},
        "que3b" : {},
        "que3c" : {},
        "que3d":{},
        "que4a" : {},
        "que4b" : {},
        "que4c":{},
        "que5a" : {},
        "que5b" : {},
        "que6":{},
        "que7":{},
        "file":{}
      }

    const [oneData, setOneData]= useState()
    const [id, setId] = useState(1)

    const getOne = ()=> get().then( res => setOneData( res.data))

    const getInitial = async (c)=> await axios.get(`http://localhost:5000/responce/${c}`).then( res => setOneData( res.data))
    //getInitial(1) 
    
    
    useEffect(()=>{ getInitial(1)  },[])
    //useEffect(()=>{ getOne(id) },[id])
    console.log(content)
    // useEffect(()=>{ 
    //     if(content >= 1){
    //         getOne(content)
    //     }else{
    //         getOne(1)
    //     }
         
    
    // },[])
     
    //useEffect(()=>{ getOne(id) },[id])
    
    console.log(oneData)
    
    return (
        
            <div ref={ref} id="printView">
                
                
                { 
                    oneData ? 
                    <>  
                        <p>{`Name: ${  oneData.demo.name  }`}</p>
                        <p>{`Mobile: ${oneData.demo.mobile}`}</p>
                        <Que1 que1={data.que1} ans={oneData.que1}/>
                        <Que que={data.que2} ans={oneData.que2}/>
                        <Que que={data.que3a} ans={oneData.que3a}/>
                        <Que que={data.que3b} ans={oneData.que3b}/>
                        <Que que={data.que3c} ans={oneData.que3c}/>
                        <Que que={data.que3d} ans={oneData.que3d}/>
                        <Que que={data.que4a} ans={oneData.que4a}/>
                        <Que que={data.que4b} ans={oneData.que4b}/>
                        <Que que={data.que4c} ans={oneData.que4c}/>
                        <Que que={data.que5a} ans={oneData.que5a}/>
                        <Que que={data.que5b} ans={oneData.que5b}/>
                        <Que que={data.que6} ans={oneData.que6}/>
                        <Que que={data.que7} ans={oneData.que7}/>
                    </>
                    :
                    <>
                        {/* <p>{`Name: ${ oneData.demo.name }`}</p> 
                        <p>{`Mobile: ${oneData.demo.mobile}`}</p>
                        <Que1 que1={oneData.que1}/> */}
                    </>
                }
                   
             
            </div>
        
    )
})
