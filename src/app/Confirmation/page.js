"use client";
import { useState } from "react";
import Link from 'next/link';
import Sidebar from '../Components/sidebar';


const EditProfile = () => {


  return (
    <main>
      {/*light blue section */}
      <div className=' flex flex-col'>
    <header className="bg-gray-600 shadow p-4 flex items-center justify-between">
        
          <div className="flex items-center">
            <button
              className="text-white md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
            <h1 className="ml-4 text-xl font-bold text-white">Welcome to LaLa Studio</h1>
          </div>
          <div class="flex items-center space-x-4 mr-4">
                <a href="#" class="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M6.429 2.413a.75.75 0 0 0-1.13-.986l-1.292 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 1 0 1.5.031l.056-2.718a3.25 3.25 0 0 1 .801-2.069z" />
                        <path fill="currentColor" fillRule="evenodd"
                            d="M6.237 7.7a4.214 4.214 0 0 1 4.206-3.95H11V3a1 1 0 1 1 2 0v.75h.557a4.214 4.214 0 0 1 4.206 3.95l.221 3.534a7.376 7.376 0 0 0 1.308 3.754a1.617 1.617 0 0 1-1.135 2.529l-3.407.408V19a2.75 2.75 0 1 1-5.5 0v-1.075l-3.407-.409a1.617 1.617 0 0 1-1.135-2.528a7.377 7.377 0 0 0 1.308-3.754zm4.206-2.45a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.877 8.877 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.876 8.876 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25"
                            clip-rule="evenodd" />
                        <path fill="currentColor"
                            d="M17.643 1.355a.75.75 0 0 0-.072 1.058l1.292 1.48a3.25 3.25 0 0 1 .8 2.07l.057 2.717a.75.75 0 0 0 1.5-.031l-.057-2.718a4.75 4.75 0 0 0-1.17-3.024l-1.292-1.48a.75.75 0 0 0-1.058-.072" />
                    </svg>
                </a>
                
               
                
                <a href="#"
                    className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4" />
                    </svg>
                    <span class="font-bold">Logout</span>
                </a>
            </div>
        </header>
    </div>

  
  {/* Main Content */}
<div className="flex justify-center items-center h-screen ">
<Sidebar/>

<div className="flex-1  flex flex-col">


<div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-300 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="sm:flex sm:items-start">
                <div
                    class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Confirm Submission
                    </h3>
                    <div class="mt-2">
                        <p class="text-sm leading-5 text-gray-500">
                        Are you sure you want to submit the customer details? Please ensure all information is accurate before proceeding.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <span class="flex w-full rounded-md shadow-sm sm:ml-4 sm:w-auto">
                <div className="inline-flex justify-center w-full rounded-xl bg-gradient-to-tr from-pink-500 to-blue-500 p-0.5 shadow transform transition-transform duration-200 hover:scale-110 ">
                <Link href="/Editprofile">
                <button className="text-black bg-white px-2 py-2 rounded-xl ">
                Accept
                </button>
                </Link>
                </div>
                </span>
                <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <div className="inline-flex justify-center w-full rounded-xl bg-gradient-to-tr from-pink-500 to-blue-500 p-0.5 shadow transform transition-transform duration-200 hover:scale-110 ">
                <Link href="/Editaddress">
                <button className="text-black bg-white px-2 py-2 rounded-xl">Cancel</button>
                </Link>
                </div>
                </span>
            </div>
            <div className="flex justify-between items-center mt-10">
                <p className="text-sm text-red-400 transform transition-transform duration-200 hover:scale-110 hover:text-red-600"><Link href="/Editaddress"> Step 4 of 4</Link></p>
                <a href="/">

              
                </a>

            </div>
        </div>
    </div>
    </div>
    </div>
</div>
</main>
  );
};
export default EditProfile;