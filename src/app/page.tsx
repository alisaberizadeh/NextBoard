import MembersTable from "@/components/membersTable/MembersTable";
import PaymentsOverview from "@/components/paymentsOverview/PaymentsOverview";
import ProfitWeek from "@/components/ProfitWeek/ProfitWeek";
import StatisticsItem from "@/components/statisticsItem/StatisticsItem";
import UsedDevices from "@/components/usedDevices/UsedDevices";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { IoEye } from "react-icons/io5";


export default function Home() {
  return (
    <>
      <div className="w-full grid grid-cols-1 gap-5 xl:grid-cols-4 xl:gap-10">
        <StatisticsItem
          icon={<IoEye className="text-3xl text-white" />}
          value="3.456K"
          change="0.43%"
          color="bg-green-400"
          changecolor="text-success"
          label="Total Views"
        />
        <StatisticsItem
          icon={<BiSolidDollarCircle className="text-3xl text-white" />}
          value="$42.2K"
          change="4.35%"
          color="bg-orange-400"
          changecolor="text-success"
          label="Total Profit"
        />
        <StatisticsItem
          icon={<FaBoxOpen className="text-3xl text-white" />}
          value="2.450"
          change="4.35%"
          color="bg-purple-500 "
          changecolor="text-success"
          label="Total Product"
        />
        <StatisticsItem
          icon={<FaUsers className="text-3xl text-white" />}
          value="3.465"
          change="-0.95%"
          color="bg-sky-400 "
          changecolor="text-red-500"
          label="Total Product"
        />
      </div>

      <div className="w-full grid xl:grid-cols-12 grid-cols-1 gap-10 mt-10">
        <div className="col-span-1 xl:col-span-7"> <PaymentsOverview /></div>
        <div className="col-span-1 xl:col-span-5"> <ProfitWeek /></div>
      </div>
      <div className="w-full grid xl:grid-cols-12 grid-cols-1 gap-10 mt-10 h">
        <div className="col-span-1 xl:col-span-5"> <UsedDevices /></div>
        <div className="col-span-1 xl:col-span-7"> <MembersTable /></div>
      </div>
    </>
  );
}
