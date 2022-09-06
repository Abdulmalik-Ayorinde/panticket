import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Home/HomePage';
import Event from './Event';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/event/:eventId' element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
