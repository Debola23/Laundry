import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { How } from './Components/HowItWorks/How.jsx';
import { Price } from './Components/PricesAndPlans/Price.jsx';
import { Book } from './Components/Book/Book.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
{
  path: "/howitworks",
  element: <How/>,
},
{
  path: "/price",
  element: <Price/>,
},
{
  path: "/book",
  element: <Book/>,
},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} /> 
  </StrictMode>,
)
