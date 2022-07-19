import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { MessageSquare } from 'react-feather';
import './App.css';

import header from './img/placeholder-header.jpg';

function App() {
  return (
    <div className="app">
      <ParallaxProvider>
        <header className="app-header">
          <ParallaxBanner
            className='test' style={{ height: "80vh" }}
            layers={[
              { image: header, speed: -20 },
              {
                children: (<h1>Header text</h1>),
                speed: -15,
                expanded: false
            }]} />
        </header>
      </ParallaxProvider>
      <nav className='app-nav'>
        <a href="">Some</a>
        <a href="">Nav</a>
        <a href="">Could</a>
        <a href="">Be</a>
        <a href="">Here</a>
      </nav>
      <a className='app-comment-float' href="#app-comment-section">
        <MessageSquare size='2em' />
      </a>
      <section className='app-content-section'>
        Content
      </section>
      <section className='app-comment-section' id='app-comment-section'>
        Comments
      </section>
      <footer className='app-footer'>
        Foot
      </footer>

    </div>
  );
}

export default App;
