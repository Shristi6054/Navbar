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
            <p>Email : shristimahato6054@gmail.com
            <br/>Phone : +977 9817538939
            <br/>Address : Kathmandu, putalisadak</p>
          </div>
          <div className='about'>
            <h1>About Us</h1>
            <p>We are a team dedicated to providing the best products <br/>and services to our customers.</p>
          </div>
          <div className='quick-links'>
            <h1>Quick Links</h1>
            <ul>
              <li><Link to ='/'>Home</Link></li>
              <li><Link to ='/about'>About</Link></li>
              <li><Link to = '/gallery'>Gallery</Link></li>
              <li><Link to = '/contact'>Contact</Link></li>
            </ul>
          </div>
          <div className='social-icons'>
            <h1>Social Platforms</h1>
            <div className='facebook'>
              <p>facebook</p>
            </div>
            <div className='twitter'>
              <p>Twitter</p>
            </div>
            <div className='youtube'>
              <p>Youtube</p>
            </div>
            <div className='insta'>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
