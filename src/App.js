import { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import ProtectedForm from './components/ProtectedForm'
import 'antd/dist/antd.css'

export default function App() {
  const [token, setToken] = useState()
  const [returningUser, setReturningUser] = useState(false)
  if(!token) {
    return (
      <>
        {!returningUser
          ? <Signup setToken={setToken} setReturningUser={setReturningUser} />
          : <Login setToken={setToken} setReturningUser={setReturningUser} />
        }
      </>
    )
  }
  return <ProtectedForm token={token} />
}
