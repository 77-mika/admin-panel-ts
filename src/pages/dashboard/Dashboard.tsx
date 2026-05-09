import DashboardHeaderT from "./DashboardHeaderT";

const Dashboard = () => {
    return (
        <div className="bg-bg-secondary h-screen w-screen pr-app-sidebar-w pt-app-header-h ">
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
                                <DashboardHeaderT
                    title="فروش امروز"
                    todayCart={13}
                    lastmonth={3}
                    lastweek={11}
                    toman={true}
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
                <div className="bg-bg-tertiary h-full w-1/2 rounded-lg shadow-lg p-6 flex flex-col">
                    <p className="text-2xl font-semibold mb-4 text-right">
                        محصولات روبه اتمام
                    </p>
                    <div className="overflow-x-auto shadow-xl rounded-2xl  ">
                        <table className="min-w-full table-auto text-right  ">
                            <thead>
                                <tr className="border-b border-gray-300 [&>th]:px-4 py-2 text-sm font-medium bg-bg-secondary h-10  ">
                                    <th>#</th>
                                    <th>دسته</th>
                                    <th>عنوان</th>
                                    <th>وضعیت</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* ردیف نمونه ۱ */}
                                <tr className="border-b bg-bg-secondary border-gray-200 hover:bg-bg-primary hover:cursor-pointer transition-all ease-in-out [&>td]:last:border-b-0 ">
                                    <td className="px-4 py-3 text-sm">۱</td>
                                    <td className="px-4 py-3 text-sm">
                                        لبنیات
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        شیر پاستوریزه ۱ لیتری
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs ">
                                            کمتر از ۵ عدد
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <button className="text-blue-600 hover:text-blue-800 ml-2">
                                            ویرایش
                                        </button>
                                        <button className="text-red-600 hover:text-red-800">
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                                {/* ردیف نمونه ۲ */}
                                <tr className="border-b bg-bg-secondary border-gray-200 hover:bg-bg-primary hover:cursor-pointer transition-all ease-in-out [&>td]:last:border-b-0 ">
                                    <td className="px-4 py-3 text-sm">۲</td>
                                    <td className="px-4 py-3 text-sm">
                                        پروتئینی
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        سینه مرغ بسته ۱ کیلویی
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                                            در حال اتمام
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <button className="text-blue-600 hover:text-blue-800 ml-2">
                                            ویرایش
                                        </button>
                                        <button className="text-red-600 hover:text-red-800">
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                                {/* ردیف نمونه ۳ */}
                                <tr className="border-b bg-bg-secondary border-gray-200 hover:bg-bg-primary hover:cursor-pointer transition-all ease-in-out [&>td]:last:border-b-0 ">
                                    <td className="px-4 py-3 text-sm">۳</td>
                                    <td className="px-4 py-3 text-sm">
                                        نوشیدنی
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        آب معدنی ۱.۵ لیتری
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                                            موجودی بحرانی
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm ">
                                        <button className="text-blue-600 hover:text-blue-800 ml-2  ">
                                            ویرایش
                                        </button>
                                        <button className="text-red-600 hover:text-red-800">
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bg-bg-tertiary h-full w-1/2 rounded-lg shadow-lg flex justify-center items-center text-8xl">
                CHART</div>
            </div>
        </div>
    );
};

export default Dashboard;
