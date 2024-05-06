import React from 'react'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container mt-3'>
        <div className="row">
            <div className="col">
                <Link className='btn btn-warning btn-sm' to='/app/pages/normal-table'>Normal Table</Link>
            </div>
            <div className="col">
                <Link className='btn btn-warning btn-sm' to='/app/pages/fetch-table'>Fetch API Table</Link>
            </div>
            <div className="col">
                <Link className='btn btn-warning btn-sm' to='/app/pages/custom-table'>Custom features</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Home
