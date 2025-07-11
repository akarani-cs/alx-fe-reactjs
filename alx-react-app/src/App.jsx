import WelcomeMessage from './WelcomeMessage.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import MainContent from './MainContent.jsx'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
        
      </div>
     
      
        
     
    </>
  )
}

export default App
