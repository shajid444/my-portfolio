import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main';
import Skill from './Component/Skill/Skill';
import About from './Component/About/About';
import Education from './Component/Education/Education';
import Contact from './Component/Contact/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='bg-gradient-to-r from-violet-500 to-fuchsia-600 bg-opacity-55'>
   <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
 </div>
)
