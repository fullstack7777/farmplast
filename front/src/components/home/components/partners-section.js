import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { useSwiper } from 'swiper/react';
import {FreeMode, Autoplay} from "swiper";


function PartnersSection() {

    const datas = [
        {
            link: "https://www.kazanorgsintez.ru/",
            url: '/images/partners/partner-1.webp'
        },
        {
            link: "https://www.nknh.ru/",
            url: '/images/partners/partner-3.webp'
        },
        {
            link: "http://www.sibur.ru/ru/",
            url: '/images/partners/partner-5.webp'
        },
        {
            link: "https://www.kazanorgsintez.ru/",
            url: '/images/partners/partner-1.webp'
        },
        {
            link: "https://www.nknh.ru/",
            url: '/images/partners/partner-3.webp'
        },
        {
            link: "http://www.sibur.ru/ru/",
            url: '/images/partners/partner-5.webp'
        },
    ]
    return (
        <div className="brands">
            <Container fluid="md">
                <div>
                    <h1 className="custom-bold-40">Наши <span className="custom-bold-white-40">партнеры</span></h1>
                </div>
                <Row>
                    <Swiper
                        freeMode={true}
                        grabCursor={true}
                        effect={"slide"}
                        modules={[Autoplay, FreeMode]}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={
                            {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                // when window width is >= 320px
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                // when window width is >= 480px
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                // when window width is >= 640px
                                640: {
                                    slidesPerView: 4,
                                    spaceBetween: 40
                                },
                                980: {
                                    slidesPerView: 5,
                                    spaceBetween: 40
                                },
                                1200: {
                                    slidesPerView: 6,
                                    spaceBetween: 40
                                }
                            }
                        }
                    >
                        {
                            datas.map(e=>(
                                <SwiperSlide>
                                    <a href={e.link} target="_blank" className="brands_item d-flex flex-column justify-content-center" rel="noreferrer">
                                        <img
                                            src={e.url}
                                            alt={e.url} />
                                    </a>
                                </SwiperSlide>
                            ))
                        }
                        }

                    </Swiper>
                    {/*<Col>*/}
                    {/*    <div className="brands_slider_container">*/}
                    {/*        <div className="owl-carousel owl-theme brands_slider justify-content-center">*/}
                    {/*            <div className="brands_item d-flex flex-column align-content-center">*/}
                    {/*            <div className="owl-item">*/}
                    {/*                <a href={'https://www.kazanorgsintez.ru/'}  target="_blank" rel="noreferrer">*/}
                    {/*                    <img height={'80'}*/}
                    {/*                        src={"/images/partners/partner-1.webp"}*/}
                    {/*                        alt="kazanorgsinte"/>*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="owl-item">*/}
                    {/*                <div className="brands_item d-flex flex-column align-content-center">*/}
                    {/*                    <a href={'https://www.nknh.ru/'}  target="_blank"  rel="noreferrer">*/}
                    {/*                    <img height={'80'}*/}
                    {/*                         src={"/images/partners/partner-3.webp"}*/}
                    {/*                         alt="nknh"/>*/}
                    {/*                    </a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="owl-item">*/}
                    {/*                <div className="brands_item d-flex flex-column justify-content-center">*/}
                    {/*                    <a href={'http://www.sibur.ru/ru/'}  target="_blank" rel="noreferrer">*/}
                    {/*                    <img height={'80'}*/}
                    {/*                         src={"/images/partners/partner-5.webp"}*/}
                    {/*                         alt="sibur"/>*/}
                    {/*                    </a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="brands_nav brands_prev">*/}
                    {/*            <FontAwesomeIcon icon={faChevronLeft}/>*/}
                    {/*        </div>*/}
                    {/*        <div className="brands_nav brands_next">*/}
                    {/*            <FontAwesomeIcon icon={faChevronRight}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </div>
    );
}

export default PartnersSection;