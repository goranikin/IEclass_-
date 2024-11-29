import {useEffect, useState} from "react";
import {useNavigationRoute} from "../../hooks/useNavigationRoute.ts";

export const Sidebar4 = () => {
  const [isSiren, setIsSiren] = useState(true)

  const [startTime, setStartTime] = useState<number>(performance.now());
  const [, setElapsedTime] = useState<number>(0);

  const toggleSiren = () => {
    if (isSiren) {
      // Siren이 켜져있을 때 끄면서 시간 계산
      const timeSpent = (performance.now() - startTime) / 1000;
      setElapsedTime(timeSpent);
      alert(`소요 시간: ${timeSpent}초`);
    } else {
      setStartTime(performance.now());
    }
    setIsSiren(!isSiren)
  };

  const {toMain} = useNavigationRoute()


  useEffect(() => {
    setStartTime(performance.now());
  }, []);


  return (
    <div className="bg-blue-900 text-white w-20 py-4
    flex flex-col items-center">
      <div className="mb-20">
        <span
          className="hover:cursor-pointer"
          onClick={toggleSiren}>
          {isSiren ? (<img src="/siren_on.png" alt="sirenOn"/>) : (<img src="/siren_off.png" alt="sirenOff"/>)}
        </span>
      </div>

      <div className="mb-20 cursor-pointer" onClick={toMain}>
        <img src="/univ_logo.png" alt="univLogo"/>
      </div>

      <div className="p-2 mb-20">
        <img
          className="rounded-full"
          src="https://myetl.snu.ac.kr/images/thumbnails/5011072/laHb5gubEWBbZ1801s11jNc8D7gvdWiHsQJ74BPU"
          alt="최장혁(202#####53)"/>
      </div>

      <div className="mb-[250px] p-1">
        <img src="/calender.png" alt="calender"/>
      </div>


    </div>
  )
}