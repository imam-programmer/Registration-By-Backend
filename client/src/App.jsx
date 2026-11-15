import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Root/RootLayout';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: RegistrationPage },
      { path: "/login", Component: LoginPage },
    ],
  },
]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App