import { useState } from "react"
import axios from "axios"

function AxiosPost()
{
    const data={fn:"",ln:""}
    const [inputData,setInputdata]=useState(data)
    const handleData=(e)=>
        {   
           setInputdata({...inputData,[e.target.name]:e.target.value})       
           console.log({...inputData,[e.target.name]:e.target.value})
        }
    const handleSubmit=(e)=>
        {
            e.preventDefault();
            axios.post("https://jsonplaceholder.typicode.com/users",inputData).then((response)=>
            {   
                console.log(response)
            })
        }

    return(
        <>
        <label>First name</label>
        <input type="text" name="fn" value={inputData.fn} onChange={handleData}></input>
        <label>Last name</label>
        <input type="text" name="ln" value={inputData.ln} onChange={handleData}></input>
        <button onClick={handleSubmit}>submit</button>
        </>
    
    )
}


// NOTE-->

// setInputdata({
//     ...inputData, // Spread the existing state
//     [name]: value, // Use square brackets to dynamically set the property
//   });

// USE OF SPREAD OPERATOR---->

// const list1=[1,2,3,4]
// const list2=[5,...list1,6]
// console.log(list2)
// VM454:3 (6) [5, 1, 2, 3, 4, 6]

// WITHOUT SPREAD OPERATOR---->

// const list1=[1,2,3,4]
// const list2=[5,list1,6]
// console.log(list2)
// VM591:3 (3) [5, Array(4), 6]


// setInputdata({...inputData,[e.target.name]:e.target.value}) means---->



// Spreading the Existing State: The {...inputData} part uses the spread operator to copy all existing properties from the inputData object into a new object. This preserves the existing state.

// Adding or Updating a Property: The [e.target.name]: e.target.value part within the object creates or updates a property in the new object. The property name is dynamic, determined by the name attribute of the form input that triggered the event. The value is set to e.target.value, which is the value from the input field.

// Creating a New State Object: Combining these two steps, a new object is created with all the properties from inputData and the new or updated property from e.target.name and e.target.value.

// Updating the State: This new object is then passed to setInputdata, which updates the component's state with the new object, triggering a re-render if necessary.

// SUMMARYYYYY(IMPORTANT)---->



// means when we add the object in the new empty object as a shallow copy and try to make a change or update with the key present in the real object will update in the new object and rest of the key with value will remain same as in the real object 

// and when try to add real objcet in the new empty object as a sallow copy and try to add a new key not present in the real object then new key with some value add in the new object
 
export default AxiosPost