import React from "react";
import { AnalyticsCard } from "./card";
import dynamic from "next/dynamic";

interface AnalyticsChartProps {
  headContent?: any;
  headFooter?: any;
  data?: any;
  min?: number;
  max?: number;
  stepSize?: number;
  headTitle: string;
  headIconColor?: "red" | "green";
  floatingCard?: any;
  boxStyle?: string;
  bodyStyle?: string;
  children?: any;
  izzat?: "credit" | "debit";
}

const DynamicChart = dynamic(() => import("./CardLineChart"), {
  ssr: false,
});

export const AnalyticsChart = (props: AnalyticsChartProps) => {
  const { headTitle, headFooter, data, min, max, stepSize } = props;

  const HeadComponent = () => (
    <div className="flex pt-4 px-2 md:px-4 justify-between flex-row">
      <p className="text-[#25282B] text-[14px]  md:text-[20px] font-bold">{headTitle}</p>
      <p className="md:mr-8 text-[#A0A4A8] text-[12px] font-bold font-lato">
        {headFooter}
      </p>
    </div>
  );

  const BodyComponent = () => (
    <DynamicChart data={data} min={min} max={max} stepSize={stepSize} />
  );

  return (
    <AnalyticsCard
      headTitle={HeadComponent}
      bodyStyle=""
      bodyContent={BodyComponent}
    />
  );
};
