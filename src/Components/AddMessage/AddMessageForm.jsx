import React, { useState } from 'react';



const AddMessageForm = (props) => {
    const [name, setName] = useState(" ");
    const [post, setPost] = useState(" ");
    
    function handleSubmit(event) {
        event.preventDefault();
        let newMessage = {
            name: name,
            post: post
        };
        console.log(newMessage);
        props.addNewMessageProperty(newMessage)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form group">
            <tr><label>Name</label>
            <input type="name" className='form-control' value={name} onChange={(event)=> setName(event.target.value)} /></tr>
            <tr><label>Post</label>
            <input type="post" className='form-control' value={post} onChange={(event)=> setPost(event.target.value)}/></tr>
            <button type="submit">Create</button>

            </div>
            <div className="form group">

            </div>
        </form>
     );
}

export default AddMessageForm;