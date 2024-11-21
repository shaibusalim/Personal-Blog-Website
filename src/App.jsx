import './App.css'
import Header from './Components/Header'
import ListBLog from './Components/ListBLog'
import NewsLetter from './Pages/NewsLetter'
import Post from './Pages/Post'
import Tags from './Pages/Tags'
import Topics from './Pages/Topics'
import myImge from './assets/img2.jpg'


function App() {
  

  return (
    <>
        <Header/>
        <div className='main-blog'>
          <div className='list-block-section'>
            <section className='intro-section'>
                  <div className='main-intro'>
                        <h1>Hi, I'm <span>Salim Shaibu</span>.<br/>
                              Web Developer
                        </h1>
                        <h2>Specialized in a11y and Core Web Vitals</h2>

                      <div className='intro-button'>
                           <button>Contact Me</button>
                           <button>About Me</button>
                      </div>
                        
                  </div>
                  <div className='intro-image'>
                      <div className='image-container'>
                            <img src={myImge}/>
                      </div>
                  </div>
            </section>
          </div>
          <div className='main-content'>
            <div>
            <ListBLog/>
            </div>
                <aside>
                  <Topics/>
                  <Tags/>
                  <Post/>
                  <NewsLetter/>
                </aside>
          </div>
          
         

        </div>
       
    </>
  )
}

export default App
