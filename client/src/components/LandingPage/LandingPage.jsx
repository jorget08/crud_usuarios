import React from 'react'
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div style={{width:"100vh", heigth:"100vh"}}>
        <div style={{width:"100px", heigth:"100px", position:"absolute", top:"50%", left:"46%"}}>
            <Link to={`/home`} style={{position:"absolute"}}>
                <button className='home-buttom'>HOME</button>
            </Link>
        </div>
    </div>
  )
}

export default LandingPage