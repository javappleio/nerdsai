import './App.css'
import { Home } from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Legal } from './Legal'
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/legal' element={<Legal />}></Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
