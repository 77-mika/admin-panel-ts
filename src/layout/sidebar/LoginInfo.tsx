    import { TbLogout2 } from "react-icons/tb";
    import useUiManagementStore from "../../zustand/store";
    const LoginInfo = () => {
        const sidebarIsOpen = useUiManagementStore((state) => state.sidebarIsOpen);
        return (
            <div className="w-full flex justify-start items-center transition-all ease-in-out duration-600">
                <div
                    className={`flex relative overflow-hidden items-center justify-between  bg-bg-secondary dark:bg-bg-card-dark rounded-xl  shadow-[inset_0_1px_4px_rgba(0,0,0,0.14)] p-2 ${sidebarIsOpen ? "w-64  " : "w-18"} transition-all duration-400 `}
                >
                    <div className={`flex  items-center gap-1 overflow-hidden  `}>
                        <div className="shrink-0">
                            <img
                                src="/pics/avatar.jpg"
                                className={`h-14 w-14 rounded-lg shadow-lg `}
                            />
                        </div>
                        <div className={`flex flex-col iteme transition-all text-nowrap shrink-0 duration-400 start ease-in-out ${sidebarIsOpen ? "max-w-40 opacity-100" : "max-w-0 opacity-0"}`}>
                            <p
                                className={`text-text-primary text-md dark:text-text-primary-dark transition-all duration-500  text-nowrap `}
                            >
                                نام کاربری
                            </p>
                            <p
                                className={`text-text-secondary text-sm text-nowrap transition-all duration-400 `}
                            >
                                mika@gmail.com
                            </p>
                        </div>
                    </div>
                    <div
                        className={`flex h-9 w-9 absolute left-2 transition-all duration-600  justify-center items-center rounded-full hover:bg-bg-tertiary hover:shadow-lg top-1/2 -translate-y-1/2 ${sidebarIsOpen ? "" : "opacity-0"}  ${sidebarIsOpen ? "translate-x-0" : "-translate-10"}  `}
                    >
                        <TbLogout2
                            size={30}
                            className={`hover:text-red-900 text-text-primary dark:text-text-primary-dark transition-all duration-400  cursor-pointer absolute mr-1.5 shadow-2xl`}
                        />
                    </div>
                </div>
            </div>
        );
    };

    export default LoginInfo;
