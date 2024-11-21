import React from 'react'
import './Post.css'

 function Post() {
  return (
    <div className='post-container'>
          <h2>Let's Talk</h2>
          <div className='post-content'>
              <p>
              Do you want to learn more about how I can help your company overcome problems? Let us have a conversation.
              </p>
              <div className='social-buttons'>
                               
                    <button class="social-btn facebook">
                        <i class="fab fa-facebook-f"></i>
                    </button>

                  
                    <button class="social-btn twitter">
                        <i class="fab fa-twitter"></i>
                    </button>

                    
                    <button class="social-btn discord">
                        <i class="fab fa-discord"></i>
                    </button>
              </div>
          </div>
    </div>
  )
}

export default Post;
