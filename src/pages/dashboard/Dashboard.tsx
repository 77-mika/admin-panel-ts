import useUiManagementStore from "../../zustand/store";
import DashboardHeaderT from "./DashboardHeaderT";
import DashboardTable from "./DashboardTable";
import { FaDollarSign } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { LuNewspaper } from 'react-icons/lu';
import { FaBox } from 'react-icons/fa';


const Dashboard = () => {
    const sidebarIsOpen = useUiManagementStore((state) => state.sidebarIsOpen);
    return (
        <div className={` transition-all bg-bg-secondary h-screen w-screen ${sidebarIsOpen?"pr-app-sidebar-w":'pr-app-sidebarClose'} pt-app-header-h dark:bg-bg-primary-dark duration-500 `}>
            <div className="flex w-full justify-between gap-4 p-4 h-1/4 pb-0">
                <DashboardHeaderT
                    title="سبد خرید امروز"
                    todayCart={15}
                    lastmonth={78}
                    lastweek={33}
                    Icon={FaShoppingCart}
                    color="bg-green-900"
                />
                <DashboardHeaderT
                    title="سفارشات امروز"
                    todayCart={8}
                    lastmonth={33}
                    lastweek={56}
                    Icon={LuNewspaper}
                    color="bg-yellow-900"
                />
                <DashboardHeaderT
                    title="سفارشات مانده"
                    todayCart={3}
                    lastmonth={6}
                    lastweek={15}
                    Icon={FaBox}
                    color="bg-red-900"
                />
                <DashboardHeaderT
                    title="فروش امروز"
                    todayCart={13}
                    lastmonth={3}
                    lastweek={11}
                    toman={true}
                    Icon={FaDollarSign}
                    color="bg-blue-900"
                />
            </div>
            <div className="flex w-full justify-between gap-4 p-4 h-3/4  ">
                <div className="bg-bg-tertiary dark:bg-bg-card-alt-dark h-full w-1/2 rounded-lg shadow-lg p-6 flex flex-col border-2 dark:border-neutral-600 border-neutral-400 ">
                    <p className="text-2xl font-semibold mb-4 text-right text-text-primary dark:text-text-primary-dark">
                        محصولات روبه اتمام
                    </p>
                    <DashboardTable />
                </div>
                <div className="bg-bg-tertiary h-full w-1/2 rounded-lg shadow-lg flex justify-center items-center text-8xl text-text-primary dark:text-text-primary-dark dark:bg-bg-card-alt-dark border-2 dark:border-neutral-600 border-neutral-400 ">
                    CHART
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
