import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MainSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, _) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="rev_slider">


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slider/slide1.webp"
                    style={{objectFit:"cover"}}
                    height="550"
                    alt="НАШ ГЛАВНЫЙ ПОСТАВЩИК"
                />

                <Carousel.Caption style={{top:'35%', bottom:'0'}}>
                    <h3 style={{'font-size':'56pt', textAlign:'start'}}>НАШ ГЛАВНЫЙ ПОСТАВЩИК</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slider/slide2.webp"
                    style={{objectFit:"cover"}}
                    height="550"
                    alt="ДОСТАВКА ПО ВСЕ РОССИИ"
                />

                <Carousel.Caption style={{top:'35%',bottom:'0'}}>
                    <h3 style={{'font-size':'56pt', textAlign:'start'}}>ДОСТАВКА ПО ВСЕЙ РОССИИ</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slider/slide4.webp"
                    style={{objectFit:"cover"}}
                    height="550"
                    alt="НАЙДЕМ ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ"
                />

                <Carousel.Caption style={{top:'35%',bottom:'0'}}>
                    <h3 style={{'font-size':'56pt', textAlign:'start'}}>НАЙДЕМ ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slider/slide3.webp"
                    style={{objectFit:"cover"}}
                    height="550"
                    alt="РАБОТАЕМ С ПЕРЕДОВЫМИ ЗАВОДАМИ ПРОИЗВОДИТЕЛЯМИ"
                />

                <Carousel.Caption style={{top:'35%',bottom:'0'}}>
                    <h3 style={{'font-size':'56pt', textAlign:'start'}}>РАБОТАЕМ С ПЕРЕДОВЫМИ ЗАВОДАМИ ПРОИЗВОДИТЕЛЯМИ</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MainSlider;