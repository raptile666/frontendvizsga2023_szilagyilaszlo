import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from './Header';
import Humor from './Humor';
import SciFi from './SciFi';
import Home from './Home';

function App() {

  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/scifi' element={<SciFi />} />
          <Route path='/humor' element={<Humor />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
