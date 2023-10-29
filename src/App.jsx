import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateProducts from './components/CreateProducts'
import UpdateProducts from './components/UpdateProducts'
import Products from './components/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products /> }></Route>
        <Route path='/create' element={<CreateProducts />}></Route>
        <Route path='/update/:id' element={<UpdateProducts />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
