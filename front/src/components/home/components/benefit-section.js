import React from 'react';
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop } from '@fortawesome/free-solid-svg-icons'

function BenefitsSection() {
    return (
        <div id="benefits" style={{paddingBottom: 80}}>
            <Container>
                <h1 className="custom-bold-40">
                    Преимущества, которые вы <span className="custom-bold-white-40">получаете </span></h1>
                <div className="custom-colored-text">
                    <p>Мы являемся крупнейшими дистрибьютором ПАО «Сибур Холдинг», и нашим клиентам в полном объеме доступны услуги Сибур «Полилаб».</p>
                    <p>Это первый в России, уникальный научно-производственный комплекс, созданный для решения технических задач, встающих перед переработчиками полимеров.</p>
                    <p>Подбор марок для вашей продукции и для вашего оборудования, консультации по режимам переработки, определение оптимальных сочетаний режимов, марок и добавок, в том числе с выездом на производство, определение материала, из которого изготовлена продукция, по образцу, консультации и помощь в приобретении аналогов санкционных материалов и добавок, и многое другое.</p>
                    <p>Для наших клиентов – абсолютно бесплатно.</p>
                    <p>Для получения более подробной информации обращайтесь к нашему менеджеру или <a href='https://www.sibur.ru/ru/clients/technical-support/' target='_blank'>здесь</a>.</p>
                </div>
            </Container>
        </div>
    );
}

export default BenefitsSection;