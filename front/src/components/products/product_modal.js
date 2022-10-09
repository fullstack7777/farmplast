import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Row} from "react-bootstrap";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function MyVerticallyCenteredModal(props) {
    //const productId = props.id;
    const product = props.product1;
    // const [jokes, setJokes] = useState();
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

    //
    //
    // const getJokes = () => {
    //       fetch("https://api.farmplst.com/api/newSession")
    //           .then((response) => response.json())
    //           .then(result => console.log(result))
    //           .catch(error => console.log('error', error));
    // };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("session", "0040d80a9cc8dd3b9a19630117");
    urlencoded.append("quantity", "1");
    urlencoded.append("product_id", "83");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    const addCart = () => {
        fetch("https://api.farmplst.com/api/addCard", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    console.log(product);
    if(product!==undefined && product!=null && product!=undefined){
   // let ext = getExtension(product.images);
        //ext = product.image.replace('.'+ext,'-250x250.'+ext);
        //let exts = getExtension(product.images);
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
                                <Button onClick={()=> addCart()} variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Купить в один клик</Button>
                                <Button  variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Заказать в один клик</Button>
                            </div>
                            <p style={{marginTop: 20, fontWeight: "bold"}}><span>Марка:</span> {product.tag}
                            </p>
                            <p style={{marginTop: 20, fontWeight: "bold"}}>
                                <span>Производитель:</span> {product.manufacturer}</p>
                            <div><span style={{fontWeight: "bold"}}>Описание:</span>
                                <div style={{display:'grid'}}>{product.description!=null? product.description.replace(/[|&;$%@"<>()+,]/g,''):''}</div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="custom-button" onClick={props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MyVerticallyCenteredModal;