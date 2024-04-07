import { useState } from 'react'
import Navigation from './componets/navigation/Navigation'
import Home from './componets/home/Home'
import About from './componets/about/About'


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
     <Navigation></Navigation>
     <About></About>
    </>
  )
}

export default App
