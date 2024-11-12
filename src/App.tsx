import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "./pages/main.tsx";

function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>
    },
    {
      path: "/detail",
      element: <></>
    }
  ])

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
