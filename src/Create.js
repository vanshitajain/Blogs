import React from 'react';

import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title,setTitle] =useState('')
    const [body,setBody] =useState('')
    const [author,setAuthor] =useState('Vanshita')
    const [isPending,setIsPending] =useState(false)
    const history=useHistory();

    const handleSubmit =(e) =>{
        e.preventDefault();
        const blog={title,body,author};
        setIsPending(true)

        fetch('http://localhost:8000/blogs',
        {
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(() =>{
            setIsPending(false)
            history.push('/');
        })

        }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)} />

                <label>Blog Body:</label>
                <textarea type="text" 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)} ></textarea>
                <label>Author</label>
                <select>
                    value={author}
                    onChange={(e) =>setAuthor(e.target.value)}
                    <option value="Vanshita">Vanshita</option>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="jain">Jain</option>
                </select>
                {!isPending && <button>Add Blog</button>} 
                {isPending && <button disabled>Adding Blog....</button>}           
             </form>
        </div>        
     );
}
 
export default Create;