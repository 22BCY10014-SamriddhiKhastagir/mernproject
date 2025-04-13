import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    // TODO: Add API call here
    console.log('Registering:', { name, email, password })
    navigate('/login') // temporarily redirect
  }

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', textAlign: 'center' }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ margin: '10px', width: '100%', padding: '10px' }}
        />
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
        <button type="submit" style={{ padding: '10px 20px' }}>Register</button>
      </form>
    </div>
  )
}

export default Register
