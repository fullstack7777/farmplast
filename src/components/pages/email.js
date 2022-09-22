import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Email() {
    return (
        <section>
            <div className="section">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12 text-center bg-dark">
                            <h2 className="main-white">Компания фармпласть всегда готова предоставить помощь в выборе продукта и подходящего способа оплаты.</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Email;