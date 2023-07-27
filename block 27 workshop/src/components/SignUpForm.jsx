import { useState } from "react";

//sign up form component
//components have a return statement
//export default goes first

export default function SignUpForm( {setToken}) {
      //create 3 state variables
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);

    //async function to take an event, call preventDefault to prevent the page from refreshing
     async function handleSubmit(e) {
         e.preventDefault();
   try {
    const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
       { 
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
        }
    )
    const data = await response.json()

    setToken(data.token)

    setUsername('')
    setPassword('')

   } catch (err) {
    setError(err);
   }
  }
    return (
        <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
       Username:
        <input 
        value={username} 
        onChange={(e) => setUsername (e.target.value)}
        />
        </label>
        <label>
        Password: 
        <input 
        value={password} 
        onChange={(e) => setPassword (e.target.value)} 
        />
        </label>
        <button>Submit</button>
    </form> 
    </>
    )
}
