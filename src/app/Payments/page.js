"use client"
import { useState } from "react";
import Link from 'next/link';
import Sidebar from '../Components/sidebar';




const PaymentMethods = () => {

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


        
       
      <div className="   w-full h-screen p-10 text-black sm:w-[400px] md:w-[600px] lg:w-[1100px] max-w-full mx-auto">
  <div className="grid grid-cols-1 gap-6">
      <h2 className="text-2xl  mb-4">Payment Methods</h2>
      <ul className="space-y-3">
        <li  className="flex justify-between items-center p-3 border rounded-md">
        Credit Card    
            <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg transform transition-transform duration-200 hover:scale-110">
        <Link href="/CreditCardDetails">
          <button className="text-black bg-white px-4 py-2 rounded-xl">Edit</button>
        </Link>
      </div>
          </li>
          <li  className="flex justify-between items-center p-3 border rounded-md">
          PayPal    
            <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg transform transition-transform duration-200 hover:scale-110">
        <Link href="/AddressBook">
          <button className="text-black bg-white px-4 py-2 rounded-xl">Edit</button>
        </Link>
      </div>
          </li>
          <li  className="flex justify-between items-center p-3 border rounded-md">
          Bank Transfer   
            <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg transform transition-transform duration-200 hover:scale-110">
        <Link href="/AddressBook">
          <button className="text-black bg-white px-4 py-2 rounded-xl">Edit</button>
        </Link>
      </div>
          </li>
       
      </ul>
    </div>
    </div>
    </div>
    </div>
    
    </main>
  );
};

export default PaymentMethods;
