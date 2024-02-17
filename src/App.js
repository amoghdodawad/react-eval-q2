import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import BookingForm from './components/BookingForm';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/booking-form' element={<BookingForm />}/>
          <Route path='/confirm-ticket' element={<Display />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
