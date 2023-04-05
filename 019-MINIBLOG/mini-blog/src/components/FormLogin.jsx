import React from 'react'

const FormLogin = () => {
  return (
    <div className='form'>

      <form>
        <label htmlFor="email">Email</label>
        <input  placeholder='Type your email' type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input  placeholder='Type your password' type="password" name="password" id="password" />
        <div className="btnDiv"><button>Enter</button></div>
      </form>
    </div>
  )
}

export default FormLogin