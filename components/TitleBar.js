function TitleBar() {
  return (
    <div className="bg-[#F3EEF8] border-b-[1px] border-[#D2CED7] rounded-t-xl">
      <div className="grid grid-cols-[1fr_2fr_1fr] items-center">
        <div className="flex space-x-2 p-3">
          <div className="bg-[#FE5F57] w-3 h-3 rounded-full"></div>
          <div className="bg-[#FEBB2E] w-3 h-3 rounded-full"></div>
          <div className="bg-[#26C940] w-3 h-3 rounded-full"></div>
        </div>
        <div className="flex items-center place-self-center text-sm text-[#4B4553] border-[1px] border-[#d2cfd8] my-2 rounded-md">
          <div className="px-2 py-[1px] border-r-[1px] border-[#d2cfd8] rounded-md bg-[#E5E1EC] text-black">About</div>
          <div className="px-2 py-[1px] border-r-[1px] border-[#d2cfd8]">Skills</div>
          <div className="px-2 py-[1px] border-r-[1px] border-[#d2cfd8]">Projects</div>
          <div className="px-2 py-[1px]">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
