import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
       <nav className="navbar">
           <h1>The Blogs</h1>
           <div className="links">
               <Link to="/">Home</Link>
               <Link to="/create">Add Blog</Link>
           </div>
       </nav>
    );
}
 
export default Navbar;