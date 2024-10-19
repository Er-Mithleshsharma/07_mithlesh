import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import List from "./components/List.jsx"
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Removed `router` from import

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/list",
    element:[<List/>]
  }
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={appRouter} />
  // </StrictMode> // Removed the trailing comma here
);
