import { TbMenu2 } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
import ListSection from "./itemsList/ListSection";


const Sidebar = () => {
    return (
        <div className="fixed p-6 h-screen flex flex-col gap-4 rounded-tl-3xl w-app-sidebar-w ease-in-out bg-bg-card-alt transition-all duration-200 shadow-sm shadow-l border-1 border-l-separator border-b-0 border-t-0 border-r-0 ">
            <div className="flex items-end gap-4">
                <TbMenu2
                    size={30}
                    className="hover:cursor-pointer text-text-primary "
                />
                <p className="text-text-primary font-bold text-lg ">
                    پنل مدیریت
                </p>
            </div>
            <div className="flex items-center justify-between p-2 w-64 h-17 bg-bg-secondary rounded-lg  shadow-inner ">
                <div className="flex items-center gap-1 ">
                    <img
                        src="/pics/avatar.jpg"
                        className="h-14 w-14 rounded-xl shadow-lg "
                    />
                    <div className="flex flex-col iteme start">
                        <p className="text-text-primary text-md ">نام کاربری</p>
                        <p className="text-text-secondary text-sm ">
                            mika@gmail.com
                        </p>
                    </div>
                </div>
                <div className="flex h-9 w-9 transition-all  justify-center items-center rounded-full hover:bg-bg-tertiary hover:shadow-lg">
                    <TbLogout2
                        size={30}
                        className="hover:text-red-900 transition-colors cursor-pointer absolute mr-1 "
                    />
                </div>
            </div>
            <ListSection/>
        </div>
    );
};

export default Sidebar;
