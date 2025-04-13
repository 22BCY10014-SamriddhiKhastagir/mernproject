import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // TODO: Add API call here
    console.log('Logging in with:', { email, password })
    navigate('/dashboard') // temporarily redirect
  }

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ margin: '10px', width: '100%', padding: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ margin: '10px', width: '100%', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
      </form>
    </div>
  )
}

export default Login
