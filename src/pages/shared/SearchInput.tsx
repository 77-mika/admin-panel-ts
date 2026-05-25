import { RxPlus } from "react-icons/rx";

const SearchInput = () => {
    return (
        <div className=" flex  w-full h-18 justify-between items-center p-1 ">
            <input
                type="text"
                className=" bg-bg-secondary dark:bg-bg-card-alt-dark  transition-all duration-400 w-50 hover:w-70 rounded-xl h-9 focus:outline-0 hover:shadow-xl px-4 cursor-pointer focus:w-70 focus:shadow-xl text-text-secondary dark:text-text-secondary "
                placeholder="در گروه های جستجو کنید"
            />
            <button className="bg-text-link-dark rounded-sm transition-all  hover:scale-110 hover:cursor-pointer ">
                <RxPlus size={30} />
            </button>
        </div>
    );
};

export default SearchInput;
