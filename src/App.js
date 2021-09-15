import React from 'react';
import {  PostAPI } from './components/APIConfig';

import Blog from './containers/Blog/Blog';


const App = () => {

  return (
    <div className="App">
      <PostAPI.Provider value='http://localhost:8088/posts'>
        <Blog />
      </PostAPI.Provider>
    </div>
  );
}

export default App;
