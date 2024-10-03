import React, {useEffect, useState} from 'react'

export const Page2 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>Page 2</h1>
            <p>This is page 2</p>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <p>Data: {JSON.stringify(data)}</p>}
            <CustomComponent />
        </>
  )
}

const CustomComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <div>
            <input 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder="Field 1" 
            />
            <input 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder="Field 2" 
            />
        </div>
    );
}
