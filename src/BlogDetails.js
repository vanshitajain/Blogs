import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} =useParams()
    const {data:blog,isPending,isError}=useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();
    const handleClick =() =>{
        fetch('http://localhost:8000/blogs/' +blog.id,
        {
            method:'DELETE',
        })
        .then(() =>{
            history.push('/');
        })
    }
    return ( 
        <div className="blogDetails">
            
            {isError && <h2> {isError}</h2>}
            {isPending && <h2>Loading...</h2>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By : {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick} >Delete</button>
                </article>
            )}

            
        </div>
     );
}
  
export default BlogDetails;