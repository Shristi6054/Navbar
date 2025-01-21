import './App.css';
import { BrowserRouter as Router, Link, Routes ,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <div className='Nav-header'>
          <div className='App-logo'>
            <h1>Logo</h1>
          </div>
          <nav className='Navbar'>
            <ul className='nav-links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/gallery' Component={Gallery}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>

        <div className='footer'>
          <div className='address'>
            <h1>Contact us</h1>
            <p>Email : shristimahato6054@gmail.com</p>
            <p>Phone : +977 9817538939</p>
            <p>Address : Kathmandu, putalisadak</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
