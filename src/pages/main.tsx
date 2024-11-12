import {Sidebar} from "../components/Sidebar.tsx";
import {Calender} from "../components/Calender.tsx";
import {SubjectCards} from "../components/SubjectCards.tsx";
import {useState} from "react";
import {Modal1} from "./cards/Modal1.tsx";

export const MainPage = () => {

  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const openModal = (subjectName: string) => {
    setSelectedSubject(subjectName);
  };

  const closeModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="flex h-screen w-screen bg-white">
      <Sidebar/>
      <div className="flex-grow p-6">
        <Calender/>
        <SubjectCards openModal={openModal}/>
      </div>
      <Modal1 show={!!selectedSubject} onClose={closeModal} subjectName={selectedSubject} />
    </div>
  )
}