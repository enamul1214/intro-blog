import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home-page">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

            {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />} */}

            {/* Show another blogs with filter method */}
            {/* <BlogList blogs={blogs.filter( (blog) => blog.author === 'enamul')} title="Enamul's Blogs" /> */}

            {/* <h1>Home page</h1> */}
            {/* <p style={{margin: '20px 0'}}>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button> */}

            {/* Invoke a anonimus function and pass parentheses */}
            {/* <button onClick={(e) => handleClickAgain('enamul', e)}>Click Me Again</button> */}
        </div>
     );
}
 
export default Home;