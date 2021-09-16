import React, { useState } from 'react';
import './Blog.css';
import { APIConfig } from '../../Store/APIConfig';
import { Redirect, Route, Switch } from 'react-router';
import Posts from '../Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import Header from '../Header/Header';
import { LikedPosts } from '../../Store/LikedPosts';
import StatusForm from '../../components/Form/StatusForm';

const Blog = (props) => {
    const base = 'http://localhost:8088';
    const [likedPosts, setLikedPosts] = useState([]);
    // 
    return (
        <LikedPosts.Provider value={{ likedPosts, setLikedPosts }}>
            <APIConfig.Provider
                value={
                    {
                        postAPI: base + '/posts/'
                    }
                }>
                <div className="Blog">
                    <Header />
                    <Switch>
                        <Route path="/new-post" component={NewPost} />
                        <Route path="/posts" component={Posts} />
                        <Redirect from="/" to="/posts" />
                    </Switch>
                </div>
            </APIConfig.Provider>
        </LikedPosts.Provider>
    );
}


export default Blog;