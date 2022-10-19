import './App.css';
import React from 'react';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Home from './components/Home';

//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

  
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
          </Routes>
        </div>

        <Footer/>
    </div>
    </Router>
  );
}

export default App;
