import React from 'react'
import './NewsLetter.css';

function NewsLetter() {
  return (
    <div className='news-container'>
          <h2>NewsLetter</h2>
          <div className='news-content'>
              <p>
             Subscribe to our newsletter to be among the first to keep up with the latest updates.
              </p>
              <div className='email-address'>
                <input type='email' placeholder='Email Address'/>
              </div>
              <button>Subscribe</button>
          </div>
    </div>
  )
}

export default NewsLetter;
