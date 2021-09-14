import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

const FullPost = (props) => {

    const deletePost = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8088/posts/${id}`)
            .then(
                console.log("Success")
            )
            .catch(err => console.log(err))
    }

    let post = <p>Please select a Post!</p>;
    if (props.id != null) {
        post = (
            <div className="FullPost">
                <h1>{props.title}</h1>
                <p>{props.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={() => { deletePost(props.id) }}>Delete</button>
                </div>
            </div>
        );
    }


    return post;
}

export default FullPost;