import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center mt-5'>
        <h1>Üdvözöljük a honlapunkon! Válasszon a menüsorból hogy megtekintse az akutálisan kiállított könyveket!</h1>

        <Link to='/scifi'>
            <button className='btn btn-dark m-2'>Sci-Fi</button>
        </Link>
        
        <Link to='/humor'>
            <button className='btn btn-dark m-2'>Humor</button>
        </Link>
    </div>
  )
}

export default Home