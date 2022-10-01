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
                    О<span className="custom-bold-white-40">НАС</span></h1>

                <div className="custom-colored-text">
                    <p>Компания Фармпласт ведет отсчет своей деятельности с <span className="custom-bold">1997 года.</span></p>
                    <p>Вот уже на протяжении <span className="custom-bold">25лет</span> мы осуществляем бесперебойное снабжение, кредитование  своих клиентов.</p>
                    <p>Нашими партнёрами являются <span className="custom-bold">крупнейшими</span> производители полимерного сырья СНГ, такие  как ПАО «СИБУР Холдинг», АО «НКНХ», АО«Казаньоргсинтез», ТОО «Компания Нефтехим Ltd»,  ПАО «Роснефть», ОАО «Нафтан»</p>

                    Фармпласт сегодня это:
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />
                            Объем отгружаемой продукций свыше <span className="custom-bold">200 000 тонн</span> ежегодно;
                        </li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} /><span className="custom-bold">Отсрочка</span> платежа;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Склады по всей России;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Мощность складов 5 000 тонн единовременного хранения;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Отгрузки со склада от 25кг;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Доставки <span className="custom-bold">по всей России</span>по всей России;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Информирование клиента по состоянию рынка, ценообразованию, тенденциям;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Помощь в подборке новых, подходящих именно для конкретного клиента марок полимеров;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />Помощь в объединение усилий клиентов из разных, но пересекающихся сегментах, для расширения предлагаемой линейки продукции;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'5px'}} />На основе наших знаний и возможностей  рекомендации по привлечению банковских продуктов, факторинга и т.д;</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default AboutSection;