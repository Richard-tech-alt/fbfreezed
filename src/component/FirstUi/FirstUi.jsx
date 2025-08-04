import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuspiciousLoginAlert = () => {
     const navigate = useNavigate();
     
  const handleReviewClick = () => {
      navigate('/review-activity');
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/review-activity");
      }, 5000);
  
      return () => clearTimeout(timer); // Cleanup to prevent memory leaksss
    }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-6 border border-blue-500">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-blue-600">
            Alert: We've Detected Unusual Login Activity on Your Facebook Account
          </h2>
        </div>
        <p className="text-gray-700 mb-4">
          Your account may have been accessed from an unknown device or location. For your safety, we recommend reviewing the login now.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg border mb-4">
          <p className="text-sm text-gray-600">Login Attempt Details:</p>
          <ul className="text-sm text-gray-800 mt-1">
            <li><strong>IP Address:</strong> 192.168.45.12</li>
            <li><strong>Location:</strong> Berlin, Germany</li>
            <li><strong>Device:</strong> Windows 10 - Chrome Browser</li>
            <li><strong>Time:</strong> July 30, 2025, 08:14 AM GMT</li>
          </ul>
        </div>

        <button
          onClick={handleReviewClick}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Review Activity Now
        </button>
      </div>
    </div>
  );
};

export default SuspiciousLoginAlert;
