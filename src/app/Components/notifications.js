// components/Notification.js (Optional)
import React, { useState, useEffect } from "react";

const Notification = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => onClose(), 5000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;
  const newNotifications = [
    "You have a new message from the admin.",
    "Your profile has been updated successfully.",
  ];

  const oldNotifications = [
    
    "Your request for a meeting has been approved.",
  ];

  return (
    <div className="fixed top-5 right-5 bg-blue-500 text-white p-4 rounded-lg shadow-lg z-50">
      <p>{message}</p>
      <button
        className="absolute top-2 right-2 text-white"
        onClick={onClose}
      >
        X
      </button>
      {/* Right Sidebar for Notifications */}
    <div className="w-[400px] h-[500px] lg:w-[400px]  bg-gray-100 p-4  shadow-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Notifications</h2>
      
      <div className="mb-10">
        <h3 className="font-semibold text-gray-600 mb-2">New Notifications</h3>
        <ul className="space-y-2">
          {newNotifications.map((notif, index) => (
            <li key={index} className="p-2 text-black bg-blue-100 rounded">
              {notif}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-gray-600 mb-2">Old Notifications</h3>
        <ul className="space-y-2">
          {oldNotifications.map((notif, index) => (
            <li key={index} className="p-2 text-black bg-gray-200 rounded">
              {notif}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Notification;
