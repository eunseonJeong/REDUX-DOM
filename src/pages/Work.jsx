import React from 'react'
import { useParams } from 'react-router-dom';
import {list} from '../shared/data'


const Work=()=>{
    const params = useParams();
    
    return (
        <p>안녕 여기는 하위페이지야.</p>
    )
}
export default Work;