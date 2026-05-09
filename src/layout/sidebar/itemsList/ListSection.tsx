import { LuLayers3 } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { TbBrandAppgallery } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import { BiSolidColor } from "react-icons/bi";
import { BiSolidDiscount } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";
import { TbShoppingCartCopy } from "react-icons/tb";
import { TbShoppingCartShare } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { TbUserShield } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineDiscount } from 'react-icons/md';
import SidebarItems from "./sidebarItems";
import ItemsGroup from "./itemsGroup";
const ListSection = () => {
    return (
        <div className="flex flex-col gap-5  " >
            <ItemsGroup title="فروشگاه" >
                <SidebarItems
                    title="گروهبندی محصولات"
                    size={27}
                    Icon={LuLayers3}
                />
                <SidebarItems
                    title="مدیریت محصولات"
                    size={27}
                    Icon={AiOutlineProduct}
                />
                <SidebarItems
                    title="مدیریت برندها"
                    size={27}
                    Icon={TbBrandAppgallery}
                />
                <SidebarItems
                    title="مدیریت گارنتی ها"
                    size={27}
                    Icon={LuShieldCheck}
                />
                <SidebarItems
                    title="مدیریت رنگ ها"
                    size={27}
                    Icon={BiSolidColor}
                />
                <SidebarItems
                    title="مدیریت تخفیف ها"
                    size={27}
                    Icon={MdOutlineDiscount}
                />
            </ItemsGroup>
            <ItemsGroup title="سفارشات و سبد خرید">
                <SidebarItems
                    title="مدیریت سبد ها"
                    size={27}
                    Icon={TbShoppingCart}
                />
                <SidebarItems
                    title="مدیریت سفارش ها"
                    size={27}
                    Icon={TbShoppingCartCopy}
                />
                <SidebarItems
                    title="مدیریت نحوه ارسال"
                    size={27}
                    Icon={TbShoppingCartShare}
                />
            </ItemsGroup>
            <ItemsGroup title="کاربران و همکاران">
                <SidebarItems title="کاربران" size={27} Icon={FiUsers} />
                <SidebarItems title="همکاران" size={27} Icon={TbUserShield} />
            </ItemsGroup>
            <ItemsGroup title="پشتیبانی و ارتباطات">

                <SidebarItems title="پشتیبانی" size={27} Icon={BiSupport} />
            </ItemsGroup>
        </div>
    );
};

export default ListSection;
