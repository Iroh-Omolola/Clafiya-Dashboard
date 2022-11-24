import Link from "next/link";
import { Notification, Profile, Search } from "./assets";

export const NavBar =()=>{
    return (
      <div
        className={`flex fixed bg-background_color top-0 right-0 left-0 w-full g:px-5 xl:px-10 h-[88px] items-center justify-between`}
      >
        <div className="flex ml-[70px] xs:ml-[100px] lg:ml-[300px]  xl:ml-[270px] 2xl:ml-[280px] bg-white px-3 rounded-3xl mt-2 white xs:w-[200px] md:w-[350px] ">
          <Search className="w-[13px] h-[13px] mt-5  transform -translate-y-1/2" />
          <input
            type="text"
            name="password"
            placeholder="Search"
            className="bg-gray-50 outline-none block  dark:bg-black dark:border-dark-border focus:ring-0 focus:border-none focus:outline-none border-none ring-0  text-[#A0A4A8] px-[15px] text-[13px] font-[300] rounded-lg  w-20 xs:w-full p-2"
            required
          />
        </div>
        <div className="flex space-x-3 justify-between mr-[15px] xs:mr-[0px] lg:mr-[14px]  md:mr-[2px] xl:mr-[2px] 2xl:mr-[5px] ">
          <div className="relative mt-2">
            <div>
              <Notification />
            </div>
            <div className="absolute w-[12px] bottom-5 left-4 h-[12px] bg-red flex justify-center items-center rounded-[50%] ">
              <p className="text-[10px] text-white ">9</p>
            </div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
            <Link href="/profile">
              <a className="w-[40px] h-[40px] flex rounded-full object-contain gap-1 items-center mx-1 xs:mx-6 cursor-pointer">
                <Profile />
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
}