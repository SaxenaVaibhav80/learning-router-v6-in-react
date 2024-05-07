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

// Note->In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.

export default useGetData 
