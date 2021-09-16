import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { APIConfig } from '../../Store/APIConfig';

import './NewPost.css';

const EditPost = (props) => {
    const APIS = useContext(APIConfig);
    const postAPI = APIS.postAPI;
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
    

    const [postCall, setPostCall] = useState({});
    const [renderedId, setRenderedId] = useState(null); // remove this one

    useEffect(() => {
        setRenderedId(props.match.params.id);
    }, []);

    useEffect(() => {
        if (renderedId !== props.match.params.id) {
            axios(postAPI + props.match.params.id, { headers })
                .then(response => {
                    setPostCall(response.data);
                    setRenderedId(props.match.params.id);
                    console.log('This wont get called again ');
                })
        }

    }, [props]);
    const newPostForm = useRef(
        
   );
    const addNewPost = () => {
        const form = newPostForm.current
        const data = { id:form['id'].value, title: form['title'].value, content: form['content'].value, author: form['author'].value };
        const putApi = postAPI+form['id'].value;
        console.log(putApi)
        axios.put(putApi, data)
            .then(data => {
                console.log("Success", data);
                props.history.push('/');
            }
            )
            .catch(err => console.log(err))
    }

    console.log(postCall)
    return (
        <div className="NewPost">
            <form  ref={newPostForm}>
                <h1>Update a Post</h1>
                <input type="hidden" label={'id'} name={'id'} defaultValue={postCall.id}/>
                <label>Title</label>
                <input type="text" label={'title'} name={'title'} defaultValue={postCall.title}/>
                <label>Content</label>
                <textarea rows="4" label={'content'} name={'content'}  defaultValue={postCall.content}/>
                <label>Author</label>
                <select label={'author'} name={'author'} defaultValue={postCall.author}>
                    <option value="Dean">Dean</option>
                    <option value="Zaineh">Zaineh</option>
                    <option value="Yasmeen">Yasmeen</option>
                </select>

            </form>
            <button onClick={addNewPost} >Update Post</button>
        </div>
    );
}

export default EditPost;