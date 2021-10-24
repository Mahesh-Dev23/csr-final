import axios from "axios"

const post = async (section) => {
    if(section){
        return await axios.post('http://localhost:5000/responce', section)
        //return await axios.post('http://codesign.in/db.json/responce', section)
    }
    
    
}

export default post