import {useState} from "react";

export const Sidebar = () => {
  const [isSiren, setIsSiren] = useState(false)

  const toggleSiren = () => {
    setIsSiren(!isSiren)
  };

  return (
    <div className="bg-blue-900 text-white w-20 py-4
    flex flex-col items-center justify-between">
      <div className="mb-4">
        <img src="/univ_logo.png" alt="univLogo" />
      </div>

      <div className="p-2 mb-4">
        <img
          className="rounded-full"
          src="https://myetl.snu.ac.kr/images/thumbnails/5011072/laHb5gubEWBbZ1801s11jNc8D7gvdWiHsQJ74BPU" alt="최장혁(202#####53)"/>
      </div>

      <div className="mb-4">
        calender
      </div>

      <div className="mb-4">
        <button
        onClick={toggleSiren}>
          {isSiren ? (<img src="/siren_on.png" alt="sirenOn" />) : (<img src="/siren_off.png" alt="sirenOff" />)}
        </button>
      </div>

    </div>
  )
}