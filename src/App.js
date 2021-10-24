import React, {useState, useEffect, useContext, useReducer} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import img from '../src/thanks.png'

import {Link} from 'react-scroll'

import data from './data.json'

import Welcome from "./components/views/home/Welcome";
import Demographic from './components/views/home/Demographic'
import Loyalty from "./components/views/home/Loyalty"
import Roi from './components/views/home/Roi'
import Motivational from './components/views/home/Motivational'
import Leadership from './components/views/home/Leadership'
import Govt from './components/views/home/Govt'
import Prefer from './components/views/home/Prefer'
import Thanks from './components/views/home/Thanks'

import post from './components/conrollers/post'

import Admin from "./components/views/admin/admin";

export const getResponce = React.createContext()

function App() {
  const [count, setCount] = useState(0)
  const [moveNext, setMovenext] = useState(0)



  // initial value for reducer ------------------------------------------
  const responce = {
    "demo" : {"salutation": "Mr."},
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
    "file":{},
    "count":0,
    "movearray":[]
  }

  const [allRes = responce, setAllRes] = useState()

  const reducer = (state= responce , action) =>{
    switch(action.type){
      case 'demo':
        return {...state, "demo":action.value}
      case 'que1':
        return {...state, "que1":action.value}
      case 'que2':
        return {...state, "que2":action.value}
      case 'que3a':
        return {...state, "que3a":action.value}
      case 'que3b':
        return {...state, "que3b":action.value}
      case 'que3c':
        return {...state, "que3c":action.value}
      case 'que3d':
        return {...state, "que3d":action.value}
      case 'que4a':
        return {...state, "que4a":action.value}
      case 'que4b':
        return {...state, "que4b":action.value}
      case 'que4c':
        return {...state, "que4c":action.value}
      case 'que5a':
        return {...state, "que5a":action.value}
      case 'que5b':
        return {...state, "que5b":action.value}    
      case 'que6':
        return {...state, "que6":action.value}
      case 'que7':
        return {...state, "que7":action.value}
      case 'count':
        return {...state, "count":action.value } 
      case 'file':
        return {...state, "file":action.value } 
      case 'moveArray':
        return {...state, "movearray":action.value }              
      case 'default' :
        return state    
    }
  }

  const [newState, dispatch] = useReducer(reducer, allRes)

  // reducer end ---------------------------------------------------


  // page scroll function on Prev, Next buttons
  const pageScroll = (a) =>{
    if(count >= 0 && count <= data.section.length){
      setCount( count + a)
    }else if( count === 0){
      setCount( 1 )
    }else if( count === data.section.length + 1 ){
      setCount( data.section.length -2  )
    }
  }

  
  // forced navigation checking --------------------------------------------
  useEffect(()=>{
    if(count === 0 ){
      setMovenext(0)
      if( Object.keys(newState.demo).length  === Object.keys(data.que0).length ){
        setCount(1)
        setMovenext(1)
      }
    }
    
    if(count === 2 ){
      setMovenext(0)
      if( Object.keys(newState.que1).length  === data.que1.q.length ){
        
        setMovenext(1)
      }
    }
    if(count === 3 ){
      setMovenext(0)
      if( Object.keys(newState.que2).length  === data.que2.q.length ){
        console.log(Object.keys(newState.que2).length + " " + data.que2.q.length)
        setMovenext(1)
      }
    }
    if(count === 4 ){
      setMovenext(0)
      if( Object.keys(newState.que3a).length  === data.que3a.q.length &&
          Object.keys(newState.que3b).length  === data.que3b.q.length &&
          Object.keys(newState.que3c).length  === data.que3c.q.length &&
          Object.keys(newState.que3d).length  === data.que3d.q.length){
        
        setMovenext(1)
      }
    }
    if(count === 5 ){
      setMovenext(0)
      if( Object.keys(newState.que4a).length  === data.que4a.q.length &&
          Object.keys(newState.que4b).length  === data.que4b.q.length &&
          Object.keys(newState.que4c).length  === data.que4c.q.length ){
        setMovenext(1)
      }
    }
    if(count === 6 ){
      setMovenext(0)
      if( Object.keys(newState.que5a).length  === data.que5a.q.length &&
          Object.keys(newState.que5b).length  === data.que5b.q.length ){
        setMovenext(1)
      }
    }
    if(count === 7 ){
      setMovenext(0)
      if( Object.keys(newState.que6).length  === data.que6.q.length ){
        setMovenext(1)
      }
    }
    if(count === 8 ){
      setMovenext(0)
      if( Object.keys(newState.que7).length  === data.que7.q.length ){
        setMovenext(1)
      }
    }
  },[newState, count])

  // submit responce ------------------------------

  const submitResponce = () => {
    post(newState)
  }

  console.log(newState)
  
  console.log(count + " " + moveNext)
  return (
    <div className="App">
      <div>
        <Switch>

          <Route exact path="/git-csr/">
          <getResponce.Provider value={{countState: newState, countDispatch: dispatch}}><div id="main">
              <Welcome />
              <Demographic />
              <Loyalty />
              <Roi />
              <Motivational />
              <Leadership />
              <Govt />
              <Prefer />
              
            </div></ getResponce.Provider >

            
            <div className="section" id="Thanks">
              <div className="profilepic"><img src={img}  width="100%" height="100%" alt="Manoj Profile Image"/></div>
              <h3>Thank you for participating in this survey.</h3>
              <p>Please click "Submit" button to submit the survey!</p>
              <button className="btn btn-primary" onClick={()=>submitResponce()}>Submit</button>
            </div>
            <div className="navigation">
              { count > 1 ?
                <Link className="prev" to={ data.section[count -2 ] } spy={true} smooth={true}  delay={500} onClick={()=>pageScroll(-1)}>prev</Link>
              : ''}
              { count === 1 ?
                  <Link className="next" to={ data.section[count ] } spy={true} smooth={true}  delay={500} onClick={()=>pageScroll(1)}> start</Link> :
                moveNext === 0 ? 
                  <div className="disabledButton">Please submit all answers to move ahead.</div> :
                count < data.section.length ? 
                  <Link className="next" to={ data.section[count ] } spy={true} smooth={true}  delay={500} onClick={()=>pageScroll(1)}> next</Link>
              : ''   }
            </div>
          </Route>

          <Route path="/git-csr/admin">
            <Admin/>
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
