
import './css/App.css';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
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
