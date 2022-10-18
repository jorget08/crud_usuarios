import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginate = ({ recipePerPage, totalRecipes, paginat }) => {

    const pageNumebers = []
    for (let i = 1; i <= Math.ceil(totalRecipes/recipePerPage); i++) {
        pageNumebers.push(i)
    }
  return (
    <div className='paginate'>
        <Pagination style={{display:"flex", justifyContent: "center"}}>{pageNumebers.map(n => {
                return <Pagination.Item key={n} onClick={() => paginat(n)}>
                        {n}
                </Pagination.Item>
            })}</Pagination>
    </div>
  )
}

export default Paginate