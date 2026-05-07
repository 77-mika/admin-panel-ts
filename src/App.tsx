import Content from "./layout/content/Content";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";

const App = () => {
    return (
        <div className="">
            <Sidebar />
            <Header />
            <Content />
        </div>
    );
};
export default App;
