import React from 'react';
import MainSlider from "./main_slider";
import Section2 from "./section-2";
import Card from "./card";
import Email from "./email";
import Partners from "./partners";

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <Section2/>
                <Card/>
                <Email/>
                <Partners/>
            </div>
        );
    }
}