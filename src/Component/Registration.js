// import { useState } from 'react';
import { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Registration()
{
   const [values,setValues] = useState({
      name : "",
      email:"",
      password :"",
      confirmPassword : ""
   })
   
   const regirterUser = (e) => {
      e.preventDefault();
      axios.get(`http://localhost:3000/users?email=${values.email}`)
      .then(res => {
        if (res.data.length > 0) {
          // User already registered
          alert('User already registered. Redirecting to login page.');
          navigate('/login');
        } else {
          // User not registered, proceed with registration
          axios.post('http://localhost:3000/users', values)
            .then(res => {
              console.log(res);
              alert('Registration successful. Redirecting to login page.');
              navigate('/login');
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
   }

   const navigate = useNavigate();
   return<div style={{ backgroundColor: '#856cf7', height: '100vh' }}>
    <div className="d-flex w-100 v-50 justify-content-center align-items-center">
     <div className="w-50 mt-5 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <h1 className='text-center'>Registration Form</h1>
      <Form className='d-grid gap-2 ' >
      <Form.Group className="mb-3" onSubmit={regirterUser}>
          <Form.Control type='text' placeholder='Enter Your Full Name'  onChange={e=>setValues({...values,name:e.target.value})}required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type='email' placeholder='Enter Your Email'  onChange={e=>setValues({...values,email:e.target.value})}required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type=' password' placeholder='Enter Your Password' onChange={e=>setValues({...values,password:e.target.value})} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type='password' placeholder='Enter Your Comfirm Password'  onChange={e=>setValues({...values,confirmPassword:e.target.value})} required></Form.Control>
        </Form.Group>
        <Button type='submit'  className='btn-lg' style={{ backgroundColor: '#856cf7', borderColor: '#856cf7' }} onClick={()=>navigate('/App.js')}>Submit</Button>
        <Button type='button' className='btn-lg'style={{ backgroundColor: '#856cf7', borderColor: '#856cf7' }}onClick={()=>navigate('/login')}>Login</Button>
       </Form>
      </div>    
    </div>
   </div>
}