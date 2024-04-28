import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let myobj = {
  //   username: "abhishek",
  //   age: 25
  // }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>Tailwind test.</h1>

      <Card username="chai aur code" btnText="click me"/>
      <Card username="abhishek" btnText="visit me"/>

    </>
  )
}

export default App