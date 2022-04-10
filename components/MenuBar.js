import { DiApple } from "react-icons/di";
import { FaWifi } from "react-icons/fa";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BsBatteryHalf } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";

function MenuBar() {
  return (
    <div className="w-ful p-1 px-6 mx-auto bg-fuchsia-100/70 backdrop-blur-lg">
      <div className="flex justify-between w-100 text-[0.8rem] truncate gap-x-10">
        <div className="flex gap-x-5 items-center">
          <DiApple className="text-xl"/>
          <span className="font-bold">Code</span>
          <span>Edit</span>
          <span>Selection</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Window</span>
          <span>Help</span>
        </div>
        <div className="flex gap-x-5 items-center">
          <BsPlayCircle className="text-sm"/>
          <FaWifi className="text-base"/>
          <BsFillVolumeUpFill className="text-lg"/>
          <span className="flex items-center gap-x-1 text-xs">56% <BsBatteryHalf className="text-xl"/></span>
          <span>Sun 10 Apr 13:19</span>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
