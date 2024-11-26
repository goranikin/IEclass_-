import {useState} from "react";
import {useNavigationRoute} from "../../hooks/useNavigationRoute.ts";

export const Sidebar2 = () => {
  const [isSiren, setIsSiren] = useState(true)

  const toggleSiren = () => {
    setIsSiren(!isSiren)
  };

  const {toMain} = useNavigationRoute()


  return (
    <div className="bg-blue-900 text-white w-20 py-4
    flex flex-col items-center">
      <div className="mb-20 cursor-pointer"  onClick={toMain}>
        <img src="/univ_logo.png" alt="univLogo"/>
      </div>

      <div className="p-2 mb-20">
        <img
          className="rounded-full"
          src="https://myetl.snu.ac.kr/images/thumbnails/5011072/laHb5gubEWBbZ1801s11jNc8D7gvdWiHsQJ74BPU"
          alt="최장혁(202#####53)"/>
      </div>

      <div className="mb-[100px] p-1">
        <img src="/calender.png" alt="calender"/>
      </div>

      <div className="">
        <span
          className="hover:cursor-pointer"
          onClick={toggleSiren}>
          {isSiren ? (<img src="/siren_on.png" alt="sirenOn"/>) : (<img src="/siren_off.png" alt="sirenOff"/>)}
        </span>
      </div>

    </div>
  )
}