import { useState, useEffect } from "react";
import { useAuthentication } from "../hooks/useAuthentication";
import LoadingCircle from "./LoadingCircle";

const FormSignUp= () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(false)
  const {createUser, error : authError, loading} = useAuthentication()

  const handleSubmit = (e)=>{
    e.preventDefault()

    const user = {
      name,
      email,
      password,
    }

    if(password !== confirmPassword){
      setError('Error : The passwords are not the same')     
      return
    }

    const res = createUser(user)

    console.log(res)

  }
  useEffect(() => {
    if(error){
      console.log(error)
    }
  }, [error])

  useEffect(()=>{
    setError(authError)
  }, [authError])

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          placeholder="Type your name"
          type="text"
          name="name"
          id="displatName"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          placeholder="Type your email"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Type your password"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e)=> setPassowrd(e.target.value)}
        />
        <label htmlFor="password">Confirm password</label>
        <input
          placeholder="Confirm your password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e)=> setConfirmPassword(e.target.value)}
        />
        {!loading && <div className="btnDiv"><button>Sign Up</button></div>}
        {loading && <LoadingCircle/>}
      </form>
      {error && <span className="error"><p>{error}</p></span>}
      
    </div>
  );
};

export default FormSignUp;
