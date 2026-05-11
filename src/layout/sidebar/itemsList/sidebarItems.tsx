import type { IconType } from "react-icons";
import useUiManagementStore from "../../../zustand/store";

type sidebarItemsType = {
    title: string;
    Icon: IconType;
    size: number;
};

const SidebarItems = ({ title, Icon, size }: sidebarItemsType) => {
    const SidebarIsOpen = useUiManagementStore((state) => state.sidebarIsOpen);

    return (
        <div className={`flex items-center ${SidebarIsOpen?"":"justify-center  "} pr-2 h-12 gap-2
        bg-bg-secondary dark:bg-bg-elevated-dark dark:text-text-primary-dark 
        hover:shadow-[inset_0_1px_4px_rgba(0,0,0,0.40)] rounded-md
        transition-all shadow-inner duration-300 ease-in-out cursor-pointer  `}>
            <Icon size={size || 27} />
            <p className={`font-bold text-md overflow-hidden ${SidebarIsOpen?"":"w-0 h-0  "} `}>{title}</p>
        </div>
    );
};

export default SidebarItems;
