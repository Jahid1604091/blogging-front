import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { InputGroup} from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'

import SocialIcons from '../shared/SocialIcons'

const TopNav = () => {
  const searchRef = useRef(null);
  const [text, setText] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault()

    //call search api
    console.log(text)
  }
  useEffect(() => {
    searchRef.current.focus()
  }, [])

  return (
    <Wrapper>
      <ul className='d-flex justify-content-center align-items-center'>
        <li className='d-none d-lg-block'>Hello nice people, welcome to my blog</li>
        <li className='d-none d-md-block'>contact@juliblog.com</li>
        <li>
          <form onSubmit={handleSearchSubmit}>
            <InputGroup className="search-box" >

              <input type="text"
                placeholder='Search'
                ref={searchRef}
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <button type='submit'><AiOutlineSearch /></button>
            </InputGroup>

          </form>
        </li>
        <li className='d-none d-md-block'>
          <SocialIcons/>
        </li>
      </ul>

    </Wrapper>
  )
}

const Wrapper = styled.section`
 ul{
  border-bottom:1px solid gray ;
  white-space:nowrap ;
  font-size:14px ;
  li{
    text-align:center ;
    padding:5px 50px;
    /* border-right:1px solid gray ; */
   
    &:last-child{
      border-right:none ;
    }
  }
  li:first-child{
    font-style:italic ;
  }
  li:nth-child(2){
    font-style:italic ;
    cursor: pointer;
    transition:var(--transition) ;
    &:hover{
      color: var(--clr-red-light);
    }
  }

  .search-box{
      display:inline ;
      justify-content:space-between ;
      align-items:center ;
    .form-control{
      background:transparent ;
      color:var( --clr-grey-5) ;
      border:transparent ;
      
    }

    input{
      border:0 ;
      &::placeholder{
        /* color:var( --clr-grey-5) ; */
      }
      &:focus{
        border:0 ;
        outline:0 ;
      }
    }

    button{
      background:transparent ;
      color:var( --clr-grey-5) ;
      border:transparent ;
    }
  }
 }

 
@media screen and (min-width: 768px) {
 ul{
  li{
    border-right:1px solid gray ;
  }
 }
}
`
export default TopNav