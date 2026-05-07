import { useState } from "react";


const Sidebar = () => {
    const [show,setshow] = useState<boolean>(true)
    const handlechangeSidebar = ()=>{
        setshow(prev=>!prev)
    }
    return (
        <div className={`fixed h-screen w-app-sidebar-w {${show ? "right-0":"-right-14"}  bg-bg-card-alt transition-all shadow-sm shadow-l pt-app-header-h border-1 border-l-separator border-b-0 border-t-0 border-r-0 `} >
            منو
            <button className={""} onClick={handlechangeSidebar} >
                {show}
            </button>
        </div>
    );
}

export default Sidebar;
