import React from 'react';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Sliders from '../Sliders/Sliders';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Sliders></Sliders>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;