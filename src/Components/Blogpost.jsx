import React from 'react'
import './Blogpost.css';
import posts from './Posts';

 function Blogpost() {
  return (
    <div>
        {
            posts.map(post => (
                <div className='blog-post-main'>
                    <div className='blog-post-image'>
                         <img src={post.image}/>
                    </div>
                   
                    <div className='blog-post-content'>
                            <h5>{post.lable}</h5>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <div className='user-details'>
                                     <div className='icon-circle'>
                                     <i className="fas fa-user"></i> 
                                     </div>
                                    
                                    <div>
                                        <p>{post.username}</p>
                                        <p>time</p>
                                    </div>
                                    
                            </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Blogpost;
