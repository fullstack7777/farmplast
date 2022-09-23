import React from 'react';
import MainSlider from "./components/main_slider";
import Section2 from "./components/section-2";
import CardBlock from "../pages/card";
import Email from "../pages/email";
import Partners from "../pages/partners";
import PartnersSection from "./components/partners-section";

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <Section2/>
                <CardBlock/>
                <Email/>
                <PartnersSection/>
                <Partners/>
            </div>
        );
    }
}