import React,{useState} from 'react'
import './Signup.css'

function Signup() {
  const [formData,SetFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',

  })
  const handleInputChange=(event)=>{
    const {name,value}=event.target
    SetFormData((prevData)=>({...prevData,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
  console.log(formData);
  }
  return (
    <div className='signup-card'>
      <h1>Registration Form</h1>
      <form action=""  onSubmit={handleSubmit}>

        <label htmlFor="">First Name</label>
        <input type="text" placeholder='First Name' value={formData.firstName} name='firstName' onChange={(event)=>handleInputChange(event)}/>
        <label htmlFor="">Last Name</label>
        <input type="text" placeholder='Last Name' value={formData.lastName} name='lastName' onChange={(event)=>handleInputChange(event)}/>
        <label htmlFor="">Email Name</label>
        <input type="email" placeholder='Email Name' value={formData.email} name='email' onChange={(event)=>handleInputChange(event)}/>
        <label htmlFor="">Password Name</label>
        <input type="password" placeholder='Password Name' value={formData.password} name='password'  onChange={(event)=>handleInputChange(event)}/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
