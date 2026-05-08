import type React from "react";

type Childs = {
    children: React.ReactNode;
    title:string;
}

const ItemsGroup:React.FC<Childs> = ({children,title}) => {
    return (
        
        <div>
            <p className="font-bold text-lg pr-2" >{title}</p>
            <div className="flex flex-col pt-2 pb-2 gap-4 w-64 sh bg-bg-primary rounded-sm">{children}</div>
        </div>
    );
}

export default ItemsGroup;
