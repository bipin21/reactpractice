import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {

    return (
        <div className="header">

            <div className="menus">
                <nav>
                    <ul>
                        <li>
                            <Link to="/new-post">Add post</Link>
                        </li>                        
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link to="/status">Status</Link>
                        </li>
                        <li>
                            <Link to="/memos">Memo/Callback</Link>
                        </li>
                        <li>
                            <Link to="/reducers">Reducers</Link>
                        </li>
                        <li>
                            <Link to="/followings">Following</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>

        </div>
    );
}

export default Header;