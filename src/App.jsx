import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      {!user ? (
        <LoginForm onLogin={setUser} />
      ) : (
        <HomePage />
      )}
    </div>
  )
}

export default App