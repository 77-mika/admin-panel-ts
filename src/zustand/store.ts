import {create} from "zustand"

interface uiStateManager {
    sidebarIsOpen : boolean;
    theme: "light" | "dark"
}

interface uiActionManager {
    toggleSidebar:()=>void;
    setSidebar:(status:boolean)=>void;
    setTheme:(theme:"light"|"dark")=>void;
    toggleTheme:()=>void;
}

type UiManager = uiStateManager & uiActionManager

const useUiManagement = create<UiManager>((set)=>({
    sidebarIsOpen = true,
    theme = 

}))