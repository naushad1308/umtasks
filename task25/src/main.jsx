import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'
import Payment from './components/Payment.jsx'
import { createBrowserRouter } from 'react-router-dom'
import DisplayShoes from './components/DisplayShoes.jsx'
import { RouterProvider } from 'react-router-dom'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    element:
      <Provider store={store}>
        <App />
      </Provider>
    ,
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
