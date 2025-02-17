"use client";
import { useState } from "react";
import Link from 'next/link';
import Sidebar from '../Components/sidebar';


const Contactdetails = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [errors, setErrors] = useState({ emailAddress: "", mobileNumber: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        let formValid = true;
        let newErrors = { emailAddress: "", mobileNumber: "" };

        if (emailAddress.trim() === "") {
            newErrors.emailAddress = "Please fill this section first";
            formValid = false;
        }
        if (mobileNumber.trim() === "") {
            newErrors.mobileNumber = "Please fill this section first";
            formValid = false;
        }

        setErrors(newErrors);

        if (formValid) {
            window.location.href = "/Editaddress";
        }
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


        <div className="flex-1 mt-20  flex flex-col">
        <div className="bg-white    w-full overflow-hidden">
        <div className="grid md:grid-cols-4 border-b border-green-300">
            <div className="p-6 border-r border-green-300 text-center relative opacity-50">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full  text-white flex items-center justify-center font-bold text-lg relative z-10  border-2 border-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
                            <path strokeLinecap="round" strokeLinejoin="round" strokewidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                </div>
                <h3 className="text-sm font-semibold text-blue-500">Personal Information</h3>
            </div>
                         <div className="p-6 border-r border-green-300  text-center relative ">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg relative z-10 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokewidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                </div>
                <h3 className="text-sm font-semibold text-green-500">Contact Details</h3>
            </div>
                        <div className="p-6 border-r border-green-300  text-center relative opacity-50">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full  text-white flex items-center justify-center font-bold text-lg relative z-10 border-2 border-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="orange">
                            <path strokeLinecap="round" strokeLinejoin="round" strokewidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokewidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div>
                <h3 className="text-sm font-semibold text-yellow-500">Address</h3>
            </div>
                        <div className="p-6 border-r border-green-300  text-center relative opacity-50">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full  text-white flex items-center justify-center font-bold text-lg relative z-10 border-2 border-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
                            <path strokeLinecap="round" strokeLinejoin="round" strokewidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <h3 className="text-sm font-semibold text-red-500">Confirmation</h3>
            </div>
        </div>

        <div class="p-12">
            <h2 class="text-3xl font-bold mb-8 text-green-600">Contact Details</h2>
           
           <form onSubmit={handleSubmit}>
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <label class="block mb-3 text-sm font-medium text-green-500">Mobile Number</label>
                    <div class="relative">
                        <input 
                        type="text" 
                        placeholder="+123456789"
                        value={mobileNumber} 
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className={`w-full px-4 py-3 border-2 rounded-xl text-black bg-transparent focus:outline-none focus:ring-2 pl-10
                            ${errors.mobileNumber ? "border-red-500 focus:ring-red-500" : "border-green-400 focus:ring-green-500"}`}
                    />
                       <svg xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-green-500 absolute left-3 top-1/2 transform -translate-y-1/2" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokewidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg> 
                    </div>
                </div>
                <div>
                    <label class="block mb-3 text-sm font-medium text-green-500">Email Address</label>
                    <div class="relative">
                    <input 
                        type="email" 
                        placeholder="JohnDoe@gmail.com"
                        value={emailAddress} 
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className={`w-full px-4 py-3 border-2 rounded-xl text-black bg-transparent focus:outline-none focus:ring-2 pl-10
                            ${errors.emailAddress ? "border-red-500 focus:ring-red-500" : "border-green-400 focus:ring-green-500"}`}
                    />
                        
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-green-500 absolute left-3 top-1/2 transform -translate-y-1/2" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
                
            </div>

            <div className="flex justify-between items-center mt-10">
                    <p className="text-sm text-green-400 transform transition-transform duration-200 hover:scale-110 hover:text-green-600"><Link href="/Editprofile"> Step 2 of 4</Link></p>
                    <Link href="/Editaddress">

                    <button type="submit" className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-800 
                        transition-colors flex items-center">
                        Continue  
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    </Link>
                </div>
                </form>
        </div>
    </div>
</div>
</div>
</div>
  </main>
  
  );
};

export default Contactdetails;
