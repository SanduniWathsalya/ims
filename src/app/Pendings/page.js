"use client"
import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../Components/sidebar';

const PendingItems = ({ image, price, esstimatedDate, onConfirm }) => {
  
  
  return (
    <div className="w-full max-w-full mx-auto rounded overflow-hidden shadow-lg bg-gray-100 p-4 mb-4">
      <div className="flex items-center">
        {/* Image on the left */}
        <img className="w-32 h-32 object-cover mr-4" src={image} alt="Return Item" />
        
        {/* Details on the right */}
        <div className="flex-1">
          <h2 className="font-bold text-black text-xl mb-2">Item Name</h2>
          <p className="text-gray-700 text-base">Price: ${price}</p>
          <p className="text-gray-700 text-base">Esstimated Date: {esstimatedDate}</p>
          <button
            onClick={onConfirm}
            className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
          >
            Confirm Refund
          </button>
        </div>
      </div>
    </div>
  );
};

const PendingOrders = () => {
  const handleRefundConfirmation = () => {
    alert('Refund confirmed!');
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Pendings');

  const handleClick = (item) => {
    setActive(item);
  }; 

  return (
    <main>
      <div className="flex min-h-screen ">
        <Sidebar />
        {/* Main Content */}
    <div className="flex flex-col flex-1 overflow-y-auto">

<div className="flex justify-end h-12 bg-white border-b border-gray-200">
           
          <div className="flex items-center gap-4 text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300">
            {/* Bell Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="black" d="M6.429 2.413a.75.75 0 0 0-1.13-.986l-1.292 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 1 0 1.5.031l.056-2.718a3.25 3.25 0 0 1 .801-2.069z" />
              <path fill="black" fillRule="evenodd" d="M6.237 7.7a4.214 4.214 0 0 1 4.206-3.95H11V3a1 1 0 1 1 2 0v.75h.557a4.214 4.214 0 0 1 4.206 3.95l.221 3.534a7.376 7.376 0 0 0 1.308 3.754a1.617 1.617 0 0 1-1.135 2.529l-3.407.408V19a2.75 2.75 0 1 1-5.5 0v-1.075l-3.407-.409a1.617 1.617 0 0 1-1.135-2.528a7.377 7.377 0 0 0 1.308-3.754z" clipRule="evenodd" />
            </svg>
          
          
            {/* Logout Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="black" d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4" />
            </svg>
            

           </div> 
          </div>

      <div className="flex-1  flex flex-col">
      <div className="   w-full h-screen p-10 sm:w-[400px] md:w-[600px] lg:w-[1100px] max-w-full mx-auto">
  <div className="grid grid-cols-1 gap-6">
    <h1 className="text-black text-2xl">Pending Orders</h1>
    {/* Dummy list of return items */}
    <div className=" grid grid-cols-4 gap-30 border border-gray-300 p-4 rounded-lg">
      {/* First Column */}
      <div className="flex flex-col justify-between">
        <p className="text-gray-600">Esstimated Date: 2025-01-05</p>
        <p className="text-gray-600 mt-2">Order Number: #123456</p>
      </div>

      {/* Second Column */}
      <div className="flex items-center">
        <img
          src="/images/returnbag.jpeg"
          alt="Product Image"
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>

      {/* Third Column */}
      <div className="flex flex-col">
        <p className="font-medium text-gray-500">Product Name:</p>
        <p className="text-sm text-gray-500">Quantity: 2</p>
        
        <Link href="/Editprofile">
                <button className="text-black justify-center bg-gray-300 px-12 py-1 mt-2 rounded-lg  hover:bg-green-600 hover:text-white "
                onClick={() => handleRefundConfirmation()}>
                Confirm Delivery
                </button>
                </Link>
      </div>

      {/* Fourth Column */}
      <div className="flex items-center justify-end ">
        <button className="text-blue-500 underline">Track Order</button>
      </div>
    </div>

    {/* Repeat structure for other items */}
    <div className="grid grid-cols-4 gap-30 border border-gray-300 p-4 rounded-lg">
      {/* First Column */}
      <div className="flex flex-col justify-between">
        <p className="text-gray-600">Esstimated Date: 2025-01-06</p>
        <p className="text-gray-600 mt-2">Order Number: #654321</p>
      </div>

      {/* Second Column */}
      <div className="flex items-center">
        <img
          src="images/returnshirt.jpeg"
          alt="Product Image"
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>

      {/* Third Column */}
      <div className="flex flex-col">
        <p className="font-medium text-gray-500">Product Name:</p>
        <p className="text-sm text-gray-500">Quantity: 1</p>
       
        <Link href="/Editprofile">
                <button className="text-black justify-center bg-gray-300 px-12 py-1 mt-2 rounded-lg  hover:bg-green-600 hover:text-white "
                onClick={() => handleRefundConfirmation()}>
                Confirm Delivery
                </button>
                </Link>
      </div>

      {/* Fourth Column */}
      <div className="flex items-center justify-end">
        <button className="text-blue-500 underline">Track Order</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
    
    </main>
  );
};

export default PendingOrders;
