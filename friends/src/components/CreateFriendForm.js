import React, {useState} from 'react';
import { axiosWithAuth } from '../axiosWithAuth';

const CreateFriendForm = props => {
    const [friend, setFriend] = useState({});

    const handleChange = e => {
        setFriend({
                ...friend,
                [e.target.name]: e.target.value
            }
        );
    }

    const createFriend = () => {
        friend.id    = Date.now();
        friend.age   = 30;
        friend.email = `${friend.name}@email.com`;
        axiosWithAuth().post('http://localhost:5000/api/friends', friend)
            .then(() => {
                props.history.push('/dashboard');
            })
    }

    return (
        <div>
            <label> Friends Name </label>
            <input name='name' type='text' value={friend.name} onChange={handleChange} />
            <button onClick={createFriend}> Create Friend </button>
        </div>
    );
}

export default CreateFriendForm;
