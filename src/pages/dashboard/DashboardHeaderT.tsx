import type { IconType } from 'react-icons';

interface DashboardHeadTopType {
    title: string;
    todayCart: number;
    lastweek: number;
    lastmonth: number;
    toman?: boolean;
    color: "bg-blue-900" | "bg-green-900" | "bg-red-900" | "bg-yellow-900";
    Icon: IconType;
}

const DashboardHeaderT = ({
    title,
    todayCart,
    lastmonth,
    lastweek,
    toman,
    color,
    Icon,
}: DashboardHeadTopType) => {
    return (
        <div className="
            bg-bg-tertiary dark:bg-bg-card-alt-dark
            w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]
            rounded-xl shadow-sm dark:shadow-md
            border-2 border-neutral-400 dark:border-neutral-600
            p-5 flex flex-col justify-between gap-4
        ">
            {/* Title & Icon */}
            <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-text-primary dark:text-text-secondary-dark">
                    {title}
                </h3>
                <div
                    className={`
                        ${color} size-12 rounded-xl
                        flex items-center justify-center
                        shadow-inner
                        bg-gradient-to-br from-white/10 to-transparent
                    `}
                >
                    <Icon size={24} className="text-white drop-shadow-sm" />
                </div>
            </div>

            {/* Today's number + optional تومان */}
            <div>
                <div className="inline-flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-text-primary dark:text-text-secondary-dark leading-none">
                        {todayCart}
                    </span>
                    {toman && (
                        <span className="text-base text-text-primary/70 dark:text-text-secondary-dark/70">
                            تومان
                        </span>
                    )}
                </div>
                <div className="mt-2 border-t border-dashed border-neutral-300 dark:border-neutral-600" />
            </div>

            {/* Previous periods – responsive stacking */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-1.5 lg:gap-3 text-sm">
                <span className="text-text-secondary/80 dark:text-text-secondary-dark/80">
                    {lastweek} در هفته پیش
                </span>
                <span className="hidden lg:inline text-text-secondary/30">|</span>
                <span className="text-text-secondary/80 dark:text-text-secondary-dark/80">
                    {lastmonth} در ماه پیش
                </span>
            </div>
        </div>
    );
};

export default DashboardHeaderT;