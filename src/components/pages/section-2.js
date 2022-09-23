import React from 'react';
import Container from "react-bootstrap/Container";
function Section2() {
    return (
        <div id="section2">
            <img className="custom-section2-img" src={'/images/image1.jpg'} alt=""/>
            <Container>
                <br/>
                <p>Компания Фармпласт ведет отсчет своей деятельности с <span className="custom-bold">1997 года.</span></p>
                <p>Вот уже на протяжении <span className="custom-bold">25лет</span> мы осуществляем бесперебойное снабжение, кредитование  своих клиентов.</p>
                <p>Нашими партнёрами являются <span className="custom-bold">крупнейшими</span> производители полимерного сырья СНГ, такие  как ПАО «СИБУР Холдинг»,  ПАО «Роснефть», ТОО «Компания Нефтехим Ltd», АО «НКНХ», АО«Казаньоргсинтез», ОАО «Нафтан»</p>

                <div className="custom-colored-t">
                    Фармпласт сегодня это:
                    <ul>
                        <div className="box blue"></div><li className="list-style">
                            Объем отгружаемой продукций свыше 200 000 тонн ежегодно;
                        </li>
                        <div className="box blue"></div><li className="list-style">Отсрочка платежа;</li>
                        <div className="box blue"></div><li className="list-style">Склады по всей России;</li>
                        <div className="box blue"></div><li className="list-style">Мощность складов 5 000 тонн единовременного хранения;</li>
                        <div className="box blue"></div><li className="list-style">Отгрузки со склада от 25кг;</li>
                        <div className="box blue"></div><li className="list-style">Доставки по всей России;</li>
                        <div className="box blue"></div><li className="list-style">Информирование клиента по состоянию рынка, ценообразованию, тенденциям;</li>
                        <div className="box blue"></div><li className="list-style">Помощь в подборке новых, подходящих именно для конкретного клиента марок полимеров;</li>
                        <div className="box blue"></div><li className="list-style">Помощь в объединение усилий клиентов из разных, но пересекающихся сегментах, для расширения предлагаемой линейки продукции;</li>
                        <div className="box blue"></div><li className="list-style">На основе наших знаний и возможностей  рекомендации по привлечению банковских продуктов, факторинга и т.д;</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Section2;