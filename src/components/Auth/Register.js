import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineUserAdd, AiOutlineLogin } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Register = () => {

  const [formData, setFormData] = useState({
    fname: '', lname: '', email: '', password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <Wrapper>
      <div className='page-100'>
        <div className="container">
          <div className="row">
            <h3 className='text-center text-md-start text-uppercase'><AiOutlineUserAdd size={35} /> Register</h3>
            <form onSubmit={handleSubmit}  className='shadow py-4'>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text"
                  name='fname'
                  className="form-control"
                  onChange={handleChange}
                  value={formData.fname}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text"
                  name='lname'
                  className="form-control"
                  onChange={handleChange}
                  value={formData.lname}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text"
                  name='email'
                  className="form-control"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password"
                  name='password'
                  className="form-control"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>

              <div className="mb-3 form-check">

                <label className="form-check-label" >Already a member ? <Link to='/login'>Login</Link></label>
              </div>


              <button type="submit" className="btn btn-danger shadow rounded-0 text-uppercase"><AiOutlineLogin /> Sign up</button>
            </form>

          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  input{
    border-radius:0;
   
    &:focus{
      outline: none;
      box-shadow: none; 
      
    }
  }
`

export default Register