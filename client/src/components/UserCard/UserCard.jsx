import React from 'react';
import { Link } from 'react-router-dom';


const UserCard = ({id, name, username, avatar, phone, website}) => {
    return(
        <div className='userCard'>
            
                <Link to={`/users/${id}`}>
                    <div>
                        <img src={avatar} alt={name} />
                        <h4>{name}</h4>
                        <p><strong>Username:</strong> {username}</p>
                        <p><strong>Phone:</strong>{phone}</p>
                        <p><strong>Website:</strong>{website}</p>
                    </div>
                </Link>
        </div>
    )
}


export default UserCard;