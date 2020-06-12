import * as React from 'react';
import { Link } from 'react-router-dom';

interface IHomeProps {
    basepath: string;
}

const Home: React.FC<IHomeProps> = props => {
    const basepath = props.basepath;
    return (
        <>
            <h1>Case management</h1>
            <Link to={`${basepath}/create`}>Create a new vote</Link>
            <Link to={`${basepath}/list`}>See all votes</Link>
        </>
    )
};

export default Home;
