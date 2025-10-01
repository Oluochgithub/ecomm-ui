import React from "react";

const Header = ({cartCount, onOpenCart}) => {
    <Header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">e-shop</h1>
        <button className="relative" onClick={onOpenCart}>
            Cart {cartCount > 0 && <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-2">{cartCount}</span>
            }
        </button>
    </Header>
}
export default Header;