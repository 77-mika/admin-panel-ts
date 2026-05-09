import type { IconType } from "react-icons";

type sidebarItemsType = {
    title: string;
    Icon: IconType;
    size: number;
};

const SidebarItems = ({ title, Icon, size }: sidebarItemsType) => {
    return (
        <div className="flex items-center pr-2 h-8  gap-2 bg-bg-secondary hover:shadow-[inset_0_1px_4px_rgba(0,0,0,0.40)] rounded-lg transition-all shadow-inner ease-in-out cursor-pointer ">
            <Icon size={size || 27} />
            <p className="font-bold text-md ">{title}</p>
        </div>
    );
};

export default SidebarItems;
