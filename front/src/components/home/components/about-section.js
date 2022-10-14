import React from 'react';
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop } from '@fortawesome/free-solid-svg-icons'

function AboutSection() {
    return (
        <div id="section2" style={{paddingBottom: 60}}>
            <img className="custom-section1-img" src={'/images/left.webp'} alt="left"/>
            <img className="custom-section2-img" src={'/images/right.webp'} alt="right"/>
            <Container>
                <h1 className="custom-bold-40">
                    О<span className="custom-bold-white-40">нас</span></h1>

                <div className="custom-colored-text">
                    <p>Компания Фармпласт ведет отсчет своей деятельности с <span className="custom-bold">1997 года.</span></p>
                    <p>Вот уже на протяжении <span className="custom-bold">25лет</span> мы осуществляем бесперебойное снабжение, кредитование  своих клиентов.</p>
                    <p>Фармпласт  дистрибьютор <span className="custom-bold">ПАО «Сибур холдинг»</span></p>

                    Фармпласт сегодня:
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />
                            Объем поставок российских  полимеров свыше <span className="custom-bold">200 000 тонн</span> в год.
                        </li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} /><span className="custom-bold">Отсрочка</span> платежа;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Обслуживаем более 500 предприятий- переработчиков</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Склады <span className="custom-bold"> по всей России</span>;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Мощность складов 5 000 тонн единовременного хранения по территории всей России</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Отгрузки со склада от 25кг;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Не допускаем перебоев в снабжении вашего предприятия</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Информируем клиента о тенденциях и состоянии рынка.</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Оказываем помощь в подборке новых, подходящих именно для конкретного клиента марок полимеров</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Оказываем профессиональные консультационные услуги на базе Сибур «ПОЛИЛАБ»;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Предоставляем товарное кредитование на срок до 90 дней.</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Расширяем ваши финансовые возможности, если в этом есть необходимость.</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Предоставляем юридическую помощь клиенту</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default AboutSection;