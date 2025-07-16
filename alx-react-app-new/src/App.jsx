import WelcomeMessage from './WelcomeMessage.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer'
import UserProfile from './components/Userprofile.jsx'
import Counter from './components/Counter.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Counter />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Footer />
        
      </div>
     
      
        
     
    </>
  )
}

export default App
