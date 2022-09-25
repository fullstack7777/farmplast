import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

export class ContactsPage extends React.Component {
    render() {
        return (
            <div>
                <Container id="section-contacts">
                    <Row >
                        <Col >
                            <div><span>Юридический адресс:</span> г. Санкт-Петербург, Лесной <br />проспект, д. 63 лит. А офис 402</div>
                            <div><span>Телефон:</span> +78182535353</div>
                            <div><span style={{fontWeight: "bold"}}>Почта:</span> Zabar12370@gmail.com</div>
                            <div><span style={{fontWeight: "bold"}}>Время работы:</span> 09:00 до 18:00</div>
                            <div><span style={{fontWeight: "bold"}}>Реквизиты:</span> Общество с ограниченной ответсвенностью <br />"ФАРМПЛАСТ" <br/> ИНН 7805074180 / КПП780501001<br/>
                                г. Санкт-Петербург, Лесной проспект, д. 63 лит. А офис 402<br/> P/C 40702810822000000276 "Cанкт-<br/>
                                Петербуркская Дирекция ОАО "Уралсиб" в г. Санкт-<br/> Петербурге, K/c 30101810800000000706, БИK<br/>
                                044030706</div>
                        </Col>
                        <Col>
                            <div>Компания ФАРМПЛАСТ </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}