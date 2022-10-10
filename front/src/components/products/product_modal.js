// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import {Col, Row} from "react-bootstrap";
// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
//
//
// // function MyVerticallyCenteredModal(props) {
// //     const product = props.product1;
// //     if(product!==undefined && product!=null && product!=undefined){
// //         return (
// //             <Modal
// //                 {...props}
// //                 size="lg"
// //                 aria-labelledby="contained-modal-title-vcenter"
// //                 centered
// //             >
// //                 <Modal.Header closeButton>
// //                     <Modal.Title id="contained-modal-title-vcenter">
// //                         Карточка продукта
// //                     </Modal.Title>
// //                 </Modal.Header>
// //                 <Modal.Body>
// //                     <Row>
// //                         <Col>
// //                             <Carousel>
// //                                 <Carousel.Item>
// //                                     <img
// //                                         className="d-block-modal w-100"
// //                                         src={'http://admin.farmplst.com/image/'+product.image}
// //                                         onError={({ currentTarget }) => {
// //                                             currentTarget.onerror = null; // prevents looping
// //                                             currentTarget.src="/images/placeholder.webp";
// //                                         }}
// //                                         alt="First slide"
// //                                     />
// //                                 </Carousel.Item>
// //                             </Carousel>
// //                             <Row>
// //                                 <Col className="modal-picture-mini">
// //                                     {/*<img className="modal-picture-single" src={'http://admin.farmplst.com/image/'+ ext}/>*/}
// //                                 </Col>
// //                             </Row>
// //                         </Col>
// //                         <Col>
// //                             <h4>{product.name}</h4>
// //                             <p>{product.model}</p>
// //                             <div className="button-cart-buy">
// //                                 <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Купить в один клик</Button>
// //                                 <Button  variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Заказать в один клик</Button>
// //                             </div>
// //                             <p style={{marginTop: 20, fontWeight: "bold"}}><span>Марка:</span> {product.tag}
// //                             </p>
// //                             <p style={{marginTop: 20, fontWeight: "bold"}}>
// //                                 <span>Производитель:</span> {product.manufacturer}</p>
// //                             <div><span style={{fontWeight: "bold"}}>Описание:</span>
// //                                 <div style={{display:'grid', fontSize:'13px'}} dangerouslySetInnerHTML={{__html: htmlDecode(product.description)}}/>
// //                             </div>
// //                         </Col>
// //                     </Row>
// //                 </Modal.Body>
// //                 <Modal.Footer>
// //                     <Button className="custom-button" onClick={props.onHide}>Закрыть</Button>
// //                 </Modal.Footer>
// //             </Modal>
// //         );
// //     }
// // }
// // function htmlDecode(input){
// //     let e = document.createElement('div');
// //     e.innerHTML = input;
// //     return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
// // }
// // export default MyVerticallyCenteredModal;