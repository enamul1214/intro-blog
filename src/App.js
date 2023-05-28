import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/create' element={<Create/>} />
              <Route path='/blogs/:id' element={<BlogDetails/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
