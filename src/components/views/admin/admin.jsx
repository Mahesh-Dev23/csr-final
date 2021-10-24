import React,{useState, useEffect, useRef} from 'react'

import ReactToPrint from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint'


import get from '../../conrollers/get'

 function Admin() {
     const [allData, setAllData]= useState([])
     const [printContent, setPrintContent] = useState()

     const getAllData = ()=> get().then( res => setAllData( res.data))

     useEffect(()=>{getAllData()},[])

     const componentRef = useRef();
    
    
     

     const printThis = (value) => setPrintContent(value)

     const content = printContent

    return (
        <div id="dashboard">
            <div id="dataresult">
                <p>Total completed surveys : {allData.length}</p>
                {/* <p>What people say...</p>
                <p className="nameTabs" >All</p>
                <p className="nameTabs" >Age</p>
                <p className="nameTabs" >Gender</p>
                <p className="nameTabs" >Religion</p>
                <p className="nameTabs" >Education</p>
                <p className="nameTabs" >Residence</p> */}
                <ReactToPrint
                    trigger={() => <button id="downloads">Download PDF!</button>}
                    content={() => componentRef.current}
                />
                <div >
                    <ComponentToPrint ref={componentRef} content={printContent ? printContent : 1} >
                        
                   </ComponentToPrint>
                </div>
            </div>
            
            <div id="nameList">
                <p>Click name to make pdf</p>
                
                
                {allData ? allData.map(res => <p onClick={()=> printThis(res)}  id={res.id} key={res.id}  className="nameToPdf">{`${res.demo.name}`}</p>): ''}
            

                
            </div>
        </div>
    )
}
export default Admin