import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Row} from "react-bootstrap";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function MyVerticallyCenteredModal(props) {
    //const productId = props.id;
    const product = props.product1;

    // const [product, setProduct] = useState([]);

    // const fetchData = () => {
    //     fetch('https://api.farmplst.com/api/getProductById?id='+productId)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setProduct(data);
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    function getExtension(filename) {
        return filename.split(";").pop();
    }
    console.log(product);

    if(product!==undefined){
   // let ext = getExtension(product.images);
        //ext = product.image.replace('.'+ext,'-250x250.'+ext);
        //let exts = getExtension(product.images);
        const parse = product.description;
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Карточка продукта
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block-modal w-100"
                                        src={'http://admin.farmplst.com/image/'+product.image}
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src="/images/placeholder.webp";
                                        }}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <Row>
                                <Col className="modal-picture-mini">
                                    {/*<img className="modal-picture-single" src={'http://admin.farmplst.com/image/'+ ext}/>*/}
                                </Col>
                            </Row>

                        </Col>
                        <Col>
                            <h4>{product.name}</h4>
                            <p>{product.model}</p>
                            <div className="button-cart-buy">
                                <Button href="/orders" variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Купить в один клик</Button>
                                <Button href="/carts" variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Заказать в один клик</Button>

                            </div>
                            <p style={{marginTop: 20, fontWeight: "bold"}}><span>Марка:</span> {product.tag}
                            </p>
                            <p style={{marginTop: 20, fontWeight: "bold"}}>
                                <span>Производитель:</span> {product.manufacturer}</p>
                            <div><span style={{fontWeight: "bold"}}>Описание:</span><div dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="custom-button" onClick={props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );

    }else {
        return (<div></div>);
    }


}

export default MyVerticallyCenteredModal;