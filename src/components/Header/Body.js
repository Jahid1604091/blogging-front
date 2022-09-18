import React from 'react'
import styled from 'styled-components'
import blogImg from '../../assets/images/illustration-full.png'
import {AiOutlinePlus} from 'react-icons/ai'
import {DiGhostSmall} from 'react-icons/di'
const Body = () => {
  return (
    <Wrapper>
      <img src={blogImg} alt="blog image" className='img-fluid' />
      <div className="text-center">
        <div className="btn-group">
          <button className='btn btn-outline-danger text-dark' title='All Blogs'><DiGhostSmall/> <span className='d-none d-md-inline'>All Blogs</span> </button>
          <button className='btn btn-danger' title='Add New Blog'><AiOutlinePlus/><span className='d-none d-md-inline'>New Blog</span> </button>
        </div>

      </div>
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