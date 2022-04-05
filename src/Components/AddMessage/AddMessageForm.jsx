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
            <tr><label>Name</label>
            <input type=" " value={name} onChange={(event)=> setName(event.target.value)} /></tr>
            <tr><label>Post</label>
            <input type=" " value={post} onChange={(event)=> setPost(event.target.value)}/>
            <button type="submit">Create</button></tr> 
        </form>
     );
}

export default AddMessageForm;