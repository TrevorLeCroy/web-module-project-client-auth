import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth';
import Friend from './Friend';
import {Link} from 'react-router-dom';

const Dashboard = props => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data);
            });
    }, []);

    return (
        <div>
            <h1> Welcome to your dashboard </h1>
            <h2> Friends </h2>
            <div>
                {friends.map(friend => {
                    return <Friend friend={friend}/> 
                })}
            </div>
            <div>
                <Link to='/createAfriend'> Create a Friend </Link>
            </div>
        </div>
    )
}


export default Dashboard;