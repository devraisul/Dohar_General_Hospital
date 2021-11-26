import React from 'react';
import Contact from './Contact';
import Gallery from './Gallery';
import Hero from './Hero';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Gallery />
            <Contact />
        </div>
    );
};

export default Home;
