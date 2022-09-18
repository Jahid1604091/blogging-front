import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineUser, AiOutlineLogin } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../utils/constants';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
const Login = ({setAlert}) => {

    const [formData, setFormData] = useState({
        email: '', password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const config = {
                headers:{
                    'Content-Type':'application/json'
                }
            }

            const body = JSON.stringify(formData)
            const {data} = await axios.post(`${url}/auth`,body,config)
            //success
            setAlert('Logged in','success')
        } catch (error) {
            //fail or error
            const errors = error.response.data.errors || error.response.data
            errors.map(err=>setAlert(err.msg,'danger'))
            // console.log(errors)
        }
       
    }

    return (
        <Wrapper>
            <div className='page-100'>
                <div className="container">
                    <div className="row">
                        <h3 className='text-center text-md-start text-uppercase'><AiOutlineUser size={35} /> Login</h3>
                        <form onSubmit={handleSubmit} className='shadow py-4'>
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

                                <label className="form-check-label">Not a member ? <Link to='/register'>Register</Link></label>
                            </div>


                            <button type="submit" className="btn btn-danger shadow rounded-0 text-uppercase"><AiOutlineLogin /> Login</button>
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
Login.propTypes = {
    setAlert:PropTypes.func.isRequired
}
export default connect(null,{setAlert}) (Login);