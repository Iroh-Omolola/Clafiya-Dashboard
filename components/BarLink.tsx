import Link from "next/link";
import { useRouter } from "next/router";

interface BarLinkProps {
  Icon?: any;
  path: string;
  name: string;
  exact?: boolean | false;
}
export const BarLink = ({ Icon, path, name, exact }: BarLinkProps) => {
  const router = useRouter();
  let isActive = exact ? router.asPath == path : router.asPath.includes(path);
  return (
    <Link href={path}>
      <div
        className={`flex lg:pl-[30px] space-x-1 pl-[22px] pr-[30px] lg:justify-start justify-center  lg:pr-[150px] py-2 mt-3  mb-[15px] lg:py-[10px] gap-2 items-center cursor-pointer  ${
          isActive ? " text-primary" : "text-text_black"
        }`}
      >
        <Icon fill={isActive ? "#0A459F" : "#DBDDE0"} />
        <span
          className={`whitespace-nowrap font-bold ${
            isActive ? "text-primary " : "text-text_black"
          } hidden lg:block text-[14px] font-lato font-normal `}
        >
          {name}
        </span>
      </div>
    </Link>
  );
};
