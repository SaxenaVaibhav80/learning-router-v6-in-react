import { useLocation } from "react-router-dom"
function   OtherPage()
{
    const location = useLocation()

    // applying ternary operator just for  learning --->

    location==6 ? <h1>hello</h1>:<h1>heelo2</h1>
    return (
        <>
            <h1>hello this is other page with id = {location.state.my_id}</h1>
          
        </>
    )
}

export default OtherPage