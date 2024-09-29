import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Art1 } from './assets/components/Art1';
import { Art2 } from './assets/components/Art2';
import { Art3 } from './assets/components/Art3';
import { Art4 } from './assets/components/Art4';
import { Art5 } from './assets/components/Art5';
import { Art6 } from './assets/components/Art6';
import { Navigation } from './assets/components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
      <div>
        <h1 className='text-center my-3'>Gallery Project</h1>
      </div>
      <div className='container d-flex justify-content-center'>
        <Routes>
          <Route path="/Art1" element={<Art1 className='main-img-container' />} />
          <Route path="/Art2" element={<Art2 className='main-img-container' />} />
          <Route path="/Art3" element={<Art3 className='main-img-container' />} />
          <Route path="/Art4" element={<Art4 className='main-img-container' />} />
          <Route path="/Art5" element={<Art5 className='main-img-container' />} />
          <Route path="/Art6" element={<Art6 className='main-img-container' />} />
        </Routes>
        </div>
        <div className='container'>
          <Navigation/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
