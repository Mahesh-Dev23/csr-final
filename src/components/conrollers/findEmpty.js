import React,{useState, useEffect} from 'react'

const FindEmpty = (q, dataArray, clickedArrray) => {

    let newStateArray 
    let foundArray
    
    foundArray = dataArray.map(res => q + res.A)
    //console.log(foundArray)

    if(clickedArrray){
        newStateArray = Object.keys(clickedArrray)
    
 
    //newStateArray.sort()

    
    //console.log(newStateArray)
    
    let result = []
    let i 
    
        if(foundArray.length){
            for(i = 0; i< foundArray.length; i++ ){
                if(foundArray[i] !== q + newStateArray[i]){
                    result.push( foundArray[i])
                }
                
            }
        }
        // red bottom line for first empty element
        if(result.length >= 1){
            document.getElementById(result[0]).style.borderBottom = "1px solid #f7786b"
            document.getElementById(result[0]).style.backgroundColor = "#ffffff"   
            //console.log(document.getElementById(result[0]).style.position)
        }
        if(newStateArray.length){    
            if(newStateArray.length >= 1){
                for(let i = 0; i< newStateArray.length; i++ ){
                    
                    document.getElementById(q + newStateArray[i]).style.borderBottom = "1px solid #55ACEE"
                    document.getElementById(q + newStateArray[i]).style.backgroundColor = "#f8f8f8"
                }
            }
        }
    }else{
        document.getElementById(foundArray[0]).style.borderBottom = "1px solid #f7786b"
        document.getElementById(foundArray[0]).style.backgroundColor = "#ffffff"
    }    
}

export default FindEmpty
