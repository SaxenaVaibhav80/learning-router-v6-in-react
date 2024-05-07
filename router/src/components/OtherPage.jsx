import { useLocation } from "react-router-dom"
function   OtherPage()
{
    const location = useLocation()
    console.log(location.state)
    return (
        <>
            <h1>hello this is other page with id = {location.state.my_id}</h1>
          
        </>
    )
}

export default OtherPage