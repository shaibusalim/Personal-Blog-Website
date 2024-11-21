import React from 'react'
import './Topic.css'
import '@fortawesome/fontawesome-free/css/all.min.css';




 function Topics() {
  return (
    <div className='topics-container'>
          <h2>Topics</h2>
      <div className='topic-content'>   
            <div>
            <i class="fas fa-database"></i>Database
            </div>
            <div>
            <i class="fab fa-accessible-icon"></i>Accessibility
            </div>
            <div>
            <i class="fas fa-rocket"></i> Web Performance
            </div>
      </div>

    </div>
  )
}

export default Topics;
