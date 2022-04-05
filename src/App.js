
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/about' element={<About />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>


      {/* <div>
        <div className="text-container">
          <h2>This is the best laptop in this month</h2>
          <h3>You can buy this laptop. There are lot of features included like touch screen, 360 degree movement, 12gb rem, 500gb SSD also 5 hours battery backup and so on.</h3>
          <button>Live Demo</button>
        </div>
        <div className="img-item">
          <img src="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default App;
