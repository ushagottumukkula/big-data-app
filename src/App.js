 
import './App.css';
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div className='App' >
      <h1>UI Components</h1>
      
      <nav>
        <ul>
          <li>
            <Link to="/">APP</Link>
          </li>
          <li>
            <Link to="/infinitescroll">Infinite Scrolling</Link>
          </li>
          
        </ul>
      </nav>
      
    </div>
  );
}

export default App;
