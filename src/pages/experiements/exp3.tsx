import {Calender} from "../../components/Calender.tsx";
import {SubjectCards} from "../../components/SubjectCards.tsx";
import {useState} from "react";
import {Modal1} from "../cards/Modal1.tsx";
import {Sidebar3} from "../../components/sidebars/Sidebar3.tsx";

export const ExpPage3 = () => {

  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const openModal = (subjectName: string) => {
    setSelectedSubject(subjectName);
  };

  const closeModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="flex h-screen w-screen bg-white">
      <Sidebar3/>
      <div className="flex-grow p-6">
        <Calender openModal={openModal}/>
        <SubjectCards openModal={openModal}/>
      </div>
      <Modal1 show={!!selectedSubject} onClose={closeModal} subjectName={selectedSubject} />
    </div>
  )
}