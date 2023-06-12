import React from 'react';
import Layout from '../containers/Layout';
import '../styles/global.css';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import MenuClient from '../pages/MenuClient';

const App = () => {
    return (
      
        <BrowserRouter>
        <Layout>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/password-recovery" element={<RecoveryPassword/>} />
            <Route  path="/menu-client"element={<MenuClient/>} />
            <Route  path="*"element={<NotFound/>} />
            
        </Routes>
        </Layout>
        
        </BrowserRouter>
        
    
    );
}

export default App;