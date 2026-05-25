import { LuLayers3 } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { TbBrandAppgallery, TbLayoutDashboardFilled } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import { BiSolidColor } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";
import { TbShoppingCartCopy } from "react-icons/tb";
import { TbShoppingCartShare } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { TbUserShield } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";
import SidebarItems from "./sidebarItems";
import ItemsGroup from "./itemsGroup";
import useUiManagementStore from "../../../zustand/store";
import { NavLink } from "react-router-dom";

// Data structure for the sidebar sections
const sidebarGroups = [
    {
        title: "فروشگاه",
        items: [
            {
                title: "گروهبندی محصولات",
                Icon: LuLayers3,
                size: 34,
                to: "groups",
            },
            { title: "مدیریت محصولات", Icon: AiOutlineProduct, size: 34,to:"managepr" },
            { title: "مدیریت برندها", Icon: TbBrandAppgallery, size: 34 },
            { title: "مدیریت گارنتی ها", Icon: LuShieldCheck, size: 34 },
            { title: "مدیریت رنگ ها", Icon: BiSolidColor, size: 34 },
            { title: "مدیریت تخفیف ها", Icon: MdOutlineDiscount, size: 34 },
        ],
    },
    {
        title: "سفارشات و سبد خرید",
        items: [
            { title: "مدیریت سبد ها", Icon: TbShoppingCart, size: 34 },
            { title: "مدیریت سفارش ها", Icon: TbShoppingCartCopy, size: 34 },
            { title: "مدیریت نحوه ارسال", Icon: TbShoppingCartShare, size: 34 },
        ],
    },
    {
        title: "کاربران و همکاران",
        items: [
            { title: "کاربران", Icon: FiUsers, size: 34 },
            { title: "همکاران", Icon: TbUserShield, size: 34 },
        ],
    },
    {
        title: "پشتیبانی و ارتباطات",
        items: [{ title: "پشتیبانی", Icon: BiSupport, size: 34 }],
    },
];

const ListSection = () => {
    const sidebarIsOpen = useUiManagementStore((state) => state.sidebarIsOpen);

    return (
        // Outer container: ltr direction to keep scrollbar on the RIGHT
        <div
            className={`rightScrollBar overflow-auto w-full transition-all duration-400 custom-scrollbar  ${
                sidebarIsOpen ? "" : ""
            }`}
        >
            {/* Inner container: rtl direction for actual content flow */}
            <div className="flex flex-col gap-2 w-full">
                <NavLink to={"/"}>
                    {({ isActive }) => (
                        <SidebarItems
                            title="داشبورد"
                            size={34}
                            Icon={TbLayoutDashboardFilled}
                            IsActive={isActive ? true : false}
                        />
                    )}
                </NavLink>
                {sidebarGroups.map((group, groupIndex) => (
                    <ItemsGroup key={groupIndex} title={group.title}>
                        {group.items.map((item, itemIndex) => (
                            <NavLink to={item.to}>
                              {({ isActive }) => (
                                <SidebarItems
                                    key={itemIndex}
                                    title={item.title}
                                    size={item.size}
                                    Icon={item.Icon}
                                    IsActive={isActive ? true : false}
                                />
                              )}
                            </NavLink>
                        ))}
                    </ItemsGroup>
                ))}
            </div>
        </div>
    );
};

export default ListSection;
