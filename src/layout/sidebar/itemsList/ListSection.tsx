import { LuLayers3 } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { TbBrandAppgallery } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import { BiSolidColor } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";
import { TbShoppingCartCopy } from "react-icons/tb";
import { TbShoppingCartShare } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { TbUserShield } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlineDiscount } from 'react-icons/md';
import SidebarItems from "./sidebarItems";
import ItemsGroup from "./itemsGroup";

// Data structure for the sidebar sections
const sidebarGroups = [
  {
    title: "فروشگاه",
    items: [
      { title: "گروهبندی محصولات", Icon: LuLayers3, size: 27 },
      { title: "مدیریت محصولات", Icon: AiOutlineProduct, size: 27 },
      { title: "مدیریت برندها", Icon: TbBrandAppgallery, size: 27 },
      { title: "مدیریت گارنتی ها", Icon: LuShieldCheck, size: 27 },
      { title: "مدیریت رنگ ها", Icon: BiSolidColor, size: 27 },
      { title: "مدیریت تخفیف ها", Icon: MdOutlineDiscount, size: 27 },
    ],
  },
  {
    title: "سفارشات و سبد خرید",
    items: [
      { title: "مدیریت سبد ها", Icon: TbShoppingCart, size: 27 },
      { title: "مدیریت سفارش ها", Icon: TbShoppingCartCopy, size: 27 },
      { title: "مدیریت نحوه ارسال", Icon: TbShoppingCartShare, size: 27 },
    ],
  },
  {
    title: "کاربران و همکاران",
    items: [
      { title: "کاربران", Icon: FiUsers, size: 27 },
      { title: "همکاران", Icon: TbUserShield, size: 27 },
    ],
  },
  {
    title: "پشتیبانی و ارتباطات",
    items: [
      { title: "پشتیبانی", Icon: BiSupport, size: 27 },
    ],
  },
];

const ListSection = () => {
  return (
    <div className={`flex flex-col gap-2 w-full`}>
      {sidebarGroups.map((group, groupIndex) => (
        <ItemsGroup key={groupIndex} title={group.title}>
          {group.items.map((item, itemIndex) => (
            <SidebarItems
              key={itemIndex}
              title={item.title}
              size={item.size}
              Icon={item.Icon}
            />
          ))}
        </ItemsGroup>
      ))}
    </div>
  );
};

export default ListSection;