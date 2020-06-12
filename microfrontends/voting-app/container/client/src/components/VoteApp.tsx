import * as React from 'react';
import MicroFrontend from './MicroFrontend';

interface IVoteAppProps {
    history: any;
}

const VoteApp: React.FC<IVoteAppProps> = props => {
    console.log("Laster vote app");
    return (
        <MicroFrontend host="http://localhost:80/" name="VoteApp" history={props.history} />
    )
};

export default VoteApp;
