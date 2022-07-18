import logo from './logo.svg';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { MessageSquare } from 'react-feather';
import './App.css';

function App() {
  const color = "#12c12c";

  return (
    <div className="app">
      <ParallaxProvider>
        <header className="app-header">
          <Parallax speed={-10}>
            <img src='https://picsum.photos/600/200?grayscale' alt='placeholder' />
          </Parallax>
        </header>
        <nav className='app-nav'>
          <a href="">Some</a>
          <a href="">Nav</a>
          <a href="">Could</a>
          <a href="">Be</a>
          <a href="">Here</a>
        </nav>
<section>
        <a className='app-comment-float' href="#app-comment-section">
          <MessageSquare size='2em' />
        </a>
        </section>
        <section className='app-content-section'>
          Content
        </section>
        <section id='app-comment-section'>
          Here I am
        </section>
        <footer className='app-footer'>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
      </ParallaxProvider>
    </div>
  );
}

export default App;
