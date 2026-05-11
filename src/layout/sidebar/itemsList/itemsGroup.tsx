import type React from "react";
import useUiManagementStore from "../../../zustand/store";

type Childs = {
    children: React.ReactNode;
    title:string;
}

const ItemsGroup:React.FC<Childs> = ({children,title}) => {
    const SidebarIsOpen = useUiManagementStore((state) => state.sidebarIsOpen);
    return (
        <div className={` flex flex-col w-full  ${SidebarIsOpen?"":"w-28 p-7 "} `} >
            <div className={` overflow-hidden ${SidebarIsOpen?"":"h-0 w-0"} `}>
                <p className={`font-bold  text-lg pr-2 dark:text-text-primary-dark text-nowrap overflow-hidden `} >{title}</p>
            </div>
            <div className="flex flex-col pt-2 pb-2 gap-4 w-64 sh bg-transparent dark:bg-transparent rounded-sm">{children}</div>
        </div>
    );
}

export default ItemsGroup;
