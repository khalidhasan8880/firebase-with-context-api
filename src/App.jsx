import { useContext, useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import { Outlet } from 'react-router-dom'
import { AuthContext } from './component/AuthProvider'

function App() {
  const [count, setCount] = useState(0)
const user = useContext(AuthContext)

  return (
    <div className="App">
      <Nav></Nav>
    {/* <h1>{user&& <span>{user.displayName}</span>}</h1> */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
