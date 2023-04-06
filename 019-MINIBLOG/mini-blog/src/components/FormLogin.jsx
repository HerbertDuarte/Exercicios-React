import {useState} from "react";
import '../index.css'

const FormLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassowrd] = useState();

  const [error, setError] = useState(false)

  const handleSubmit = (e)=>{

    e.preventDefault()

    const user = {
      email,
      password,
    }

    console.log(user)
  }

  return (
    <div className="form">

      <p className="text">fill in your data to access your account:</p>
      <form onSubmit={handleSubmit}>
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
        <div className="btnDiv">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
