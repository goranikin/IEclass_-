import {Sidebar} from "../components/Sidebar.tsx";
import {Calender} from "../components/Calender.tsx";
import {SubjectCards} from "../components/SubjectCards.tsx";

export const MainPage = () => {

  return (
    <div className="flex h-screen w-screen bg-white">
      <Sidebar/>

      <div className="flex-grow p-6">
        <Calender/>
        <SubjectCards/>
      </div>
    </div>
  )
}