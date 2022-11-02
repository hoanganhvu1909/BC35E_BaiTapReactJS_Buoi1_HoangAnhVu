import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';


// CSS
import './assets/style.css'
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <Header/>
        <Banner/>
        <Products/>
        <Footer/>
    </div>
)