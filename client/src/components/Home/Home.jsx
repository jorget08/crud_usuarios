import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions';
import UserCard from '../UserCard/UserCard';
import Paginate from '../Paginate/Paginate';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';

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

    // function handleOrderByName(e){
    //     e.preventDefault()
    //     dispatch(filterByName(e.target.value))
    //     setCurrentPage(1)
    //     setOrden(`Ordenado ${e.target.value}`) //al cambiar un estado local se reenderiza la pag
    //                                            // y ya con eso se actualizan los estados globales
    // }

    // function handleOrderByScore(e){
    //     e.preventDefault()
    //     dispatch(filterByScore(e.target.value))
    //     setCurrentPage(1)
    //     setOrden2(`Ordenado ${e.target.value}`) //al cambiar un estado local se reenderiza la pag
    //                                            // y ya con eso se actualizan los estados globales
    // }

    // function handleFilterByDiet(e){
    //     e.preventDefault()
    //     dispatch(filterByDiet(e.target.value))
    //     setCurrentPage(1)
    // }

    //change page
    const paginat = (pageNumber) => setCurrentPage(pageNumber)
    
    return (
        <div>
            <div className='nav'>
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            </div>
            <div className='homeTitle'>
            <h1>Users Crud</h1>
            <br/>
            <h2>All our Users</h2>
            </div>
                {/* <div className='filterOrder'>
                <select className='sytle-select' onChange={(e) => handleOrderByName(e)}>
                    <option value="" >Alphabetical Order</option>
                    <option value="asc">Ascendent</option>
                    <option value="desc">Descendent</option>
                </select>
                <select className='sytle-select' onChange={(e) => handleOrderByScore(e)}>
                    <option value="">Order by Score</option>
                    <option value="high">High Score</option>
                    <option value="desc">Low Score</option>
                </select>
                <select className='sytle-select' onChange={(e) => handleFilterByDiet(e)}>
                <option value="" >Select Diet</option>
                    {types?.map((e, i) => {
                        return <option key={i} value={e.name}>{e.name}</option>
                    })}
                </select>
                </div> */}

            
            <div className='users'>
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
            </div>
            
            <Paginate recipePerPage={userPerPage} totalRecipes={users.length} paginat={paginat} />
        </div>
    )
}

export default Home;