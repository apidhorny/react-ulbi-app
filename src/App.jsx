import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import About from './pages/About';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/posts' element={<Posts />} />
                <Route path='/about' element={<About />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
