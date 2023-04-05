import React from 'react'

const FormSignIn = () => {
  return (
    <div className='form'>

      <form>
        <label htmlFor="email">Email</label>
        <input  placeholder='Type your email' type="email" name="email" id="email" />
        <label htmlFor="password">password</label>
        <input  placeholder='Type your password' type="password" name="password" id="password" />
        <label htmlFor="password">password</label>
        <input  placeholder='Confirm your password' type="password" name="confirmPassword" id="confirmPassword" />
        <div className='btnDiv'><button>Register</button></div>
      </form>
    </div>
  )
}

export default FormSignIn