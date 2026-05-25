import useUiManagementStore from "../../zustand/store";
import { RxPlus } from "react-icons/rx";
import SearchInput from "../shared/SearchInput";

const Groups = () => {
    const sidebarIsOpen = useUiManagementStore((state) => state.sidebarIsOpen);
    return (
        <div
            className={` transition-all bg-bg-secondary h-screen w-screen
                 ${sidebarIsOpen ? "pr-app-sidebar-w" : "pr-app-sidebarClose"}
                  pt-app-header-h dark:bg-bg-primary-dark duration-500  `}
        >
            <div className="p-4 h-full w-full shadow-sm ">
                <div className="h-full w-full bg-bg-tertiary dark:bg-bg-card-dark rounded-2xl p-4">
                    <div className=" overflow-x-auto ">
                        <SearchInput />
                        <div className="h-full box-border overflow-hidden p-1 w-full rounded-t-3xl ">
                            <table className="min-w-full table-auto text-right overflow-hidden ">
                                <thead>
                                    <tr className="border-b border-gray-400 dark:border-neutral-500 dark:bg-bg-primary-dark [&>th]:px-4 py-2 text-sm font-medium bg-bg-secondary h-10  ">
                                        <th className="text-text-primary dark:text-text-primary-dark">
                                            #
                                        </th>
                                        <th className="text-text-primary dark:text-text-primary-dark">
                                            دسته
                                        </th>
                                        <th className="text-text-primary dark:text-text-primary-dark">
                                            عنوان
                                        </th>
                                        <th className="text-text-primary dark:text-text-primary-dark">
                                            وضعیت
                                        </th>
                                        <th className="text-text-primary dark:text-text-primary-dark">
                                            عملیات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* ردیف نمونه ۱ */}
                                    <tr className="border-b bg-bg-secondary dark:border-neutral-500 dark:bg-bg-card-alt-dark border-gray-400 hover:bg-bg-primary dark:hover:bg-bg-grouped-dark hover:cursor-pointer transition-all ease-in-out [&>td]:last:border-b-0 ">
                                        <td className="px-4 py-3 text-sm text-text-primary dark:text-text-primary-dark ">
                                            ۱
                                        </td>
                                        <td className="px-4 py-3 text-sm  text-text-primary dark:text-text-primary-dark ">
                                            لبنیات
                                        </td>
                                        <td className="px-4 py-3 text-sm  text-text-primary dark:text-text-primary-dark ">
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
                                    <tr className="border-b bg-bg-secondary dark:border-neutral-500 dark:bg-bg-card-alt-dark  border-gray-400 hover:bg-bg-primary dark:hover:bg-bg-grouped-dark hover:cursor-pointer transition-all ease-in-out [&>td]:last:border-b-0 ">
                                        <td className="px-4 py-3 text-sm text-text-primary dark:text-text-primary-dark">
                                            ۲
                                        </td>
                                        <td className="px-4 py-3 text-sm text-text-primary dark:text-text-primary-dark">
                                            پروتئینی
                                        </td>
                                        <td className="px-4 py-3 text-sm text-text-primary dark:text-text-primary-dark">
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
                                    <tr className=" bg-bg-secondary dark:border-neutral-500 dark:bg-bg-card-alt-dark  border-gray-400 hover:bg-bg-primary dark:hover:bg-bg-grouped-dark hover:cursor-pointer transition-all ease-in-out [&>td]:last:border-b-0 ">
                                        <td className="px-4 py-3 text-sm  text-text-primary dark:text-text-primary-dark">
                                            ۳
                                        </td>
                                        <td className="px-4 py-3 text-sm text-text-primary dark:text-text-primary-dark">
                                            نوشیدنی
                                        </td>
                                        <td className="px-4 py-3 text-sm text-text-primary dark:text-text-primary-dark">
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
                </div>
            </div>
        </div>
    );
};

export default Groups;
