import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions';
import UserCard from '../UserCard/UserCard';
import Paginate from '../Paginate/Paginate';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import CardGroup from 'react-bootstrap/CardGroup';


// import loading from '../../img/Loading.gif'
// import noFood from '../../img/noFood.gif'


const Home = () => {

    //states
    const users = useSelector(state => state.users)
    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage] = useState(5);

    //pagination
    const indexLastUser = currentPage * userPerPage
    const indexFirstUser = indexLastUser - userPerPage
    const currentUser = users.slice(indexFirstUser, indexLastUser)

    const dispatch = useDispatch()

    const [orden, setOrden] = useState('')
    const [orden2, setOrden2] = useState('')

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    

    //change page
    const paginat = (pageNumber) => setCurrentPage(pageNumber)
    
    return (
        <div>
            
            <NavBar></NavBar>
            
            <div className='homeTitle'>
            <h1>Users Crud</h1>
            <br/>
            <h2>All our Users</h2>
            <br />
            </div>
            
            <CardGroup style={{ justifyContent:"space-around" }}>
            {currentUser[0] === 'No existe esa receta' ? 
            <div className='div-loading'>
                <h1>There are no users with that name</h1>
            </div> 
            : 
            
            currentUser[0] ? currentUser.map(e => {
                return <UserCard
                key = {e.id}
                id = {e.id}
                name = {e.name}
                avatar = {e.avatar}
                username = {e.username}
                phone = {e.phone}
                website =  {e.website}/>
            }):
            <div className='div-loading'>
                <h1>Loading...</h1>
            </div>
            }
            </CardGroup>
            <br />
            <Paginate recipePerPage={userPerPage} totalRecipes={users.length} paginat={paginat}/>
        </div>
    )
}

export default Home;