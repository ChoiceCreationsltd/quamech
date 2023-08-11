import logo from './logo.svg';
import './App.css';
import Nav from './HeadersFooters/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import Footer from './HeadersFooters/Footer';

function App() {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <BrowserRouter>
          <div className='d-flex justify-content-between flex-column h-100'>
            <Nav />
            <div>
              <Routes>
                <Route path='/' element={<HomePage />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
