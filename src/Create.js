import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('enamul');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/');
        })

        console.log(blog);
    }
    return ( 
        <div className="blog-create-page">
            <h2>Add New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Description: </label>
                <textarea 
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                   <option value="enamul">Enamul</option> 
                   <option value="kabir">Kabir</option> 
                </select>
                <button type="submit">Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;