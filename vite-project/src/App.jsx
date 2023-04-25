import { useState } from 'react'
import './App.css'
import Header from './Header'
import Persons from './Persons'
import Counter from '../../Counter'

function App() {
  const [globalCount, setGlobalCount] = useState(0)

  const handleGlobalClick = () => setCount(count+1)

  let persons = ['Ola', 'Morten', 'Daniel']
  let numbers = [1, 2, 3]
  return (
    <div className="App">
      <Header />
      <Persons number = {numbers[0]} person={persons[0]} />
      <Persons number = {numbers[1]} person={persons[1]} />
      <Persons number = {numbers[2]} person={persons[2]} />
      <Counter handleGlobalClick={handleGlobalClick} globalCount={globalCount} />
      <Counter handleGlobalClick={handleGlobalClick} globalCount={globalCount} />
      <Counter handleGlobalClick={handleGlobalClick} globalCount={globalCount} />s
    </div>
  )
}

export default App
