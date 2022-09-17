import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import {AiOutlineShareAlt,AiOutlineLike} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
const Blog = () => {
    return (
        <Wrapper>
            <img src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                alt="" className='img-fluid' />
            <Row className='my-2 my-md-4'>
                <Col md={8}>
                    <div className="text-start">
                        <button className="btn btn-danger rounded-0 text-uppercase">travel</button>
                        <p className='text-muted py-md-1 fst-italic'>Monday, October 13, 2017</p>
                    </div>

                </Col>
                <Col md={4}>
                    <div className="text-md-end share">
                    <span> <AiOutlineShareAlt/> share </span>
                    <span> <AiOutlineLike/> 03 </span>
                    <span> <BiCommentDetail/> 04 </span>
                    </div>
                </Col>
            </Row>


            <Row>
                <Col>
                    <div className="blog-description my-2 my-md-0">
                        <h2>This is post for the ones that love to travel</h2>
                        <p className='text-justify'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                </Col>
                <div className='mb-4'>

                <button className='btn btn-outline-danger text-uppercase shadow px-4 rounded-0'>read more</button>
                </div>
            </Row>
        </Wrapper>
    )
}
const Wrapper = styled.article`

    .share{
       
        span{
            cursor: pointer;
            transition:var(--transition) ;
            margin:0 10px ;
            &:last-child{
                margin-right:0;
            }
            &:first-child{
                margin-left:0 ;
            }
            &:hover{
                color:var(--clr-red-light) ;
            }
        }
    }
    
    @media screen and (min-width: 768px) and (max-width:1199px) {
    .share{
        display:flex ;
        justify-content:space-between ;

    }
}
`

export default Blog