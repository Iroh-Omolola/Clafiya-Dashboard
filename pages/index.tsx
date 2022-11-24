import {
  AppointmentTable,
  DashboardLayout,
  MiniCard,
  BankBig,
  FirstAid,
  Medical,
  Patient,
  PersonOne,
  Ed,
  PersonThree,
  AnalyticsChart,
} from "../components";

const Dashboard = () => {
  const data = [
    {
      icon: <PersonThree />,
      name: "Babaginda Fox",
      email: "babgindafox@example.com",
      date: "10/10/2020",
      visitTime: "09:15-09:45am",
      chw: "Blessing Chidi",
      plana: "basic",
      id: 1,
    },
    {
      icon: <Ed />,
      name: "Jennie Johnson",
      email: "jenniejohnson@example.com",
      date: "10/12/2020",
      visitTime: "12:00-12:45pm",
      chw: "Esther Lucky",
      plana: "family",
      id: 2,
    },
    {
      icon: <PersonOne />,
      name: "Lucky Willams",
      email: "luckywilliam@example.com",
      date: "10/13/2020",
      visitTime: "01:15-01:45pm",
      chw: "Blessing Chidi",
      plana: "basic",
      id: 3,
    },
    {
      icon: <PersonOne />,
      name: "Blessing Wilsom",
      email: "blessingwilliam@gmail.com",
      date: "10/14/2020",
      visitTime: "02:00-02:45pm",
      chw: "Esther Lucky",
      plana: "family",
      id: 4,
    },
    {
      icon: <PersonOne />,
      name: "Purest Meion",
      email: "purestmeion@example.com",
      date: "10/15/2020",
      visitTime: "12:00-12:45pm",
      chw: "Blessing Chidi",
      plana: "basic",
      id: 5,
    },
  ];
  const dataChart = {
    labels: [ "", "1 June", "8 July", "16 Augt", "24 Sept", "15 Octo"],
    datasets: [
      {
        label: "Income",
        fill: false,
        backgroundColor: "#A9C1FD",
        borderColor: "#336CFB",
        data: [50000, 100000, 30000, 62000, 40000],
      },
    ],
  };
  const dataChartOne = {
    labels: [
      "",
      "25 Apri",
      "26 May",
      "27 June",
      "28 July",
      "29 Augt",
      "30 Sept",
      "15 Octo",
    ],
    datasets: [
      {
        label: "Appointment",
        fill: false,
        backgroundColor: "#FCDF98",
        borderColor: "#FAC032",
        data: [4000, 1500, 2700, 2000, 900, 2500 ],
      },
    ],
  };
  return (
    <DashboardLayout>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 2xl:gap-8">
        <MiniCard Icon={<FirstAid />} name="Appointment" amount="213" />
        <MiniCard Icon={<Patient />} name="New Patients" amount="104" />
        <MiniCard Icon={<Medical />} name="Interventions" amount="24" />
        <MiniCard
          Icon={<BankBig />}
          name="Clafiya’s Earnings"
          amount="$ 112,174"
        />
      </div> 
      <div className="flex lg:flex-row flex-col mt-10   lg:space-y-0 space-y-10 space-x-0 lg:space-x-4 w-full">
        <div className="lg:w-[50%] w-full overflow-x-auto">
          <AnalyticsChart
            headFooter="Income in current month"
            headTitle="$ 112,174"
            data={dataChart}
            min={0}
            max={100000}
            stepSize={20000}
          />
        </div>
        <div className="lg:w-[50%] w-full overflow-x-auto">
          <AnalyticsChart
            headFooter="Total Number of Appointment"
            headTitle="5,210"
            data={dataChartOne}
            min={0}
            max={10000}
            stepSize={2000}
          />
        </div>
      </div> 
      <AppointmentTable data={data} />
    </DashboardLayout>
  );
};

export default Dashboard;
