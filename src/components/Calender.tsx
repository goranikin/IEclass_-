
export const Calender = ({
                           openModal,
                         }: {openModal: (subjectName: string) => void}) => {
  return (
    <div className="mb-7">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-3xl font-bold text-black">2024년 12월 1-2주차</p>
        <div className="flex space-x-3 items-center">
          <button className="bg-gray-500 px-3 py-1 rounded text-3xl">&larr;</button>
          <button className="bg-gray-500 px-3 py-1 rounded text-3xl">&rarr;</button>
          <button className="bg-gray-500 px-3 py-1 rounded text-3xl">+</button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-[repeat(7,minmax(0,1fr))]
      gap-px bg-white border border-gray-300
      text-center text-black text-xl">

        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day} className='py-[15px] font-semibold'>{day}</div>
        ))}

        {[...Array(14)].map((_, index) => (
          <div key={index} className='p-[10px] border h-[150px]'>
            {<span className={`${(index + 1) % 7 === 0 ? "text-blue-600" : ""} ${(index + 1) % 7 === 1 ? "text-red-600" : ""}`}>{index + 1}</span>}

            {index + 1 === 5 && (
              <>
                <div className="border-sky-500 border-[2px] bg-sky-500 bg-opacity-60 m-0.5 text-[14px]
                cursor-pointer duration-200 hover:bg-opacity-30"
                     onClick={() => openModal("수학2")}
                >
                  영상 시청 마감 09:30
                </div>
                <div className="border-purple-600 border-[2px] bg-purple-600 bg-opacity-60 m-0.5 text-[14px]
                cursor-pointer duration-200 hover:bg-opacity-30"
                     onClick={() => openModal("물리학2")}
                >
                  과제 마감 15:00
                </div>
                <div className="border-blue-900 border-[2px] bg-blue-900 bg-opacity-60 m-0.5 text-[14px]
                cursor-pointer duration-200 hover:bg-opacity-30"
                     onClick={() => openModal("물리학실험2")}
                >
                  과제 마감 23:59
                </div>
              </>
            )}

            {index + 1 === 9 && (
              <>
                <div className="border-yellow-500 border-[2px] bg-yellow-500 bg-opacity-60 m-0.5 text-[14px]
                cursor-pointer duration-200 hover:bg-opacity-30"
                     onClick={() => openModal("통계학")}
                >
                  과제 마감 15:00
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}