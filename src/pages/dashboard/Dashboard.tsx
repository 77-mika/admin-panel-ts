import DashboardHeaderT from "./DashboardHeaderT";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
    return (
        <div className=" transition-all bg-bg-secondary h-screen w-screen pr-app-sidebar-w pt-app-header-h dark:bg-bg-primary-dark ">
            <div className="flex w-full justify-between gap-4 p-4 h-1/4 pb-0">
                <DashboardHeaderT
                    title="سبد خرید امروز"
                    todayCart={15}
                    lastmonth={78}
                    lastweek={33}
                />
                <DashboardHeaderT
                    title="سفارشات امروز"
                    todayCart={8}
                    lastmonth={33}
                    lastweek={56}
                />
                <DashboardHeaderT
                    title="سفارشات مانده"
                    todayCart={3}
                    lastmonth={6}
                    lastweek={15}
                />
                <DashboardHeaderT
                    title="فروش امروز"
                    todayCart={13}
                    lastmonth={3}
                    lastweek={11}
                    toman={true}
                />
            </div>
            <div className="flex w-full justify-between gap-4 p-4 h-3/4  ">
                <div className="bg-bg-tertiary dark:bg-bg-card-alt-dark h-full w-1/2 rounded-lg shadow-lg p-6 flex flex-col">
                    <p className="text-2xl font-semibold mb-4 text-right text-text-primary dark:text-text-primary-dark">
                        محصولات روبه اتمام
                    </p>
                    <DashboardTable/>
                </div>
                <div className="bg-bg-tertiary h-full w-1/2 rounded-lg shadow-lg flex justify-center items-center text-8xl text-text-primary dark:text-text-primary-dark dark:bg-bg-card-alt-dark ">
                CHART</div>
            </div>
        </div>
    );
};

export default Dashboard;
