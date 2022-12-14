import React, { useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
function MainSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, _) => {
        setIndex(selectedIndex);
    };

    // const imageUrl = useWindowWidth() >= 650 ? desktopImage1 : mobileImage1;
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="rev_slider">
            <Carousel.Item>
                <img id={'slide-image-1'}
                    className="d-block w-100 image-size"
                    src="/images/slider/slide1.webp"
                    style={{objectFit:"cover", whiteSpace:"pre"}}
                    alt='ОБСЛУЖИВАЕМ БОЛЕЕ 500 ПРЕДПРИЯТИЙ - ПЕРЕРАБОТЧИКОВ'
                />

                <Carousel.Caption style={{top:'40%', bottom:'0'}}>
                    <h3 className="slider-text-1">ОБСЛУЖИВАЕМ БОЛЕЕ 500 ПРЕДПРИЯТИЙ - ПЕРЕРАБОТЧИКОВ</h3>
                    {/*<Button className={'slide-button'}>Подробнее</Button>*/}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img id={'slide-image-2'}
                    className="d-block w-100 image-size"
                    src="/images/slider/slide2.webp"
                    style={{objectFit:"cover"}}
                    alt="ПОИСК ИНДИВИДУАЛЬНОГО ТЕХНОЛОГИЧЕСКОГО РЕШЕНИЯ"
                />
                <Carousel.Caption style={{top:'40%',bottom:'0'}}>
                    <h3 className="slider-text-1">ПОИСК ИНДИВИДУАЛЬНОГО ТЕХНОЛОГИЧЕСКОГО РЕШЕНИЯ</h3>
                    <Button className={'slide-button'} onClick={() => window.location.replace("/#benefits")}>Подробнее</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img id={'slide-image-3'}
                    className="d-block-modal w-100 image-size"
                    src="/images/slider/slide3.webp"
                    style={{objectFit:"cover"}}
                    alt="?"
                />
                <Carousel.Caption style={{top:'35%',bottom:'0'}}>
                    <Button className={'slide-button_3 position-absolute top-50 start-0 translate-middle'} onClick={() => window.location.replace("/#import")}>Подробнее</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img id={'slide-image-4'}
                    className="d-block w-100 image-size"
                    src="/images/slider/slide4.webp"
                    style={{objectFit:"cover"}}
                    alt="ДОСТАВКА ПО ВСЕЙ РОССИИ"
                />

                <Carousel.Caption style={{top:'40%',bottom:'0'}}>
                    <h3 className="slider-text-1">ДОСТАВКА ПО ВСЕЙ РОССИИ</h3>
                    {/*<Button className={'slide-button'} >Подробнее</Button>*/}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img id={'slide-image-5'}
                    className="d-block w-100 image-size"
                    src="/images/slider/slide5.webp"
                    style={{objectFit:"cover"}}
                    alt="НАЙДЕМ ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ"
                />

                <Carousel.Caption style={{top:'35%',bottom:'0'}}>
                    <h3 className="slider-text-1">НАЙДЕМ ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ </h3>
                    {/*<Button className={'slide-button'}>Подробнее</Button>*/}
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