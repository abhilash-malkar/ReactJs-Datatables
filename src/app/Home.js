import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container mt-3'>
        <h1>Datatables in ReactJS</h1>
        <ol>
            <li>
                <Link className='nav-link' to='/normal-table'>Normal Table</Link>
            </li>
            <li>
                <Link className='nav-link' to='/fetch-table'>Fetch API Table</Link>
            </li>
            <li>
                <Link className='nav-link' to='/custom-table'>Custom features</Link>
            </li>
        </ol>

        
    </div>
  )
}

export default Home
