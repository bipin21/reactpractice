import React from 'react';
import './Blog.css';
import { APIConfig } from '../../components/APIConfig';
import { Redirect, Route, Switch } from 'react-router';
import Posts from '../Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import Header from '../Header/Header';

const Blog = () => {
    const base = 'http://localhost:8088';
    // 
    return (
        <APIConfig.Provider
            value={
                {
                    postApi: base + '/posts'
                }
            }>
            <div className="Blog">
                <Header />
                <Switch>
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        </APIConfig.Provider>
    );
}


export default Blog;