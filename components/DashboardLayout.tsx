import { ReactNode} from "react";
import { DashboardSideBar } from "./DashboardSideBar";
import { NavBar } from "./NavBar";

type DashboardLayoutProps = {
    children?: ReactNode;
}

export const DashboardLayout = ({children}:DashboardLayoutProps) => {

    return (
      <div className="h-[100vh] w-[100%]  bg-background_color  relative flex">
        <div className="h-[100vh] z-[100]  bg-white shadow-xl shadow-shadow_color  flex flex-col justify-between ">
          <DashboardSideBar />
        </div>
        <div className="w-full  overflow-x-hidden px-3 ">
          <div className="flex-col">
            <div className="top-0 w-full  mb-10   h-[88px] justify-between">
              <NavBar />
            </div>
            <div className="mt-5 mx-2  ">
              <div className="lg:px-5 xl:px-10  w-full overflow-hidden">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}