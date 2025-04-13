import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>🛠️ Project Management Tool</h1>
      <p>Plan, Track, and Collaborate on Projects Seamlessly.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register" style={{ marginLeft: '10px' }}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
