import { useState } from 'react'
import Layout from './layout/Layout'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' whitecolor'>
      <Layout/>
    </div>
  )
}

export default App
