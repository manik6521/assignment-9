
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
      <h3>hello</h3>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/about' element={<About />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
