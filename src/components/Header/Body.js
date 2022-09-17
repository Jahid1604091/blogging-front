import React from 'react'
import styled from 'styled-components'
import blogImg from '../../assets/images/illustration-full.png'
const Body = () => {
  return (
    <Wrapper>
      <img src={blogImg} alt="blog image" className='img-fluid' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img{
    width:250px ;
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* height:250px ; */
  }
`
export default Body