"use client";
import { useState } from "react";
import Link from 'next/link';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 50, quantity: 1 },
    { id: 2, name: 'Product 2', price: 30, quantity: 2 },
    { id: 3, name: 'Product 3', price: 20, quantity: 1 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Cart');

  const handleClick = (item) => {
    setActive(item);
  }; 

  return (
    <main>
        <div className=' flex flex-col'>
    <header className="bg-blue-600 shadow p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="text-white md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
            <h1 className="ml-4 text-xl font-bold text-white">Welcome to LaLa Studio</h1>
          </div>
          <p className="mr-4 text-white font-bold">Hi Hansaka!</p>
        </header>
    </div>

    <div
        className={`fixed inset-y-0 left-0 transform bg-gray-100 mt-16 text-black w-64 transition-transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}>
        <button
          className="absolute top-4 right-4 text-black md:hidden"
          onClick={() => setMenuOpen(false)}
        >
           ✖ 
        </button>

        <nav className="p-4 mt-10">
          <ul>
            <li
              className={` text-lg  font-semibold p-2 rounded ${
                active === 'My Profile' ? 'bg-gray-700 text-white' : 'hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => handleClick('My Profile')}>
             <Link href="/">My Profile</Link>
            </li>

                  <li
                  className={`ml-8 text-md text-black p-2 rounded ${
                  active === 'Editprofile' ? 'text-blue-700 text-lg font-bold' : 'hover:font-bold hover:text-blue-700 hover:text-lg'
                  } `}
                  onClick={() => handleClick('Personal Profile')}
                  >
                  <Link href="/Editprofile">Personal Profile</Link>
                  </li>

                  <li
                  className={`ml-8 mb-2 text-md text-black  p-2 rounded ${
                  active === 'Editaddress' ? 'bg-gray-700 text-white' : 'hover:font-bold hover:text-blue-700 hover:text-lg'
                   }`}
                  onClick={() => handleClick('Address Book')}>
                  <Link href="/Editaddress">Address Book</Link>
                  </li>

            
            <li
              className={` text-lg text-black font-semibold p-2 rounded ${
                active === 'Orders' ? 'bg-gray-700 text-white' : 'hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => handleClick('Orders')}>  
              <Link href="/Orders">Orders</Link> {/* Link to the orders page */}
             
            </li>
            
                  <li
                  className={`ml-8  text-md text-black  p-2 rounded ${
                  active === 'Returns' ? 'bg-gray-700 text-white' : 'hover:font-bold hover:text-blue-700 hover:text-lg'
                   }`}
                   onClick={() => handleClick('My Returns')}>
                   <Link href="/Returns">My Returns</Link>
                   </li>

                  <li
                  className={`ml-8 mb-2 text-md text-black  p-2 rounded ${
                  active === 'Cansellations' ? 'bg-gray-700 text-white' : 'hover:font-bold hover:text-blue-700 hover:text-lg'
                   }`}
                  onClick={() => handleClick('My Cansellations')}>
                  <Link href="/Cansellations">My Cansellations</Link>
                  </li>

                  <li
                  className={`ml-8 mb-2 text-md text-black  p-2 rounded ${
                  active === 'Pending' ? 'bg-gray-700 text-white' : 'hover:font-bold hover:text-blue-700 hover:text-lg'
                   }`}
                  onClick={() => handleClick('Pending Orders')}>
                  <Link href="/Pendings">Pending Orders</Link>
                  </li>
            
            
            <li
              className={`mb-4 text-lg text-black font-semibold p-2 rounded ${
                active === 'Reviews' ? 'bg-gray-700 text-white' : 'hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => handleClick('Reviews')}
            >
             <Link href="/Reviews">My Reviews</Link>
            </li>
            <li
              className={`mb-4 text-lg text-black font-semibold p-2 rounded ${
                active === 'Cart' ? 'bg-gray-700 text-white' : 'hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => handleClick('Cart')}
            >
              <Link href="/Cart">Cart</Link>
            </li>
            <li
              className={`mb-4 text-lg text-black font-semibold p-2 rounded ${
                active === 'Wishlist' ? 'bg-gray-700 text-white' : 'hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => handleClick('Wishlist')}
            >
              <Link href="/Wishlist">My Wishlist</Link>
            </li>
          </ul>
        </nav>
      </div>




      <div className=" ml-80  p-6  w-full sm:w-[400px] md:w-[600px] lg:w-[1100px] max-w-full mx-auto">
      <div className="container mx-auto p-4">
        <h1 className="text-black text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Cart Items */}
          <div className="text-black col-span-2">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                  >
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">
                        Price: ${item.price} x {item.quantity}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">Your cart is empty.</p>
            )}
          </div>

          {/* Summary Section */}
          <div className=" text-black bg-white p-6 rounded-lg shadow-md">
            <h2 className=" text-blue-800 text-xl font-bold mb-4">Order Summary</h2>
            <div className=" text-black flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$5</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${calculateTotal() + 5}</span>
            </div>
            <button
              className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => alert('Proceed to checkout')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default CartPage;
