import React,{useState, useReducer, useEffect, useContext} from 'react'

import data from '../../../data.json'
import { getResponce } from '../../../App'
import img from '../../../manoj.png'

function Welcome() {
    const captureDemoValues = useContext(getResponce)

    const [user, setUser] = useState()

    const reducer = (state, action)=>{
        switch(action.type){
            case 'demo':
                return {...state, [action.name]:action.value}
            case 'default' :
                return state    
        }
    }

    const [userNew, dispatch] = useReducer(reducer, user)
    
    const radioClicked = (n, d) => {
        let regexp
        if( n === "mobile"){
            
            regexp = /[^0-9]/g
            d = d.replace(regexp, "")
            console.log(d)
            if(d.length === 10){
                dispatch({type:'demo', value:d, name: n})
            }
            
        }else if( n === "name"){
            regexp = /[^a-z ]/gi
            d = d.replace(regexp, "")
            let userN = d.split(" ")
            console.log(userN[0])
            if( userN[0].length >= 3 && d.length >= 5 ){
                dispatch({type:'demo', value:d, name: n})
            }
            
        }
        
        if(userNew){
            
            if(Object.keys(userNew) != "sal"){
            dispatch({type:'demo', value:"Mr", name: "sal"})
            }
           
        }
        
    }
    useEffect(()=>{
        if(userNew){
            if(Object.keys(userNew).length === 3){
                captureDemoValues.countDispatch({type:'demo', value:userNew})
                //captureDemoValues.countDispatch({type:'count', value:1})
                //post(userNew)
            }
            //console.log(Object.keys(userNew).length )
        }
    },[userNew])
    
    console.log( userNew )
    return (
        <div id="Welcome" className="section">
            
            <div id="myCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li> 
                </ol>
                
                <div className="carousel-inner">
                    <div className="item active intro">
                        
                        <p>Hi friends, I am Manoj Panasare PhD student at Sydenham Institute of Management Studies, Research & Entrepreneurship Education (SIMSREE), Mumbai. The research topic is <span>A STUDY OF IMPACT OF CORPORATE SOCIAL RESPONSIBILITY ON STAKEHOLDERS IN INDIAN HOSPITALITY SECTOR.</span></p>
                        <p>Corporate social responsibility is a concept with various understandings, definitions, and practices. It is understood and implemented differs significantly for corporations across the world and individual countries. Moreover, corporate social responsibility is a comprehensive concept that addresses many topics such as human rights, corporate governance, health and safety, environmental effects, working conditions, and economic development. Whatever the definition is, the purpose of corporate social responsibility is to drive change towards sustainability.</p>
                        <p>For this survey feedback, I will be collecting only the data that you are submitting as answers. I have not set any cookies or any other backend process to collect any data besides your response. Also, your feedback is confidential and stays with me as a support for my research work. Appreciate your support for my research work. After submitting a salutation, you are requested to press the start button, your name, and your ten-digit mobile number. While submitting your feedback, you are allowed to change it until you have completed and saved it finally. Once you have submitted the response, no one can see your input except me.</p>
                        
                    </div>
                    <div className="item intro">  
                        <div className="profilepic"><img src={img}  width="100%" height="100%"/></div>  
                        <h4><span>Brief Profile: Manoj Panasare</span></h4>
                        <p><span>Educational background: </span>Masters in Financial Management from Prin. L. N. Welingkar Institute of Management, Development & Research, Masters in Commerce & Bachelor of Commerce from Mumbai University, Associate member of the Institute of Company Secretaries of India (ICSI).</p> 
                        <p><span>Professional Experience: </span>Corporate experience of 27 years, mainly with the Indian Hotels Company Limited, a Tata Enterprise. Experience includes hospitality, retail, and services. Possess a mix of multi-locational corporate and operational experience in India and abroad.</p>
                        <p><span>Email: manoj.panasare@gmail.com</span></p>
                    </div>
                </div>
            </div>
            <form  id="demo" className="form-inline">
                <h5 style={{margin: "5px, auto", textAlign:"center"}}>Start with your full name and mobile number.</h5>
                <div className="form-group">
                
                <select id="sal" className="form-control" name="sal" defaultValue="Mr" onChange={e=>radioClicked( e.target.name, e.target.value)}>
                   
                    {data.que0.salutation.Salutation.map(res => <option value={res} key={res}>{res}</option>)}
                
                </select>
                    
                </div>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="name" onChange={e=>radioClicked( data.que0.name.name, e.target.value)} placeholder={data.que0.name.label} size="25"></input>
                </div>            
                <div className="form-group">
                    
                    <input type="text" className="form-control"  id="mobile" onChange={e=>radioClicked( data.que0.mobile.name, e.target.value)} placeholder={data.que0.mobile.label} min="10" max="10" maxLength="10" size="12"></input>
                </div>
            </form>                
        
        </div>
    )
}

export default Welcome
