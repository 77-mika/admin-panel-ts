import { convertMiladi2Jalali } from "../../utils/DateUtils";
import { RiAppsLine } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { TbMoonFilled } from 'react-icons/tb';
import useUiManagementStore from "../../zustand/store";



const Header = () => {

    const toggleTheme = useUiManagementStore((state)=>state.toggleTheme)
    return (
        <div className="fixed flex  justify-between w-screen h-app-header-h bg-bg-grouped dark:bg-bg-card-dark pr-app-sidebar-w shadow-sm">
            <div className="h-full w-full flex justify-between p-4 ">
                <div className="flex justify-center items-center gap-5">
                    <TbMoonFilled size={30} className="cursor-pointer dark:text-text-primary-dark transition-all " onClick={toggleTheme} />
                    <p className="text-text-secondary text-lg">
                        {convertMiladi2Jalali()}
                    </p>
                </div>
                <div className="flex items-center justify-center ">
                    <input
                        type="text"
                        placeholder="جستجو کنید"
                        className="bg-bg-secondary dark:bg-bg-card-alt-dark  text-text-secondary dark:text-text-primary-dark p-4 w-80 rounded-xl duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.15)] h-8 hover:w-96 ease-in-out transition-all outline-0 focus:shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)] focus:w-96   "
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
