

"use client";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Components/sidebar";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const profile = {
    fullName: "Hansaka Wijesinghe",
    email: "hansaka@example.com",
    mobile: "1234567890",
  };

  

  return (
    <main className= "h-auto bg-gray-100">
      <div className="flex min-h-screen h-auto">
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
       
        <div className="flex-1 flex flex-col mt-2">
          {/* Video Slider - Below Header */}
          <div className="w-full bg-gray-100 overflow-hidden">
            <div className="flex justify-center">
              <video className="w-full h-44 object-cover position-fix" autoPlay muted loop>
                <source src="/images/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Content Area */}
          <main className="p-2 overflow-y-auto   flex flex-col items-center justify-between ">
 <div className="flex justify-between w-full px-20 mt-10 flex-wrap">
  {/* Personal details */}
  <div className="w-[400px] h-[160px] bg-white border border-gray-300 p-4 shadow rounded">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg text-black font-bold">Personal Profile</h2>
      <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg transform transition-transform duration-200 hover:scale-110">
        <Link href="/Editprofile">
          <button className="text-black bg-white px-4 py-2 rounded-xl">Edit</button>
        </Link>
      </div>
    </div>
    <div className="text-black text-sm">
      <p><strong>Name:</strong> {profile.fullName}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.mobile}</p>
    </div>
  </div>

  {/* Address Book */}
  <div className="w-[400px] h-[160px] bg-white border border-gray-300 p-4 shadow rounded">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg text-black font-bold">Address Book</h2>
      <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg transform transition-transform duration-200 hover:scale-110">
        <Link href="/AddressBook">
          <button className="text-black bg-white px-4 py-2 rounded-xl">Edit</button>
        </Link>
      </div>
    </div>
    <p className="text-black text-sm">Save your address here</p>
  </div>
</div>


</main>

        </div>

        
      </div>
      </div>
    </main>
  );
};

export default Dashboard;
