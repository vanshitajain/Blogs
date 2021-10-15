import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry!! 404 ERROR</h2>
            <p>
                Page not Found
            </p>
            <Link to="/">Go back To Home</Link>
        </div>
     );
}
 
export default NotFound;