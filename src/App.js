import './App.css';
import './info.js';
import Info from './info.js';
import Footer from './footer.js';
import Interests from './interests.js';
import About from './about.js';

function App() {
  return (
    // <div className='container'>
      <div className='main'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    // </div>
  );
}

export default App;
