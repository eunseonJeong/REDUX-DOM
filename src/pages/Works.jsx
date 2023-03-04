import React from 'react'
import { Link } from 'react-router-dom'
import {list} from '../shared/data'

function Works() {

  return (
    <div>Works
        <h3>할일 목록</h3>
            {
                list.map((item)=>{
                    return(
                        <div key={item.id}>
                            <Link to={`/works/${item.id}`}> {item.id} &nbsp; {item.todo} </Link>
                            </div>
                    )
                })
            }
    </div>
  )
}

export default Works