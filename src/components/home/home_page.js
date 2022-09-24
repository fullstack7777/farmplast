import React from 'react';
import MainSlider from "./components/slider-section";
import AboutSection from "./components/about-section";
import CardBlock from "../pages/card";
import SubscribeSection from "./components/subscribe-section";
import Partners from "../pages/partners";
import PartnersSection from "./components/partners-section";

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <AboutSection/>
                <CardBlock/>
                <SubscribeSection/>
                <PartnersSection/>
                <Partners/>
            </div>
        );
    }
}