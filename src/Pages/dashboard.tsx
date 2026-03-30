import { Icon } from "@iconify/react";
import DonughtChart from "../components/charts/piechart";
import TeamActivity from "../components/charts/calendar";
import { Table } from "./table";

export const Card = ({
  number,
  title,
  bg,
}: {
  number: string;
  title: string;
  bg: string;
}) => {
  return (
    <div className={`rounded-lg p-6  text-center ${bg}`}>
      <p className="text-xl font-extrabold">{number}</p>
      <p className="mt-2">{title}</p>
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <div className="  bg-white rounded-lg p-4 grid grid-cols-4 gap-6">
            <Card number="156" title="Active Projects" bg="bg-[#c9ddf5]" />
            <Card number="82%" title="Utilization Rate" bg="bg-[#e6e9ed]" />
            <Card
              number="2.4 Days"
              title="Average Duration"
              bg="bg-[#f7e6f5]"
            />
            <Card number="3 Projects" title="Total Tasks" bg="bg-[#e6f7e9]" />
          </div>

          <div className="  bg-white rounded-lg mt-4">
            <p className="text-xl font-extrabold p-3">
              Task Status Distribution
            </p>
            <div className="  bg-white rounded-lg p-4 grid grid-cols-4 gap-6 mt-4">
              <Card number="156" title="Active Projects" bg="bg-[#c9ddf5]" />
              <Card number="82%" title="Utilization Rate" bg="bg-[#e6e9ed]" />
              <Card
                number="2.4 Days"
                title="Average Duration"
                bg="bg-blue-100"
              />
              <Card number="3 Projects" title="Total Tasks" bg="bg-blue-100" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p>Task Priority</p>
              <p>Distribution by priorty level</p>
            </div>
            <div className=" ">
              <Icon
                icon="majesticons:more-menu-vertical"
                width="24"
                height="24"
              />
            </div>
          </div>
          <div>
            <DonughtChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        <div className="bg-white rounded-lg h-auto w-auto lg:col-span-4 p-4 shadow-sm">
          <TeamActivity />
        </div>
        <div className="bg-white rounded-lg h-auto w-auto lg:col-span-8 p-4 shadow-sm">
          <Table/>
        </div>
      </div>
    </div>
  );
};
