import * as React from 'react';

const Votes = () => {
    const [cases, setCases] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch('http://localhost:3031/data')
            .then(response => response.json())
            .then(cases => {
                setCases(cases);
                setError(null);
            })
            .catch(error => {
                console.error(error);
                setCases([]);
                setError(error)
            });
    }, []);

    return (
        <>
            <h1>List of all cases</h1>
            {!error && cases.map(data => <li>{data.name}</li>)}
            {error && `An error has occured while fetching data: ${error}`}
        </>
    )
};

export default Votes;
