import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => (
    <div>
      <h1>404 Error!</h1>
      <h3>Your request could not be found.</h3>
      <Link to='/users' className='button'>
        <div>GO BACK HOME</div>
      </Link>
    </div>
)

export default Page404
