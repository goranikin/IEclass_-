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
        <p className={`${subjectName === '통계학' ? 'bg-yellow-500' : 'bg-blue-900'} text-2xl mb-4 border-gray-400 border-2`}>과목: <span className="font-bold">{subjectName}</span></p>
        <div className="flex justify-center h-[650px]">
          <div className="flex-grow border-r-gray-400 border-r-2">
            <p className="font-bold mb-3 p-3 border-gray-400 border-b-2">영상 강의 목록</p>
            <p className="border-gray-200 border-t-[1px] border-b-[1px] p-3
            flex justify-between">
              <span className="ml-10">
                {subjectName} 강의 1: 2024-09-03
              </span>
              <span className="mr-5 cursor-pointer">
                강의 보기
              </span>
            </p>
            <p className="border-gray-200 border-t-[1px] border-b-[1px] p-3
            flex justify-between">
              <span className="ml-10">
                {subjectName} 강의 2: 2024-09-05
              </span>
              <span className="mr-5 cursor-pointer">
                강의 보기
              </span></p>
            <p className="border-gray-200 border-t-[1px] border-b-[1px] p-3
            flex justify-between">
              <span className="ml-10">
                {subjectName} 추석 연휴 보충 강의: 2024-09-17
              </span>
              <span className="mr-5 cursor-pointer">
                강의 보기
              </span>
            </p>
            <p className="border-gray-200 border-t-[1px] border-b-[1px] p-3
            flex justify-between">
              <span className="ml-10">
                {subjectName} 개교기념일 보충 강의: 2024-10-08
              </span>
              <span className="mr-5 cursor-pointer"
                    onClick={() => {

                    }}
              >
                강의 보기
              </span>
            </p>
          </div>
          <div className="flex-grow">
            <p className="font-bold mb-3 p-3 border-gray-400 border-b-2">영상 강의 목록</p>
            <p className="border-gray-200 border-t-[1px] border-b-[1px] p-3
            flex justify-between">
              <span className="ml-10">
                {subjectName} 과제 1: 마감기한 D-5
              </span>
              <span className="mr-5 cursor-pointer">
                제하기
              </span>
            </p>
          </div>
        </div>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">
          닫기
        </button>
      </div>
    </div>
  )
};