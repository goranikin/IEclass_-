
export const Calender = () => {
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
            <div key={index} className='p-[10px] border h-[200px]'>
              {index +1}
            </div>
        ))}
      </div>
    </div>
  )
}