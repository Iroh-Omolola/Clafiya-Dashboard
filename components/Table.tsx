import { Delete, Edit, Ed, } from "./assets";

type DataProps = {
  icon?: any;
  name?: string;
  email?: string;
  date?: string;
  plana?: string;
  visitTime?: string;
  chw?: string;
  id?: number;
};
type TableProps = {
  data: Array<DataProps>;
  className?: String;
};
export const AppointmentTable = ({ data }: TableProps) => {
  return (
    <div className="flex w-full  bg-white shadow-md shadow-shadow_color pt-6 rounded-lg   flex-col  mt-8">
      <h4 className="text-[20px] font-bold font-lato mb-3 text-text_black_two pl-6">
        Appointment Activity
      </h4>
      <div className="w-full mb-3 overflow-x-scroll">
        <table className="w-full">
          <thead className="bg-table_color ">
            <tr className="border-b border-border_color ">
              <th
                scope="col"
                className="pl-6 py-4 whitespace-nowrap pr-3  font-bold tracking-wider text-left text-talentBlue-200 text-[14px]"
              >
                Name
              </th>
              <th
                scope="col"
                className=" py-3 whitespace-nowrap pr-3 font-bold tracking-wider text-left text-talentBlue-200 text-[14px]"
              >
                Email
              </th>

              <th
                scope="col"
                className=" py-3 whitespace-nowrap pr-3 font-bold tracking-wider text-left text-talentBlue-200 text-[14px]"
              >
                Date
              </th>
              <th
                scope="col"
                className=" py-3 whitespace-nowrap  pr-3 font-bold tracking-wider text-left text-talentBlue-200 text-[14px]"
              >
                Visit Time
              </th>
              <th
                scope="col"
                className="py-3  font-bold pr-3 whitespace-nowrap tracking-wider text-left text-talentBlue-200 text-[14px]"
              >
                CHWs
              </th>
              <th
                scope="col"
                className="py-3  font-bold pr-3 whitespace-nowrap tracking-wider text-left text-talentBlue-200 text-[14px]"
              >
                Plana
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Delete & Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((tableData, index) => (
              <tr
                key={index + 1}
                className={`table-row text-left ${
                  data?.length === tableData?.id ? "border-b-none" : "border-b "
                }  dark:border-b-dark-border gap-5 border-b-border_color`}
              >
                <td className="pl-6 pr-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <div className="w-8 h-8 rounded-full mt-1 mr-2  object-cover">
                        <Ed />
                      </div>
                    </div>
                    <div className="ml-1">
                      <div className="text-[14px]  text-text_black ">
                        {tableData?.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td
                  className={`py-3 text-[14px]  pr-3 text-text_black   whitespace-nowrap`}
                >
                  {tableData?.email}
                </td>
                <td className="py-3 text-[14px] pr-3 text-text_black     whitespace-nowrap">
                  {tableData?.date}
                </td>
                <td className=" py-3 text-[14px] pr-3 text-text_black    whitespace-nowrap">
                  {tableData?.visitTime}
                </td>
                <td className="py-3 text-[14px] pr-3 text-text_black    whitespace-nowrap">
                  {tableData?.chw}
                </td>
                <td className="py-3 uppercase text-[14px] pr-3 text-text_black  whitespace-nowrap">
                  {tableData?.plana}
                </td>
                <td className="px-6 flex space-x-3 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <span className="cursor-pointer">
                    <Edit />
                  </span>
                  <span className="cursor-pointer">
                    <Delete />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
