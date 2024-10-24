import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Payment from './components/Payment.jsx'
import NotFound from './components/NotFound.jsx'
import { RouterProvider } from 'react-router-dom'
import DisplayShoes from './components/DisplayShoes.jsx'
import { CartProvider } from './components/CartContext.jsx'


const router = createBrowserRouter([
  {
    element: <CartProvider> {/* Wrap App with CartProvider */}
      <App />
    </CartProvider>,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <DisplayShoes />,
      },
      {
        path: '/payment',
        element: <Payment />,
      }

    ],
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
