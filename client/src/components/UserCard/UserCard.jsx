import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';


const UserCard = ({id, name, username, avatar, phone, website}) => {
    return(
        
                <Card.Link class="card-link" href={`/users/${id}`} style={{textDecoration:"none"}}>
                    <Card style={{ width: '18rem', alignItems:"center"}}>
                    <Card.Img variant="top" src={avatar} style={{ width: '7rem' }}/>
                        
                        <Card.Body style={{color:"black"}}>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <strong>Username: </strong> {username}
                            </Card.Text>
                            <Card.Text>
                                <strong>Phone: </strong>{phone}
                            </Card.Text>
                            <Card.Text>
                                <strong>Website: </strong>{website}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Card.Link>
    )
}


export default UserCard;