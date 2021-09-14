import React, { useState } from 'react';
import { useEffect } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';
import post from '../../components/Post/Post';

const Blog = () => {

    const [posts, setPosts] = useState([]);

    const [selectedId, setSelectedId] = useState(null);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('http://localhost:8088/posts')
            .then(response => {
                const sposts = response.data.slice(0, 5);  // This will get them but take the first 5 then you would have to change the response.data i nthe setPosts
                const updatedPosts = sposts.map(post => {  // This will transform anything before assigning it to the state
                    return {
                        ...post,
                        author: ' Dean'
                    }
                });
                setPosts([...updatedPosts]);
                // setPosts([...response.data]);   // if you dont want to limit
            });
    }, [{ flag }]);

    useEffect(() => { }, [])
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

        <div>
            <section className="Posts">
                {rposts}
            </section>
            <section>
                <FullPost
                    id={selectedId}
                    title={{ ...posts[selectedId - 1] }.title}
                    body={{ ...posts[selectedId - 1] }.body}
                />

            </section>
            <section>
                <NewPost execute={updateFlag} />
            </section>
        </div>
    );
}


export default Blog;