"use client"
import { useState } from "react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const trackOrder = async () => {
    if (!orderId) return;
    setLoading(true);
    try {
      // Simulated API call
      setTimeout(() => {
        const mockDetails = {
          status: "Shipped",
          estimatedDelivery: "2025-02-05",
          carrier: "DHL",
          trackingNumber: "123456789",
        };
        setOrderDetails(mockDetails);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching order details", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl text-blue-600 font-semibold mb-4">Track Your Order</h2>
        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="w-full text-black p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={trackOrder}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Tracking..." : "Track Order"}
        </button>
        {orderDetails && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
            <p><strong>Order Status:</strong> {orderDetails.status}</p>
            <p><strong>Estimated Delivery:</strong> {orderDetails.estimatedDelivery}</p>
            <p><strong>Carrier:</strong> {orderDetails.carrier}</p>
            <p><strong>Tracking Number:</strong> {orderDetails.trackingNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;