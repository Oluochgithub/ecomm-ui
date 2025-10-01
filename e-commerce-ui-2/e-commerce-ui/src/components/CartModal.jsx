import React from 'react';

const CartModal = ({ isOpen,onClose,cartItems,onRemoveItem}) => {
    if(!isOpen) return null;
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Cart is Empty</p>
                ): (
                    <>
                        <ul>
                            {cartItems.map((item)=>(
                                <li key={item.id} className="flex justify-between mb-2">
                                <span>{item.title} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                                <button onClick={() => onRemoveItem(item.id)} className="text-red-500 ml-4">
                                    Remove
                                </button>
                                </li>
                            )
                            )}
                        </ul>
                        <p className="font-bold mt-4">Total: ${total.toFixed(2)}</p>
                    </>
                )} 
                <button onClick={onClose} className="mt-4 bg-gray-500 text-white py-2 px-4 rounded">
                Close
                </button>
            </div>
        </div>
    )
}
 export default CartModal;