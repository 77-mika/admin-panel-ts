import { create } from "zustand";

interface uiStateManager {
    sidebarIsOpen: boolean;
    theme: "light" | "dark";
}

interface uiActionManager {
    toggleSidebar: () => void;
    setSidebar: (status: boolean) => void;
    setTheme: (theme: "light" | "dark") => void;
    toggleTheme: () => void;
}



const loadFromStorage = <T>(key: string, defaultValue: T): T => {
    const stored = localStorage.getItem(key);
    if (stored === null) return defaultValue;
    try {
        return JSON.parse(stored) as T;
    } catch {
        return defaultValue;
    }
};
const saveToStorage = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

type UiManager = uiStateManager & uiActionManager;

const useUiManagementStore = create<UiManager>((set) => ({
    sidebarIsOpen: true,
    toggleSidebar: () =>
        set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
    setSidebar: (status: boolean) => set(() => ({ sidebarIsOpen: status })),
    theme: loadFromStorage("theme", "light"),
    toggleTheme: () =>
        set((state) => {
            const newTheme = state.theme === "light" ? "dark" : "light";
            saveToStorage("theme", newTheme);
            return { theme: newTheme };
        }),
    setTheme: (theme: "light" | "dark") => set({ theme }),
}));

export default useUiManagementStore;
