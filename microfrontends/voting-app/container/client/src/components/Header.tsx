import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">Title</Link>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </header>
    )
};

export default Header;
