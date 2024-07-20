import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../slices/productsSlices';

export const Categories = () => {

    const { cartList } = useSelector((state) => state.products)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ]
    };

    const [jeweleryList, setJeweleryList] = useState([]);
    const [electronicsList, setElectronicsList] = useState([]);
    const [menClothesList, setMenClothesList] = useState([]);
    const [womenClothesList, setWomenClothesList] = useState([]);

    const products = async () => {
        // const url = 'https://fakestoreapi.com/products';
        const jewelery_url = "https://fakestoreapi.com/products/category/jewelery"
        const electronics_url = "https://fakestoreapi.com/products/category/electronics"
        const mens_url = "https://fakestoreapi.com/products/category/men's%20clothing"
        const woments_url = "https://fakestoreapi.com/products/category/women's%20clothing"
        try {
            // const res = await fetch(url);
            // const data = await res.json();

            const res_jewelery = await fetch(jewelery_url);
            const data_jewelery = await res_jewelery.json();

            const res_electronics = await fetch(electronics_url);
            const data_electronics = await res_electronics.json();

            const res_mens = await fetch(mens_url);
            const data_mens = await res_mens.json();

            const res_womens = await fetch(woments_url);
            const data_womens = await res_womens.json();
            // setProductList(data);
            setJeweleryList(data_jewelery);
            setElectronicsList(data_electronics);
            setMenClothesList(data_mens);
            setWomenClothesList(data_womens);
            console.log("render sucess");
            return;

        } catch (error) {
            console.error(error.message)
        }

    }
    useEffect(() => {
        products();
    }, []);

    const dispatch = useDispatch();

    const AddToCart = (value) => {
        console.log("added sucess");
        dispatch(addCart(value));
    }

    const RomoveFromCart = (value) => {
        console.log("remove sucess");
        dispatch(removeCart(value.id))
        // console.log(cartList);
    }
    return (
        <>
            <Container>
                <h2 className="text-center my-4">Jewelery Products</h2>
                <Slider {...settings}>
                    {jeweleryList.map((value, index) => (
                        <Row className="my-4 mx-2" key={index}>
                            <Col>
                                <CardGroup>
                                    <Card>
                                        <Card.Img variant="top" height={"180px"} width={"100px"} className='p-4' src={value.image} />
                                        <Card.Body style={{ height: "200px", overflow: "hidden" }}>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Text>{value.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='d-flex justify-content-around align-items-center'>
                                            <Card.Text className='m-0'>{value.price + '$'}</Card.Text>
                                            {
                                                cartList.some((cartId) => cartId.id == value.id
                                                ) ?
                                                    (<Button variant="primary" onClick={() => RomoveFromCart(value)}>Romove Cart</Button>)
                                                    :
                                                    (<Button variant="primary" onClick={() => AddToCart(value)}>Add to Cart</Button>)
                                            }

                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                    ))}
                </Slider>
            </Container>

            <Container>
                <h2 className="text-center my-4">Electronics Products</h2>
                <Slider {...settings}>
                    {electronicsList.map((value, index) => (
                        <Row className="my-4 mx-2" key={index}>
                            <Col>
                                <CardGroup>
                                    <Card>
                                        <Card.Img variant="top" height={"180px"} width={"100px"} className='p-4' src={value.image} />
                                        <Card.Body style={{ height: "200px", overflow: "hidden" }}>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Text>{value.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='d-flex justify-content-around align-items-center'>
                                            <Card.Text className='m-0'>{value.price + '$'}</Card.Text>
                                            {
                                                cartList.some((cartId) => cartId.id == value.id
                                                ) ?
                                                    (<Button variant="primary" onClick={() => RomoveFromCart(value)}>Romove Cart</Button>)
                                                    :
                                                    (<Button variant="primary" onClick={() => AddToCart(value)}>Add to Cart</Button>)
                                            }
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                    ))}
                </Slider>
            </Container>

            <Container>
                <h2 className="text-center my-4">Men's Clothes Products</h2>
                <Slider {...settings}>
                    {menClothesList.map((value, index) => (
                        <Row className="my-4 mx-2" key={index}>
                            <Col>
                                <CardGroup>
                                    <Card>
                                        <Card.Img variant="top" height={"180px"} width={"100px"} className='p-4' src={value.image} />
                                        <Card.Body style={{ height: "200px", overflow: "hidden" }}>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Text>{value.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='d-flex justify-content-around align-items-center'>
                                            <Card.Text className='m-0'>{value.price + '$'}</Card.Text>
                                            {
                                                cartList.some((cartId) => cartId.id == value.id
                                                ) ?
                                                    (<Button variant="primary" onClick={() => RomoveFromCart(value)}>Romove Cart</Button>)
                                                    :
                                                    (<Button variant="primary" onClick={() => AddToCart(value)}>Add to Cart</Button>)
                                            }
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                    ))}
                </Slider >
            </Container>

            <Container>
                <h2 className="g-4 text-center my-4">Women Clothes Products</h2>
                <Slider {...settings}>
                    {womenClothesList.map((value, index) => (
                        <Row className="my-4 mx-2" key={index}>
                            <Col>
                                <CardGroup>
                                    <Card>
                                        <Card.Img variant="top" height={"180px"} width={"100px"} className='p-4' src={value.image} />
                                        <Card.Body style={{ height: "200px", overflow: "hidden" }}>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Text>{value.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='d-flex justify-content-around align-items-center'>
                                            <Card.Text className='m-0'>{value.price + '$'}</Card.Text>
                                            {
                                                cartList.some((cartId) => cartId.id == value.id
                                                ) ?
                                                    (<Button variant="primary" onClick={() => RomoveFromCart(value)}>Romove Cart</Button>)
                                                    :
                                                    (<Button variant="primary" onClick={() => AddToCart(value)}>Add to Cart</Button>)
                                            }
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                    ))}
                </Slider>
            </Container>


            {/* /////////////////// */}

            {/* <Container>
                <h2 className="text-center my-4">Women Clothes Products</h2>
                <Slider {...settings}>
                    {womenClothesList.map((value, index) => (
                        <Row className="mx-2 my-4" key={index}>
                            <Col>
                                <CardGroup>
                                    <Card>
                                        <Card.Img variant="top" height={"300px"} width={"100px"} src={value.image} />
                                        <Card.Body style={{ height: "350px", overflow: "hidden" }}>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Text>{value.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='d-flex justify-content-around align-items-center'>
                                           <Card.Text className='m-0'>{value.price+'$'}</Card.Text>
                                            <Button variant="primary">Add to Card</Button>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                    ))}
                </Slider>
            </Container> */}
        </>
    )
}
