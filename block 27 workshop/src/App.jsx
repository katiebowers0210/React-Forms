import './App.css'
import { useState } from 'react'
//importing new components
import Authenticate from './components/Authenticate.jsx'
import SignUpForm from './components/SignUpForm.jsx'

function App() {

  const [token, setToken] = useState(null)

  console.log('Token:', token)
  return (
    <>
     <SignUpForm setToken={setToken} />
     <Authenticate token={token}/>
    </>
  )
}

export default App
