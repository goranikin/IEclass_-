interface ModalProps {
  show: boolean;
  onClose: () => void;
  subjectName: string | null;
}

export const Modal1= ({show, onClose, subjectName}: ModalProps) => {

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="text-black bg-white p-6 rounded-lg w-[1200px] h-[800px]">
        <p className="text-2xl mb-4">과목: <span className="font-bold">{subjectName}</span></p>
        <div className="flex justify-center h-[650px]">
          <div className="bg-red-200 flex-grow 1">영상 강의 목록</div>
          <div className="bg-blue-200 flex-grow 1">과제 목록</div>
        </div>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">
          닫기
        </button>
      </div>
    </div>
  )
};