import React from 'react'
import Slider from '../components/Slider'
import { Container, Row, Col } from 'react-bootstrap'
import ImageGallery from '../components/ImageGallery'
import Blog from '../components/Blog/Blog'
import Sidebar from '../components/Blog/Sidebar'
import {AiOutlineReload} from 'react-icons/ai'
const Homepage = () => {
    return (
        <>
            <div className='d-none d-md-block'>  <Slider /></div>
            <Container>
                <Row className='my-4 py-4'>
                    <Col md={8}>
                        <Blog />
                        <Blog />
                        <Blog />
                        <div className="my-2 text-center">
                            <button className='btn btn-warning rounded-0 text-uppercase text-light fw-bold'><AiOutlineReload size={25}/> load older blogs</button>
                        </div>
                    </Col>
                    <Col md={4}> <Sidebar /> </Col>
                </Row>
            </Container>

            <ImageGallery />
        </>
    )
}

export default Homepage