import React from 'react';

import BlogList from "./BlogList"

import useFetch from "./useFetch";

const Home = () => {
   const{data:blogs,isPending,isError}=useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            {isError && <h2> {isError}</h2>}
            {isPending && <h2>Loading...</h2>}
            {blogs&& <BlogList blogs={blogs} title="All Blogs!!" />}
        </div>
     );
}
 
export default Home;