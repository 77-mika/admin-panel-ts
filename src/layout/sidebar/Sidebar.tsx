
import ListSection from "./itemsList/ListSection";
import SidebarItems from "./itemsList/sidebarItems";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiMenuFold2Line } from "react-icons/ri";
import useUiManagementStore from "../../zustand/store";
import LoginInfo from "./LoginInfo";

const Sidebar = () => {
    const toggleSidebar = useUiManagementStore((state) => state.toggleSidebar);
    const sidebarIsOpen = useUiManagementStore((state) => state.sidebarIsOpen);

    return (
        <div
            className={`
                fixed h-screen flex flex-col gap-4 rounded-tl-4xl
                ${sidebarIsOpen ? "w-app-sidebar-w p-6" : "w-25 pt-6"}
                ease-in-out bg-bg-card-alt dark:bg-bg-card-alt-dark
                transition-all duration-500 shadow-sm shadow-l border-l-separator
                dark:shadow-bg-card-alt-dark border-b-0 border-t-0 border-r-0
            `}
        >
            {/* Header row */}
            <div className={`flex items-center gap-4  ${sidebarIsOpen?"justify-between":"justify-between pl-4"} duration-400 `}>
                {/* Animated title */}
                <div
                    className={`
                        overflow-hidden transition-all duration-400 ease-in-out
                        ${sidebarIsOpen ? "max-w-40 opacity-100" : "max-w-0 opacity-0"}
                    `}
                >
                    <p className="text-text-primary font-bold text-lg dark:text-text-primary-dark text-nowrap">
                        پنل مدیریت
                    </p>
                </div>
                <RiMenuFold2Line
                    size={35}
                    className="shrink-0 hover:cursor-pointer text-text-primary dark:text-text-primary-dark transition-transform duration-200 hover:scale-105"
                    onClick={() => toggleSidebar()}
                />
            </div>

            <LoginInfo />
            <SidebarItems title="داشبورد" size={27} Icon={TbLayoutDashboard} />
            <ListSection />
        </div>
    );
};

export default Sidebar;