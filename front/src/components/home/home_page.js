import React from 'react';
import MainSlider from "./components/slider-section";
import AboutSection from "./components/about-section";
import ProductsSection from "./components/products-section";
import SubscribeSection from "./components/subscribe-section";
import PartnersSection from "./components/partners-section";

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <AboutSection/>
                <ProductsSection/>
                <SubscribeSection/>
                <PartnersSection/>
            </div>
        );
    }
}