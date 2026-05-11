interface DashboardHeadTopType {
    title:string,
    todayCart:number,
    lastweek:number,
    lastmonth:number,
    toman?:boolean
}

const DashboardHeaderT = ({title,todayCart,lastmonth,lastweek,toman}:DashboardHeadTopType) => {
    return (
                <div className="bg-bg-tertiary dark:bg-bg-card-alt-dark h-full w-1/4 rounded-lg dark:shadow-white p-4 ">
                    <div className="flex flex-col  ">
                        <p className="text-lg dark:text-text-secondary-dark" >{title}</p>
                    </div>
                    <div className=" flex w-full justify-start items-start pr-10 pt-5 pb-5 border-b border-text-tertiary border-dashed  " >
                        <p className="text-5xl text-text-primary font-bold dark:text-text-secondary-dark" >{todayCart} </p>
                        <p className="p-2 dark:text-text-secondary-dark" >{toman ? " تومان" : ""}</p>
                    </div>
                    <div className="flex flex-col justify-center items-start p-2 ">
                        <p className="text-text-secondary" >{lastweek} در هفته پیش</p>
                        <p className="text-text-secondary" > {lastmonth} در ماه پیش</p>
                    </div>
                </div>
    );
}

export default DashboardHeaderT;
