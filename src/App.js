import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage  from './components/HomePage'
import NavBar from './components/NavBar' 
// import React from 'react'
import ProductPage from './components/ProductPage' 
import Checkout from './components/Checkout' 
import SearchResults from './components/SearchResults' 
const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/search" element={<SearchResults/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App