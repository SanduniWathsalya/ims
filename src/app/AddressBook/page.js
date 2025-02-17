"use client";
import { useState } from "react";
import Link from 'next/link';
import Sidebar from "../Components/sidebar";

export default function AddressBookEdit() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    landmark: "",
    province: "",
    city: "",
    zone: "",
    address: "",
    label: "HOME",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Editaddress');

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
    

    
        <div className="mt-20 bg-white p-6  rounded shadow-md w-full sm:w-[600px] md:w-[800px] lg:w-[1100px] max-w-full mx-auto">
          <h2 className="text-2xl text-black font-bold mb-4">Edit Address</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                 className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                 className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Landmark (Optional)</label>
                <input
                  type="text"
                  name="landmark"
                  placeholder="E.g. beside train station"
                  value={formData.landmark}
                  onChange={handleChange}
                 className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-400"
                />
              </div>
            </div>

           {/* Right Column */}
            <div className="space-y-4">
              <div>
  <label className="block text-sm font-medium text-gray-700">Province / Region</label>
  <select
   type="text"
    name="province"
    value={formData.province}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-400"
  >
    <option value="" disabled className="text-gray-400">
      Please choose your province
    </option>
    <option value="Province1" className="text-gray-800">Central</option>
    <option value="Province2" className="text-gray-800">Eastern</option>
    <option value="Province3" className="text-gray-800">Northern</option>
    <option value="Province4" className="text-gray-800">Uva</option>
    <option value="Province5" className="text-gray-800">Sabaragamuwa</option>
    <option value="Province6" className="text-gray-800">North Central</option>
    <option value="Province7" className="text-gray-800">North Western</option>
    <option value="Province8" className="text-gray-800">Southern</option>
    <option value="Province9" className="text-gray-800">Western</option>
  
  </select>
</div>

  <div>
    <label className="block text-sm font-medium text-gray-700">City</label>
    <select
      name="city"
      value={formData.city}
      onChange={handleChange}
     className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-400"
    >
      <option value="" disabled>Please choose your city</option>
      <option value="City1" className="text-gray-800">City 1</option>
      <option value="City2" className="text-gray-800">City 2</option>
      {/* Add other cities */}
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">Zone</label>
    <select
      name="zone"
      value={formData.zone}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-400"
    >
      <option value="" disabled>Please choose your zone</option>
      <option value="Zone1" className="text-gray-800">Zone 1</option>
      <option value="Zone2" className="text-gray-800">Zone 2</option>
      {/* Add other zones */}
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">Address</label>
    <input
      type="text"
      name="address"
      placeholder="Enter address"
      value={formData.address}
      onChange={handleChange}
   className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-400"
    />
  </div>
</div>


            {/* Submit Buttons */}
            <div className="col-span-full flex justify-between mt-4">
            <div className="inline-flex justify-center rounded-xl bg-gradient-to-tr from-pink-500 to-blue-500 p-0.5 shadow transform transition-transform duration-200 hover:scale-110 ">
                <Link href="/">
                <button className="text-black bg-white px-2 py-2 rounded-xl ">
                Cancel
                </button>
                </Link>
                </div>
                <div className="inline-flex justify-center  rounded-xl bg-gradient-to-tr from-pink-500 to-blue-500 p-0.5 shadow transform transition-transform duration-200 hover:scale-110 ">
                <Link href="/Editprofile">
                <button className="text-black bg-white px-3 py-2 rounded-xl ">
                Save
                </button>
                </Link>
                </div>
            </div>









          </form>
        </div>
      </div>
      </div>
      
    </main>
  );
}
