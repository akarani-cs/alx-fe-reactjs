import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserProfile />
      </div>
    
    </>
  )
}

export default App
