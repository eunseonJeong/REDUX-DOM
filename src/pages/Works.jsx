import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Works() {

    // const navugate = useNavigate();
    const location =useLocation();

    // console.log('location',location);

  return (
    <div>Works
            <Link to = '/contact'>contact 페이지로 이동 </Link>
    </div>
  )
}

export default Works