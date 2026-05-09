interface DashboardHeadTopType {
    title:string,
    todayCart:number,
    lastweek:number,
    lastmonth:number,
    toman?:boolean
}

const DashboardHeaderT = ({title,todayCart,lastmonth,lastweek,toman}:DashboardHeadTopType) => {
    return (
                <div className="bg-bg-tertiary h-full w-1/4 rounded-lg shadow-lg p-4 ">
                    <div className="flex flex-col  ">
                        <p className="text-lg text- " >{title}</p>
                    </div>
                    <div className=" flex w-full justify-start items-start pr-10 pt-5 pb-5 border-b border-text-tertiary border-dashed  " >
                        <p className="text-5xl text-text-primary font-bold " >{todayCart} </p>
                        <p className="p-2 " >{toman ? " تومان" : ""}</p>
                    </div>
                    <div className="flex flex-col justify-center items-start p-2 ">
                        <p className="text-text-secondary" >{lastweek} در هفته پیش</p>
                        <p className="text-text-secondary" > {lastmonth} در ماه پیش</p>
                    </div>
                </div>
    );
}

export default DashboardHeaderT;
