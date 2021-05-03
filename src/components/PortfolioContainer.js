import React, { useState } from 'react';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Resume from './Resume';

function PortfolioContainer() {
    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            {/* Pass the state value and the setter as props to NavTabs */}
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Call the renderPage function passing in the currentPage */}x```
            <hr></hr>
            <div className="page-container">{renderPage(currentPage)}</div>
            <div><Footer /></div>
        </div>
    );
}

export default PortfolioContainer;