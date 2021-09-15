import React, { useState } from 'react';
import { useEffect } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';
import { APIConfig } from '../../components/APIConfig';

const Blog = () => {

    const [posts, setPosts] = useState([]);
    const base = 'http://localhost:8088';
    const [selectedId, setSelectedId] = useState(null);
    const [flag, setFlag] = useState(true);


    function fetchPostsHandler() {
            // axios.get('https://jsonplaceholder.typicode.com/posts')
            axios.get('http://localhost:8088/posts')
                .then(response => {
                    const sposts = response.data.slice(0, 10);  // This will get them but take the first 5 then you would have to change the response.data i nthe setPosts
                    const updatedPosts = sposts.map(post => {  // This will transform anything before assigning it to the state
                        return {
                            ...post,
                            author: ' Dean'
                        }
                    });
                    setPosts([...updatedPosts]);
                    // setPosts([...response.data]);   // if you dont want to limit
                });
    }
    useEffect(fetchPostsHandler, [flag]);
    
    const postSelectedHandler = (id) => {
        setSelectedId(id);
    }

    const updateFlag = () => {
        setFlag(!flag);
    }

    // We can do this rather than this :: <Post title={{...posts[1]}.title} />
    const rposts = posts.map(post => {
        return <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => { postSelectedHandler(post.id) }} />
    });

    // 
    return (
        <APIConfig.Provider
            value={
                {
                    postApi: base + '/posts'
                }
            }>
            <div>
                <section className="Posts">
                    {rposts}
                </section>
                <section>
                    <FullPost
                        id={selectedId}
                        title={{ ...posts[selectedId - 1] }.title}
                        body={{ ...posts[selectedId - 1] }.body}
                        execute={updateFlag}
                    />

                </section>
                <section>
                    <NewPost execute={updateFlag} />
                </section>
            </div>
        </APIConfig.Provider>
    );
}


export default Blog;