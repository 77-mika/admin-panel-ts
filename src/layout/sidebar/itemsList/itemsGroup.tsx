import type React from "react";
import useUiManagementStore from "../../../zustand/store";

type Childs = {
    children: React.ReactNode;
    title:string;
}

const ItemsGroup:React.FC<Childs> = ({children,title}) => {
    const SidebarIsOpen = useUiManagementStore((state) => state.sidebarIsOpen);
    return (
        <div className={` flex flex-col  ${SidebarIsOpen?"":"w-full  "} `} >
            <div className={` overflow-hidden   `}>
                <p className={`font-bold  text-lg pr-2 dark:text-text-primary-dark text-nowrap overflow-hidden transition-all duration-400 ${SidebarIsOpen?"opacity-100":"opacity-0"} `} >{title}</p>
            </div>
            <div className="flex flex-col py-2 gap-4 w-full sh bg-transparent dark:bg-transparent rounded-sm">{children}</div>
        </div>
    );
}

export default ItemsGroup;
