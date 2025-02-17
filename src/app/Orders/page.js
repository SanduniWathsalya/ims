"use client"
import { useState } from 'react';
import Link from 'next/link';


const Orders = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Orders');

  const handleClick = (item) => {
    setActive(item);
  };

  return (
  <main>
    {/*light blue section */}
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

    <div className="flex h-screen">
      {/* Sidebar */}
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
              className={` text-lg text-black font-semibold p-2 rounded ${
                active === 'My Profile' ? 'bg-gray-700 text-white' : 'hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => handleClick('My Profile')}>
             <Link href="/">My Profile</Link>
            </li>

                  <li
                  className={`ml-8 text-md text-black p-2 rounded ${
                  active === 'Editprofile' ? 'bg-gray-700 text-white' : 'hover:font-bold hover:text-blue-700 hover:text-lg'
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



     {/* Main Content */}
     <div className="ml-20 flex justify-center items-center h-screen">
      <div className="flex-1 ml-64 flex flex-col">
        <main className="p-4 overflow-y-auto min-h-screen flex flex-col items-center justify-start bg-white">
        <div className="   grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {/* My Returns*/}
            <div className="w-[400] bg-transparent border border-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 mt-10 shadow rounded">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl text-black font-bold">My Returns</h2>
                <Link href="/Returns" className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
                  View
                </Link>
              </div>
              <p className="text-black">Click here to see my Returns</p>
            </div>

            {/* Mt Cansellations */}
            <div className="bg-transparent border border-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 w-[500px] mt-10 shadow rounded">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl text-black font-bold">My Cansellations</h2>
                <Link href="/Cancellations" className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
                  View
                </Link>
              </div>
  
  <p className="text-black">Click here to see my Cansellations</p>
</div>

          </div>
        </main>
      </div>
      </div>
    </div>
    </main>
  );
};

export default Orders;
