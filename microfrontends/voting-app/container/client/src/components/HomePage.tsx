import * as React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main>
            <div>
                <Link to="/votes">Go to votes</Link> <br />
                <Link to="/nominations">Go to nominations</Link>
            </div>
        </main>
    );
};

export default HomePage;