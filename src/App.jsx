import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Forest1 } from './components/Forest1';
import { Forest2 } from './components/Forest2';
import { Forest3 } from './components/Forest3';
import { Forest4 } from './components/Forest4';
import { Forest5 } from './components/Forest5';
import { Forest6 } from './components/Forest6';
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/forest1' element={<Forest1 className='main-img-container'/>} />
            <Route path='/forest2' element={<Forest2 className='main-img-container'/>} />
            <Route path='/forest3' element={<Forest3 className='main-img-container'/>} />
            <Route path='/forest4' element={<Forest4 className='main-img-container'/>} />
            <Route path='/forest5' element={<Forest5 className='main-img-container'/>} />
            <Route path='/forest6' element={<Forest6 className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
