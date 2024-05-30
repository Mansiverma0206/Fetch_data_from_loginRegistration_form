import { Button, Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
export default function Login()
{
   const navigate = useNavigate();
   return<div style={{ backgroundColor: '#856cf7', height: '100vh' }}>
    <div className="d-flex w-100 v-100 justify-content-center align-items-center ">
     <div className="w-50 mt-5 border bg-white shadow px-5 pt-3 pb-5 rounded ">
      <h1 className='text-center'>Login Form</h1>
      <Form className='d-grid gap-2 ' >
        <Form.Group className="mb-3">
          <Form.Control type='email' placeholder='Enter Your Email' required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type=' password' placeholder='Enter Your Password'required></Form.Control>
        </Form.Group>
        <Button type="submit" className="btn-lg" style={{ backgroundColor: '#856cf7', borderColor: '#856cf7' }}onClick={()=>navigate("/fb")}>Submit</Button>
        <Button type="submit" className="btn-lg" style={{ backgroundColor: '#856cf7', borderColor: '#856cf7' }} onClick={()=>navigate("/fp")}>FrontPage</Button>
        
       </Form>
      </div>    
    </div>
   </div> 
}