
interface Props {
  Icon: any;
  name: string;
  amount: string;
}
export const MiniCard = ({ Icon,  name, amount}: Props) => {
  return (
    <div className="flex bg-white lg:w-[100%] h-[88px] py-4 px-8 space-x-6 shadow-shadow_color shadow-md rounded-[8px]">
      <div className="mt-3">
        {Icon}
      </div>
      <div className="space-y-2">
        <h4 className="text-[14px] text-text_black_two whitespace-nowrap font-bold font-lato">
         {name}
        </h4>
        <p className="text-[18px] font-normal font-lato text-primary">{amount}</p>
      </div>
    </div>
  );
};