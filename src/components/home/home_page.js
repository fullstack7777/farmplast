import React from 'react';
import MainSlider from "./components/slider-section";
import AboutSection from "./components/about-section";
import CardBlock from "../pages/card";
import SubscribeSection from "./components/subscribe-section";
import PartnersSection from "./components/partners-section";
import Footer from "../../footer";

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <AboutSection/>
                <CardBlock/>
                <SubscribeSection/>
                <PartnersSection/>
                <Footer/>
            </div>
        );
    }
}