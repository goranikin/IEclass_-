import {useNavigationRoute} from "../hooks/useNavigationRoute.ts";

export const MainPage = () => {
  const {toExp1, toExp2, toExp3, toExp4} = useNavigationRoute()

  return (
    <>
      <div className="bg-white p-3 space-x-2">
        <button onClick={toExp1} className="p-3 text-2xl">exp1</button>
        <button onClick={toExp2} className="p-3 text-2xl">exp2</button>
        <button onClick={toExp3} className="p-3 text-2xl">exp3</button>
        <button onClick={toExp4} className="p-3 text-2xl">exp4</button>
      </div>
    </>
  )
}