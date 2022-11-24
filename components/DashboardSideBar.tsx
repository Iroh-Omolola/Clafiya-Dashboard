import Link from "next/link";
import { useRouter } from "next/router";
import routes from "../utils/routes";
import { Appointment, Card, Dashboard, Department, HealthWorker, Logo, LogoMobile, PatientNav, Question } from "./assets";
import { BarLink } from "./BarLink";

interface Props {
  exact?: boolean | false;
}
const BAR_ROUTES = [
  { name: "Dashboard", path: routes.DASHBOARD, Icon: Dashboard, exact: true },
  {
    name: "Appointments",
    path: routes.APPOINTMENTS,
    Icon: Appointment,
    exact: false,
  },
  {
    name: "Health Workers",
    path: routes.HEALTH_WORKER,
    Icon: HealthWorker,
    exact: false,
  },
  {
    name: "Departments",
    path: routes.DEPARTMENTS,
    Icon: Department,
    exact: false,
  },
  { name: "Patients", path: routes.PATIENTS, Icon: PatientNav, exact: false },
  { name: "Payments", path: routes.PAYMENT, Icon: Card, exact: false },
];
export const DashboardSideBar = ({ exact }: Props) => {
  const router = useRouter();
  let isActive = exact
    ? router.asPath == "/help"
    : router.asPath.includes("/help");
  return (
    <div className="w-[3rem] xs:w-[5rem] lg:w-[16rem]">
      <div className="flex w-full flex-col items-center lg:items-start pl-0  lg:mt-0">
        <Link href={"/"}>
          <div className="hidden lg:flex h-[60px] mt-[22px] lg:pl-[32px] cursor-pointer ">
            <Logo width={115} height={44} />
          </div>
        </Link>
        <div
          className={`lg:hidden block h-[60px] mt-[22px]  pl-0 lg:pl-[32px]`}
        >
          <LogoMobile height={30} />
        </div>

        <div className="mt-8 w-full">
          <div className="border-b overflow-x-hidden w border-b-border_color">
            {BAR_ROUTES?.map((link, id) => (
              <BarLink key={id} {...link} />
            ))}
          </div>
          <Link href={"/help"}>
            <div
              className={`flex lg:pl-[30px] lg:justify-start justify-center space-x-1 pl-[22px] pr-[30px]  lg:pr-[150px] py-2 mt-3  mb-[15px] lg:py-[10px] gap-2 items-center cursor-pointer  ${
                isActive ? " shadow-whiteShadow" : "border-transparent"
              }`}
            >
              <Question fill={isActive ? "#0A459F" : "#DBDDE0"} />
              <span
                className={`whitespace-nowrap font-bold ${
                  isActive ? "text-primary " : "text-text_black"
                } hidden lg:block text-[14px] font-lato font-normal `}
              >
                Help
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};