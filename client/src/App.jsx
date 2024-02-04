import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Editor from './components/Editor'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { v4 as uuid} from "uuid";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to={`/docs/${uuid()}`}></Navigate>}></Route>
        <Route path='/docs/:id' element = { <Editor></Editor>} ></Route>
      </Routes>
    </Router>
  )
}

export default App
