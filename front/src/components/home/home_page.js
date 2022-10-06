import React from 'react';
import MainSlider from "./components/slider-section";
import AboutSection from "./components/about-section";
import ProductsSection from "./components/products-section";
import SubscribeSection from "./components/subscribe-section";
import PartnersSection from "./components/partners-section";

export class HomePage extends React.Component {
    componentDidMount() {
        document.title = 'Фармпласт - Главная';
    }

    render() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("session", "0040d80a9cc8dd3b9a19630117");
        urlencoded.append("quantity", "1");
        urlencoded.append("product_id", "83");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://api.farmplst.com/api/newSession", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

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
                <SubscribeSection/>
                <PartnersSection/>
            </div>
        );
    }
}