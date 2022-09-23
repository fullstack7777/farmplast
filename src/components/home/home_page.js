import React from 'react';
import MainSlider from "../components/pages/main_slider";
import Section2 from "../components/pages/section-2";
import CardBlock from "../components/pages/card";
import Email from "../components/pages/email";
import Partners from "../components/pages/partners";

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <Section2/>
                <CardBlock/>
                <Email/>
                <Partners/>
            </div>
        );
    }
}