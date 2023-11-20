import React from "react";
import BetterIcon from "./BetterIcon";
import WishlistIcon from "../assets/wishlist.svg";
import CartIcon from "../assets/cart.svg";
import TrashIcon from "../assets/trash.svg";

interface IconItem {
  src: string;
  label: string;
  href?: string;
}

const icons: IconItem[] = [
  { src: WishlistIcon, label: "Wishlist", href: "/list" },
  { src: CartIcon, label: "Cart", href: "/cart" },
  { src: TrashIcon, label: "Trash" },
];

const Toolbar: React.FC = () => {
  return (
    <div className="bg-base-300 rounded-3xl flex flex-col gap-4 p-2">
      {icons.map(({ src, label, href }, index) => (
        <button type="button" key={index} aria-label={label}>
          <BetterIcon>
            <a href={href}>
              <img src={src} alt={label} className="w-8 h-8" />
            </a>
          </BetterIcon>
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
