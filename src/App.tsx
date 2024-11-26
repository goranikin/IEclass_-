import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ExpPage1} from "./pages/experiements/exp1.tsx";
import {MainPage} from "./pages";
import {ExpPage2} from "./pages/experiements/exp2.tsx";
import {ExpPage3} from "./pages/experiements/exp3.tsx";
import {ExpPage4} from "./pages/experiements/exp4.tsx";

function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>
    },
    {
      path: "/1",
      element: <ExpPage1></ExpPage1>
    },
    {
      path: "/2",
      element: <ExpPage2></ExpPage2>
    },
    {
      path: "/3",
      element: <ExpPage3></ExpPage3>
    },
    {
      path: "/4",
      element: <ExpPage4></ExpPage4>
    },
  ])

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
