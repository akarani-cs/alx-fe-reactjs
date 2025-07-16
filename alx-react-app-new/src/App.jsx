import WelcomeMessage from './WelcomeMessage.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import MainContent from './MainContent.jsx'
import Footer from './Footer'
import UserProfile from './Userprofile.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Footer />
        
      </div>
     
      
        
     
    </>
  )
}

export default App
