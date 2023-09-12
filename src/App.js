import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import Support from './pages/Support'
import Course from './pages/Course';
import CoursePage from './pages/CoursePage'
import { loader as courseLoader } from './pages/Course'

const routes = createBrowserRouter([
  {
    path: "/", element: <RootLayout></RootLayout>,
    children: [
      { path: "", element: <Home></Home> },
      { path: "/course/", element: <Course></Course>, loader: courseLoader },
      { path: "/support", element: <Support></Support> },
      { path: "/course/:courseId", element: <CoursePage></CoursePage> }
    ]
  },
]);

export default function App() {
  return <RouterProvider router={routes}></RouterProvider>

}

