import { useState } from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <div className="wrapper">
          <h2>歡迎 {user} 登入！</h2>
        </div>
      )}
    </div>
  )
}

export default App