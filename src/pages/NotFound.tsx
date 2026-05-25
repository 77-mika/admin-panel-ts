import useUiManagementStore from "../zustand/store";

const NotFound = () => {
    const sidebarIsOpen = useUiManagementStore((state) => state.sidebarIsOpen);
    return (
        <div
            className={` w-screen bg-bg-primary flex flex-col items-center justify-center transition-all h-screen
                 ${sidebarIsOpen ? "pr-app-sidebar-w" : "pr-app-sidebarClose"}
                  pt-app-header-h dark:bg-bg-primary-dark duration-500 `}
        >
            <p className="text-text-primary dark:text-shadow-text-secondary-dark text-9xl font-bold " >404</p>
            <p className="text-text-primary dark:text-shadow-text-secondary-dark font-bold " >The resource requested could not be found on this server!</p>
        </div>
    );
};

export default NotFound;
