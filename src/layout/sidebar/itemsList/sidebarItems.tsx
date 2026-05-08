import type { IconType } from "react-icons";

type sidebarItemsType = {
    title: string;
    Icon: IconType;
    size: number;
};

const SidebarItems = ({ title, Icon, size }: sidebarItemsType) => {
    return (
        <div className="flex items-center pr-2 h-8  gap-2 bg-bg-secondary hover:bg-bg-tertiary rounded-sm transition-all shadow-inner  cursor-pointer ">
            <Icon size={size || 27} />
            <p className="font-bold text-md ">{title}</p>
        </div>
    );
};

export default SidebarItems;
