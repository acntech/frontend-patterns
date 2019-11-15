import { useEffect } from 'react';
import * as React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

interface IMicroFrontendProps {
    host: string;
    name: string;
    history: any;
}

interface VotingWindow extends Window {
    [index: string]: any;
}

declare var voteWin: VotingWindow;

const MicroFrontend: React.FC<IMicroFrontendProps> = props => {
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        const { name, host } = props;
        const scriptId = `micro-frontend-script-${name}`;

        if (document.getElementById(scriptId)) {
            renderMicrofrontend();
            return;
        }

        axios(`${host}/asset-manifest.json`)
            .then(rest => {
                const manifest = rest.data;
                const src = `${host}${manifest['main.js']}`;
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                script.src = src;
                script.onload = renderMicrofrontend;
                document.head.appendChild(script);
            });

        return () => {
            const { name } = props;
            const unmountAppName = `unmount${name}`;
            (window as any)[unmountAppName](`${name}-container`);
        }

    }, []);

    const renderMicrofrontend = () => {
        const { name, history } = props;
        const mountAppName = `mount${name}`;
        (window as any)[mountAppName](`${name}-container`, location.pathname, history);
    };

    return (
        <main id={`${props.name}-container`} />
    );
};

export default MicroFrontend;
