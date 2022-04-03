import React from 'react';

import Carousel  from './HomeCarousel';
import About from './About';

function Home() {
    return(
        <>
            <div className="home-page-container d-flex flex-column justify-content-center align-items-center text-center mx-auto">
                <Carousel />
                <About />
            </div>
        </>
    );
}

export default Home;