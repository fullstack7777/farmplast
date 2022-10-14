import React from 'react';
import MainSlider from "./components/slider-section";
import AboutSection from "./components/about-section";
import ProductsSection from "./components/products-section";
import SubscribeSection from "./components/subscribe-section";
import PartnersSection from "./components/partners-section";
import BenefitSection from "./components/benefit-section";
import ImportSection from "./components/import-section";
import ImportSection2 from "./components/import-section-2";
export class HomePage extends React.Component {
    componentDidMount() {
        document.title = 'Фармпласт - Главная';
    }

    render() {


        // var expire = new Date();
        // expire.setHours(expire.getHours() + 24);
        // var cookies = document.cookie.split(";");
        // for(var i=0; i<cookies.length; i++){
        //
        //     var parts = cookies[i].split("="),
        //         session = parts[0],
        //         value = parts[1];
        //     document.write(session + "=" +  value + expire.toUTCString()+ ";");
        // }

        return (
            <div>
                <MainSlider/>
                <AboutSection/>
                <ProductsSection/>
                <BenefitSection/>
                <ImportSection/>
                <ImportSection2/>
                <SubscribeSection/>
                <PartnersSection/>
            </div>
        );
    }
}