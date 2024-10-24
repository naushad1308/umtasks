import './App.css'
import DisplayShoes from './components/DisplayShoes'
import Header from './components/Header'
import { CartProvider } from './components/CartContext';
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />

      {/* <Header />
      <DisplayShoes /> */}
    </>
  )
}

export default App
