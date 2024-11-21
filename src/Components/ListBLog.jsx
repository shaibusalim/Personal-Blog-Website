import React from 'react'
import './ListBlog.css';
import Blogpost from './Blogpost';

 function ListBLog() {
  return (
    <div className='listblock-container'>
        <h2>Latest Blog Post</h2>
        <Blogpost/>
    </div>
  )
}

export default ListBLog;
