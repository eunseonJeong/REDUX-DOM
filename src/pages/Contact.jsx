import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Contact() {
    const location = useLocation();

  return (
    <div>Contact
        <Link to='/'> Home으로 이동 </Link>
    </div>
  )
}

export default Contact