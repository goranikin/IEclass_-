import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <></>
    },
    {
      path: "/detail",
      element: <></>
    }
  ])

  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
