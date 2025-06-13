import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from "./components/home";
import About from "./components/about";
import Feature from "./components/feature";
import Login from "./components/login";
import Signup from "./components/signup";
// Layout wrapper to include Navbar on every page
const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>
    
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>
  },
  {
    path: "/feature",
    element: <Layout><Feature /></Layout>
  },
  {
    path: "/login",
    element: <Layout><Login /></Layout>
  },
  {
    path: "/signup",
    element: <Layout><Signup /></Layout>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
