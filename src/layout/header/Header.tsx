import { convertMiladi2Jalali } from "../../utils/DateUtils";
import { RiAppsLine } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";

const Header = () => {
    return (
        <div className="fixed flex  justify-between w-screen h-app-header-h bg-bg-grouped pr-app-sidebar-w shadow-sm">
            <div className="h-full w-full flex justify-between p-4 ">
                <div className="flex justify-center items-center">
                    <p className="text-text-secondary text-lg">
                        {convertMiladi2Jalali()}
                    </p>
                </div>
                <div className="flex items-center justify-center ">
                    <input
                        type="text"
                        placeholder="جستجو کنید"
                        className="bg-bg-secondary text-text-secondary p-4 w-72 rounded-xl duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.15)] h-8 hover:w-96 ease-in-out transition-all outline-0 focus:shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)] focus:w-96   "
                    />
                </div>
                <div className="flex justify-center gap-5 items-center">
                    <MdNotificationsActive size={30} className="text-text-secondary" />
                    <RiAppsLine size={30} className="text-text-secondary" />
                </div>
            </div>
        </div>
    );
};

export default Header;
