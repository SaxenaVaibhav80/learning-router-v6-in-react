import { Link } from "react-router-dom"

function Hello()
{
    return (
        <>
            <h1>hello everyone its a react router tutorial</h1>
            {/* <a href="/About" target="_parent"><button>Move to page About</button></a> */}
            <Link to="/About">click to know about me</Link>

         </>
    )
}



export default Hello

// Note---> on clicking button "Move to page About"the page will get render to avoid this we use Link component from react 