import React from 'react';

function Nav(props) {
    const tabs = ['Portfolio', 'Contact', 'Resume', 'About'];
    return (
        <header className="portfolio-header">
            <div className="developer">
                George Bravo
      </div>
            <ul className="nav">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link-active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>

        </header>

    );
}

export default Nav;