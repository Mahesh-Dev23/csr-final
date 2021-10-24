import axios from 'axios'


const get = async (v) => {
//     return await axios.get('http://codesign.in/db.json/responce')
if(v){
    return await axios.get(`http://localhost:5000/responce/${v}`)
}else{
    return await axios.get('http://localhost:5000/responce')
}


    
}

export default get