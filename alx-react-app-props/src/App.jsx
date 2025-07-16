import WelcomeMessage from './WelcomeMessage.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Profilepage from './ProfilePage.jsx'
import UserContext from './components/UserContext.js'


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <Profilepage />
    </UserContext.Provider>
  );
}


export default App
