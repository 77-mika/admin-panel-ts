import type { IconType } from "react-icons";
import useUiManagementStore from "../../../zustand/store";


type sidebarItemsType = {
    title: string;
    Icon: IconType;
    size: number;
    IsActive:boolean
};

const SidebarItems = ({ title, Icon, size,IsActive }: sidebarItemsType) => {
    const SidebarIsOpen = useUiManagementStore((state) => state.sidebarIsOpen);

    return (
        <div
            className={`flex flex-row justify-start transition-all duration-400 items-center 
            ${SidebarIsOpen ? "" : "px-1.5"} px-3 py-2   h-12 gap-2
        ${IsActive?"bg-gray-300 dark:bg-gray-950 ":""}  dark:text-text-primary-dark 
        hover:shadow-[inset_0_1px_4px_rgba(0,0,0,0.40)] rounded-md
        transition-all shadow-inner duration-400 ease-in-out cursor-pointer  `}
        >
            <div className={` flex items-center justify-start  ease-in-out ${SidebarIsOpen ? "" : ""} `}>
                <Icon size={size || 30} className="shrink-0" />
            </div>
            <div className={`flex items-center justify-start transition-all duration-800 ${SidebarIsOpen ? "opacity-100 max-w-full w-full! " : "opacity-0 max-w-0!"}`}>
                <p
                    className={`font-bold text-md overflow-hidden text-nowrap   `}
                >
                    {title}
                </p>
            </div>
        </div>
    );
};

export default SidebarItems;
