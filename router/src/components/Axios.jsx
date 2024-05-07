import axios from 'axios'
import { useEffect,useState } from 'react'

function  useGetData(){
   const [userData,setData]=useState([])
    useEffect(()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((result)=>
            {
                setData(result.data)
    
            })
    },[])

    return(
       userData.map((data)=>
    {
        return(
            <div>{data.name}</div>
        )
    })
    )
}
export default useGetData 
