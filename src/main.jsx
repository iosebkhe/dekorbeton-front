import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Index from "./routes/index";
import ErrorPage from './ErrorPage';
import './index.css';
// Supports weights 100-900
import '@fontsource-variable/noto-sans-georgian';
import Products from './routes/products';
import AboutUs from './routes/aboutUs';
import Contact from './routes/contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
