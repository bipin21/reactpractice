import axios from 'axios';
import React, { Component, useContext, useState } from 'react';
import { PostAPI } from '../APIConfig';
import NewPost from '../NewPost/NewPost';

import './FullPost.css';

const FullPost = (props) => {
    const api = useContext(PostAPI);
    const deletePost = (id) => {
        console.log(id)
        axios.delete(`${api}/${id}`)
            .then(response => {
                console.log("Success")
                props.execute()
            }
            )
            .catch(err => console.log(err))
    }
    const [flag, setFlag] = useState(false);

    const handleEdit = () => {
        setFlag(!flag);
        //  <NewPost key={props.id} {...props} />
    }

    let post = <p>Please select a Post!</p>;
    if (props.id != null) {
        post = (
            <div className="FullPost">
                <h1>{props.title}</h1>
                <p>{props.body}</p>
                <div className="Edit">
                    {/* <button className="Edit" onClick={ handleEdit }>Edit</button> */}
                    <button className="Delete" onClick={() => { deletePost(props.id) }}>Delete</button>
                </div>

                <section>
                {/* {flag?   : ''} */}
                </section>
            </div>
        );
    }


    return post;
}

export default FullPost;