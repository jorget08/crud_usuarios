import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory  } from 'react-router-dom';
import { getUserDetail, deleteUser } from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';


const UserDetail = (props) => {

    const {id} = useParams()
    const user = useSelector(state => state.userDetail)
    const history = useHistory();
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getUserDetail(id))
    }, [dispatch, id])

    function handleDelete(id){
        dispatch(deleteUser(id))
        history.push("/home");
    }

    return (
        <div className='RecipeDetail'>
            <NavBar></NavBar>
            <h1>User Detail</h1>
            <br/>
            {user.name ? 

                <div className='detail'>
                    
                    <div className='detailIMG'>
                        <div className='detailGrid'>
                        <h4>{user.name}</h4>
                        <img src={user?.avatar} alt={user.name} />
                        </div>
                        <div>
                        
                        <p> <strong>Username: </strong>{user.username}</p>
                        <p> <strong>Email: </strong> {user.email}</p>
                        <p> <strong>Website: </strong>{user.website}</p>
                        <p> <strong>Phone: </strong>{user.phone}</p>
                        <div>
                            <h4> <strong>Address</strong></h4>
                            <p><strong>City: </strong>{user.address.city}</p>
                            <p><strong>Suite: </strong>{user.address.suite}</p>
                            <p><strong>Street: </strong>{user.address.street}</p>
                            <p><strong>Zip code: </strong>{user.address.zipcode}</p>
                            <div>
                                <h5><strong>Geo</strong></h5>
                                <p><strong>Latitude: </strong>{user.address.geo.lat}</p>
                                <p><strong>Longitude: </strong>{user.address.geo.lng}</p>
                            </div>
                            <div>
                                <h4><strong>Company</strong></h4>
                                <p><strong>Bs: </strong>{user.company.bs}</p>
                                <p><strong>Name: </strong>{user.company.name}</p>
                                <p><strong>Catch Phrase: </strong>{user.company.catchPhrase}</p>
                            </div>
                        </div>
                        <div>
                        <Link to={`/update/${user.id}`}>
                            <div>
                                <button>Update User</button>
                            </div>
                        </Link>
                            <div>
                                <button onClick={() => handleDelete(user.id)}>Delete User</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
                : 
                <h1>Loading...</h1>
            }
        </div>
    )//.join(", ")
}

export default UserDetail;