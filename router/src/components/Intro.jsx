import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Hello()
{
    const navigate=useNavigate()
    const id=67
    function sendDataToOtherPage()
    {
        navigate("/OtherPage",{state:{my_id:id}})
    }
    return (
        <>
            <h1>hello everyone its a react router tutorial</h1>
            {/* <a href="/About" target="_parent"><button>Move to page About</button></a> */}
            <Link to="/About">click to know about me</Link><br/>
            <Link to="/contact">click to know my contact</Link><br></br>
            <button onClick={sendDataToOtherPage}>go to other page with id</button>

            <h1>get the data</h1><br></br>
            <Link  to="/GetData">click to det data from api</Link><br></br>
            <Link to="/AxiosPost">click to post something</Link>

         </>
    )
}



export default Hello

// Note---> on clicking button "Move to page About"the page will get render to avoid this we use Link component from react 