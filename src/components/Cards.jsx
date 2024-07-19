import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../slices/productsSlices';

export const Cards = () => {

    const dispatch = useDispatch();

    const removeFromCart = (value) => {
        dispatch(removeCart(value.id));
    }
    const { cardsList } = useSelector((state) => state.products);
    return (
        <>
            <Container>{console.log({ cardsList })}
                <Row xs={1} md={2} className="g-4 my-4">
                    {(cardsList.length > 0) ? cardsList.map((value, index) => (
                        <Col key={index}>
                            <Card style={{ height: "250px" }} className='d-flex justify-content-center'>
                                <Row>
                                    <Col className='d-flex align-items-center'>
                                        <Card.Img variant="top" src={value.image} />
                                    </Col>
                                    <Col>
                                        <Card.Body className='d-flex flex-column h-100 align-content-center justify-content-between'>
                                            <Card.Title>{value.title}</Card.Title>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <Card.Text className='m-0'>{"$ " + value.rating.rate}</Card.Text>
                                                <Button variant="danger" onClick={() => removeFromCart(value)}>
                                                    <i className='bi bi-trash'></i>
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    )) : <p>no</p>}
                </Row>
            </Container>
        </>
    )
}
