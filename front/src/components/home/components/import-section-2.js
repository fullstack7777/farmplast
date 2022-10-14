import React from 'react';
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop } from '@fortawesome/free-solid-svg-icons'

function ImportSection2() {
    return (
        <div id="section2" style={{paddingBottom: 80}}>
            <Container>
                <div className={'export-h1'}>
                    <span className="custom-bold-white-40">Экспортный</span><span className="custom-bold-40"> форсаж</span>
                </div>
                <div className="custom-colored-text">
                    <p>ПАО «Сибур Холдинг», как лидер нефтехимической отрасли России, максимально заинтересован в увеличении переработки полимеров в России. Как крупнейший дистрибьютор ПАО «Сибур Холдинг», мы предлагаем нашим клиентам поучаствовать в программах поддержки, разработанных Сибуром.</p>
                    <p>Экспортный форсаж направлен на увеличение поставок готовой продукции за пределы Таможенного Союза. Мы готовы предложить специальные условия на поставки сырья, продукция из которого будет вывезена за пределы Таможенного Союза. Откройте для себя новые рынки с помощью ПАО «Сибур Холдинг» и ООО «Фармпласт»! Для получения более подробной информации обращайтесь к нашему менеджеру.»</p>
                    </div>
                <div className={'invest-h1'}>
                    <h1 className="custom-bold-40" style={{paddingBottom: '80px', paddingTop: 80}}>
                        <span className="custom-bold-white-40">Инвестиционный </span>форсаж</h1>
                </div>

                <div className="custom-colored-text">
                    <p>Инвестиционный форсаж направлен на поддержку тех предпринимателей, которые готовы вложиться в установку нового оборудования, особенно в низко конкурентных сегментах и в сегментах импортозамещения. Мы готовы предложить специальные условия на поставки сырья для нового оборудования. Увеличивайте выпуск продукции с помощью ПАО «Сибур Холдинг» и ООО «Фармпласт»! Для получения более подробной информации обращайтесь к нашему менеджеру</p>
                </div>
            </Container>
        </div>
    );
}

export default ImportSection2;