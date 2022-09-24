import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MainSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="rev_slider">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="500"
                    style={{objectFit:"cover"}}
                    src="/images/slider/slide1.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>РАБОТАЕМ С ПЕРЕДОВЫМИ КОМПАНИЯМИ</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slider/slide2.webp"
                    style={{objectFit:"cover"}}
                    height="500"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slider/slide3.webp"
                    style={{objectFit:"cover"}}
                    height="500"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MainSlider;