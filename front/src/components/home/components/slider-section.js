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
                    style={{objectFit:"cover", whiteSpace:"pre"}}
                    height="800"
                    width="800"
                    alt='ОБСЛУЖИВАЕМ БОЛЕЕ 500 ПРЕДПРИЯТИЙ - ПЕРЕРАБОТЧИКОВ'
                />

                <Carousel.Caption style={{top:'35%', bottom:'0'}}>
                    <h3 id="slider-text">ОБСЛУЖИВАЕМ БОЛЕЕ 500 ПРЕДПРИЯТИЙ - ПЕРЕРАБОТЧИКОВ</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#benefits">
                <img
                    className="d-block w-100"
                    src="/images/slider/slide2.webp"
                    style={{objectFit:"cover"}}
                    height="800"
                    width="800"
                    alt="ПОИСК ИНДИВИДУАЛЬНОГО ТЕХНОЛОГИЧЕСКОГО РЕШЕНИЯ"
                />
                </a>
                <Carousel.Caption style={{top:'35%',bottom:'0'}}>
                    <h3 id="slider-text">ПОИСК ИНДИВИДУАЛЬНОГО ТЕХНОЛОГИЧЕСКОГО РЕШЕНИЯ</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#import">
                <img
                    className="d-block-modal w-100"
                    src="/images/slider/slide3.webp"
                    style={{objectFit:"cover"}}
                    height="800"
                    width="800"
                    alt="?"
                />
                </a>
                <Carousel.Caption style={{top:'35%',bottom:'0'}}>
                    <h3 id="slider-text-1"></h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slider/slide4.webp"
                    style={{objectFit:"cover"}}
                    height="800"
                    width="800"
                    alt="ДОСТАВКА ПО ВСЕЙ РОССИИ"
                />

                <Carousel.Caption style={{top:'35%',bottom:'0'}}>
                    <h3 id="slider-text-1">ДОСТАВКА ПО ВСЕЙ РОССИИ</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slider/slide5.webp"
                    style={{objectFit:"cover"}}
                    height="800"
                    width="800"
                    alt="НАЙДЕМ ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ"
                />

                <Carousel.Caption style={{top:'35%',bottom:'0'}}>
                    <h3 id="slider-text-1">НАЙДЕМ ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ</h3>
                </Carousel.Caption>
            </Carousel.Item>
            {/*<Carousel.Item>*/}
            {/*    <img*/}
            {/*        className="d-block w-100"*/}
            {/*   НАЙДЕМ ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ     src="/images/slider/slide3.webp"*/}
            {/*        style={{objectFit:"cover"}}*/}
            {/*        height="800"*/}
            {/*        width="800"*/}
            {/*        alt="РАБОТАЕМ С ПЕРЕДОВЫМИ ЗАВОДАМИ ПРОИЗВОДИТЕЛЯМИ"*/}
            {/*    />*/}

            {/*    <Carousel.Caption style={{top:'35%',bottom:'0'}}>*/}
            {/*        <h3 id="slider-text">РАБОТАЕМ С ПЕРЕДОВЫМИ ЗАВОДАМИ ПРОИЗВОДИТЕЛЯМИ</h3>*/}
            {/*    </Carousel.Caption>*/}
            {/*</Carousel.Item>*/}
        </Carousel>
    );
}

export default MainSlider;