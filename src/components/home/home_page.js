import React from 'react';
import MainSlider from "./components/slider-section";
import AboutSection from "./components/about-section";
import ProductsSection from "./components/products-section";
import SubscribeSection from "./components/subscribe-section";
import PartnersSection from "./components/partners-section";
import Footer from "../base/footer";

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <AboutSection/>
                <ProductsSection/>
                <SubscribeSection/>
                <PartnersSection/>
                <Footer/>
            </div>
        );
    }
}