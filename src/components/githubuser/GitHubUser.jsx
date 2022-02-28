import React, {useState, useEffect} from 'react';


function GitHubUser(props) {

    const [data, setData] = useState(null);

    const getData = () => {
        let url = 'https://api.github.com/users/moonhighway';
        fetch(url)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    };

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <h1>This component will display details of a github account.</h1>
            <div>{JSON.stringify(data)}</div>  
        </>
    );
}

export default GitHubUser;