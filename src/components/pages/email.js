import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FormText} from "react-bootstrap";

function Email() {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="content">
                            <h2 style={{color: "white"}}>Компания фармпласть всегда готова предоставить помощь в выборе продукта и подходящего способа оплаты.</h2>
                            <div className="input-group">
                                <Form>
                                    <Form.Group class="form-group-lg" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Form>
         <span className="input-group-btn" style={{marginLeft: 20}}>
         <button className="btn" type="submit">Получить консультацию</button>
         </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Email;