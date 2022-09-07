import { useState } from 'react'
import './App.css'
import RuleOfHook from './ruleOfHook'
import User from './User'

function App() {
  const [isShow, setIsShow] = useState(true)
  return (
    <div className='App'>
      {/* {isShow && <User />}
      <button onClick={() => setIsShow((prevState) => !prevState)}>
        Change isShow
      </button> */}
      <RuleOfHook />
    </div>
  )
}

export default App
