
const subjects = [
  { name: '물리학2', color: 'bg-purple-600' },
  { name: '물리학실험2', color: 'bg-blue-900' },
  { name: '산업공학의 이해', color: 'bg-blue-500' },
  { name: '수학2', color: 'bg-sky-500' },
  { name: '수학연습2', color: 'bg-green-500' },
  { name: '죽음의 과학적 이해', color: 'bg-green-300' },
  { name: '통계학', color: 'bg-yellow-500' },
  { name: '학생자율세미나', color: 'bg-red-500' },
];

export const SubjectCards = ({
  openModal,
                             }: {openModal: (subjectName: string) => void}) => {
  return (
    <>
      <div className='grid grid-cols-[repeat(4,minmax(150px,1fr))] gap-px'>
        {subjects.map((subject) => (
          <div key={subject.name} className={`${subject.color}
          text-3xl text-white p-[20px] h-[150px] text-center rounded-md m-1
          flex items-center justify-center
          cursor-pointer duration-200 hover:bg-opacity-60 
          `}
          onClick={() => openModal(subject.name)}>
            <div className="bg-white text-black px-4 py-2 rounded-md">
              {subject.name}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}