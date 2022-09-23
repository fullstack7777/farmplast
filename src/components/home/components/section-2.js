import React from 'react';
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop } from '@fortawesome/free-solid-svg-icons'

function Section2() {
    return (
        <div id="section2">
            <img className="custom-section2-img" src={'/images/image1.jpg'} alt=""/>
            <Container>
                <br/>
                <p>Компания Фармпласт ведет отсчет своей деятельности с <span className="custom-bold">1997 года.</span></p>
                <p>Вот уже на протяжении <span className="custom-bold">25лет</span> мы осуществляем бесперебойное снабжение, кредитование  своих клиентов.</p>
                <p>Нашими партнёрами являются <span className="custom-bold">крупнейшими</span> производители полимерного сырья СНГ, такие  как ПАО «СИБУР Холдинг»,  ПАО «Роснефть», ТОО «Компания Нефтехим Ltd», АО «НКНХ», АО«Казаньоргсинтез», ОАО «Нафтан»</p>

                <div className="custom-colored-text">
                    Фармпласт сегодня это:
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />
                            Объем отгружаемой продукций свыше <span className="custom-bold">200 000 тонн</span> ежегодно;
                        </li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} /><span className="custom-bold">Отсрочка</span> платежа;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />Склады по всей России;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />Мощность складов 5 000 тонн единовременного хранения;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />Отгрузки со склада от 25кг;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />Доставки <span className="custom-bold">по всей России</span>по всей России;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />Информирование клиента по состоянию рынка, ценообразованию, тенденциям;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />Помощь в подборке новых, подходящих именно для конкретного клиента марок полимеров;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />Помощь в объединение усилий клиентов из разных, но пересекающихся сегментах, для расширения предлагаемой линейки продукции;</li>
                        <li><FontAwesomeIcon icon={faStop} color={'#008DA9'} style={{marginRight:'10px'}} />На основе наших знаний и возможностей  рекомендации по привлечению банковских продуктов, факторинга и т.д;</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Section2;