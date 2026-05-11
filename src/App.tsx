import Content from "./layout/content/Content";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import useUiManagementStore from "./zustand/store";


const App = () => {
    const theme = useUiManagementStore((state)=>state.theme)
    return (
        <div className={`${theme}`}>
            <Header />
            <Sidebar />
            <Content />
        </div>
    );
};
export default App;
