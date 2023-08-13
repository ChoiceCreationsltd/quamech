import logo from './logo.svg';
import './App.css';
import Nav from './HeadersFooters/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import Footer from './HeadersFooters/Footer';
import About from './Pages/About';
import Contact from './Pages/Conatctus';
import SmoothScroll from './comp/scrolltop';

function App() {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <BrowserRouter>
          <SmoothScroll>
            <div className='d-flex justify-content-between flex-column h-100'>
              <Nav />
              <div>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/About' element={<About />} />
                  <Route path='/Contactus' element={<Contact />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </SmoothScroll>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
