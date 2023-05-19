import React, { useState } from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';
import Contact from "./components/pages/Contact"
import './components/css/style.css'
import Footer from './components/Footer'

const App = () => {
    const [currentPage, setCurrentPage] = useState('');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if(currentPage === 'Contact') {
            return <Contact />;
        }
        return <Portfolio />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
};

export default App;
