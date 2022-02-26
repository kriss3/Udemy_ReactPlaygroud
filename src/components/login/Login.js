import React, {useState} from 'react';

const Login = (props) =>  {

    const [userName, setUserName] = useState("");
    const [showProfile, setShowProfile] = useState(false);


    return (
        <div>
            <input
                type='text'
                placeholder='User Name...'
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password...'
            />
            <button onClick = {(e) => setShowProfile(true)}  />
            Login
            {showProfile && <h1>{userName}</h1>}
        </div>
    );
}

export default Login;