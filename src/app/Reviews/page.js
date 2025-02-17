"use client"
import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../Components/sidebar';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ text: '', image: null });

  const handleTextChange = (e) => {
    setNewReview({ ...newReview, text: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewReview({ ...newReview, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (newReview.text || newReview.image) {
      setReviews([newReview, ...reviews]);
      setNewReview({ text: '', image: null });
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Reviews');

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

    <div className="min-h-screen   p-4">
    <div className="w-full sm:w-[400px] md:w-[600px] lg:w-[1200px] max-w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Your Review</h2>
        <div className="space-y-4">
          <textarea
            value={newReview.text}
            onChange={handleTextChange}
            placeholder="Write your review here..."
            className="w-full p-3 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
          <div>
            <label
              htmlFor="imageUpload"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Upload an Image (optional)
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>

      <div className="max-w-full bg-gray-200 mx-auto mt-10 p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Previous Reviews</h3>
        <div className="space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm bg-white"
              >
                {review.image && (
                  <img
                    src={review.image}
                    alt="Review"
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                )}
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No reviews yet. Be the first to add one!</p>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
    </main>
  );
}
