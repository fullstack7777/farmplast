import React from 'react';
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import {Row, Col} from "react-bootstrap";
function ImportSection() {
    return (
        <div id="import" style={{paddingTop: 80}}>
            <h1 className="custom-bold-40-import">ИМПОРТОЗАМЕЩЕНИЕ</h1>
                        <div id="import-section">
            <Container >
                            <Row>
                        <div className="import-white-text">
                            <p>САНКЦИИ ОСТАНОВИЛИ ПОСТУПЛЕНИЕ<br/> ИНОСТРАННЫХ ПОЛИМЕРОВ.
                                ПАО «СИБУР ХОЛДИНГ» ВЕДЕТ <br/>АКТИВНУЮ РАБОТУ ПО ИМПОРТОЗАМЕЩЕНИЮ
                                ЕСЛИ ВЫ СТОЛКНУЛИСЬ С ПРОБЛЕМОЙ<br/> ИМПОРТОЗАМЕЩЕНИЯ ОБРАЩАЙТЕСЬ К
                                НАШЕМУ МЕНЕДЖЕРУ.
                            </p>
                        </div>
                </Row>
            </Container>
                        </div>
        </div>
    );
}

export default ImportSection;