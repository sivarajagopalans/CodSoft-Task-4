import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../slices/productsSlices';
import { Link } from 'react-router-dom';

export const Cart = () => {

   const dispatch = useDispatch();

   const removeFromCart = (value) => {
      dispatch(removeCart(value.id));
   }
   const { cartList } = useSelector((state) => state.products);
   return (
      <>
         <Container>
            <h2 className='my-4 text-center'>Cart list</h2>
            <Row className="g-4 my-4">
               {
                  (cartList.length > 0) ? cartList.map((value, index) => (
                     <Col md={6} lg={6} xl={4} key={index}>
                        <Card style={{ height: "250px" }} className='d-flex justify-content-center'>
                           <Row>
                              <Col className='d-flex align-items-center'>
                                 <Card.Img variant="top" className='p-3' height={"200px"} width={"150px"} src={value.image} />
                              </Col>
                              <Col>
                                 <Card.Body className='d-flex flex-column h-100 align-content-center justify-content-between'>
                                    <Card.Title ><div className='h6'>{value.title}</div></Card.Title>
                                    <div className='d-flex justify-content-between align-items-center'>
                                       <Card.Text className='m-0 h4 text-success'><div className='h5 text-dark'>Price</div>{"$ " + value.rating.rate}</Card.Text>
                                       <Button variant="danger" onClick={() => removeFromCart(value)}>
                                          <i className='bi bi-trash'></i>
                                       </Button>
                                    </div>
                                 </Card.Body>
                              </Col>
                           </Row>
                        </Card>
                     </Col>
                  )) :
                     <section className='text-center'>
                        <h2 className='text-center'>No Product in your Cart</h2>
                        <Link className='h3' to='/'>Go to HomePage</Link>
                     </section>

               }
               
            </Row>
         </Container>
      </>
   )
}
