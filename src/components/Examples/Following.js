import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { APIConfig } from "../../Store/APIConfig";
import { LikedPosts } from "../../Store/LikedPosts";
import Post from "../Post/Post";

const Following = (props) => {
    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;

    const [posts, setPosts] = useState([]);
    const { likedPosts, setLikedPosts } = useContext(LikedPosts);


    function fetchPostsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*',
        }
        axios.get(postAPI, { headers })
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console(error.message);
            })

    }

    useEffect(fetchPostsHandler, []); 

    const rposts = posts.map(post => {
        return (likedPosts.includes(post.id)) ?
         <Link to={props.match.url + '/' + post.id} key={post.id}>
            <Post
                title={post.title}
                author={post.author}
                id={post.id} />
        </Link>
        :
        <div></div>;

    });

    return (
        <div>
            {rposts}
        </div>
    );


}

export default Following;