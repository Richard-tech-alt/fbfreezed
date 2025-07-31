// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ReviewIdentityStep = () => {
//   const [userResponse, setUserResponse] = useState(null);

//   const navigate = useNavigate();
     
//   const handleYes = () => {
//       navigate('/secure-account');
//   };
// useEffect(() => {
//       const timer = setTimeout(() => {
//         navigate("/review-activity");
//       }, 5000);
  
//       return () => clearTimeout(timer); // Cleanup to prevent memory leaks
//     }, [navigate]);


//   const handleNo = () => {
//     setUserResponse("no");
//   };

//   const handleVerify = () => {
//     alert("Proceeding to Step 3: Ownership Verification...");
//     navigate("/secure-account")
//   };

//   const loginAttempts = [
//     {
//       id: 1,
//       ip: "192.168.45.12",
//       location: "Berlin, Germany",
//       device: "Windows 10 - Chrome",
//       risk: "High",
//     },
//     {
//       id: 2,
//       ip: "172.22.33.10",
//       location: "Paris, France",
//       device: "iPhone - Safari",
//       risk: "Low",
//     },
//     {
//       id: 3,
//       ip: "10.0.0.55",
//       location: "San Francisco, USA",
//       device: "MacOS - Firefox",
//       risk: "Low",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-xl rounded-2xl max-w-2xl w-full p-6 border border-gray-300">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Suspicious Activity Log</h2>

//         <div className="overflow-x-auto mb-6">
//           <table className="w-full text-sm text-left text-gray-700 border">
//             <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
//               <tr>
//                 <th className="px-4 py-2">IP Address</th>
//                 <th className="px-4 py-2">Location</th>
//                 <th className="px-4 py-2">Device</th>
//                 <th className="px-4 py-2">Risk Level</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loginAttempts.map((attempt) => (
//                 <tr
//                   key={attempt.id}
//                   className={`border-t ${
//                     attempt.risk === "High" ? "bg-red-100 text-red-700 font-semibold" : "bg-white"
//                   }`}
//                 >
//                   <td className="px-4 py-2">{attempt.ip}</td>
//                   <td className="px-4 py-2">{attempt.location}</td>
//                   <td className="px-4 py-2">{attempt.device}</td>
//                   <td className="px-4 py-2">{attempt.risk}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="text-gray-800 mb-4 text-sm">Is this you?</p>
//         <div className="flex gap-4 mb-6">
//           <button
//             onClick={handleYes}
//             className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
//           >
//             Yes
//           </button>
//           <button
//             onClick={handleNo}
//             className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
//           >
//             No
//           </button>
//         </div>

//         {userResponse === "no" && (
//           <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg border border-yellow-300 mb-4">
//             <p>
//               We've locked access temporarily. Please continue to verify your ownership.
//             </p>
//           </div>
//         )}

//         {userResponse === "no" && (
//           <button
//             onClick={handleVerify}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
//           >
//             Verify Ownership
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewIdentityStep;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewIdentityStep = () => {
  const [userResponse, setUserResponse] = useState(null);
     
    const navigate = useNavigate();
     
  const handleYes = () => {
      navigate('/secure-account');
  };
useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/secure-account");
      }, 5000);
  
      return () => clearTimeout(timer); // Cleanup to prevent memory leaks
    }, [navigate]);

  const handleNo = () => {
    setUserResponse("no");
  };

  const handleVerify = () => {
     navigate("/secure-account");
  };

  const loginAttempts = [
    {
      id: 1,
      ip: "192.168.45.12",
      location: "Berlin, Germany",
      device: "Windows 10 - Chrome",
      risk: "High",
    },
    {
      id: 2,
      ip: "172.22.33.10",
      location: "Paris, France",
      device: "iPhone - Safari",
      risk: "Low",
    },
    {
      id: 3,
      ip: "10.0.0.55",
      location: "San Francisco, USA",
      device: "MacOS - Firefox",
      risk: "Low",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-3 sm:p-4 lg:p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full p-4 sm:p-6 lg:p-8 border border-gray-300">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center sm:text-left">
          Suspicious Activity Log
        </h2>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto mb-6">
          <table className="w-full text-sm text-left text-gray-700 border rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">IP Address</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Device</th>
                <th className="px-4 py-3">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {loginAttempts.map((attempt) => (
                <tr
                  key={attempt.id}
                  className={`border-t ${
                    attempt.risk === "High" ? "bg-red-100 text-red-700 font-semibold" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-3">{attempt.ip}</td>
                  <td className="px-4 py-3">{attempt.location}</td>
                  <td className="px-4 py-3">{attempt.device}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      attempt.risk === "High" 
                        ? "bg-red-200 text-red-800" 
                        : "bg-green-200 text-green-800"
                    }`}>
                      {attempt.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4 mb-6">
          {loginAttempts.map((attempt) => (
            <div
              key={attempt.id}
              className={`border rounded-lg p-4 ${
                attempt.risk === "High" 
                  ? "bg-red-50 border-red-200" 
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800 text-sm">Login Attempt #{attempt.id}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  attempt.risk === "High" 
                    ? "bg-red-200 text-red-800" 
                    : "bg-green-200 text-green-800"
                }`}>
                  {attempt.risk}
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">IP Address:</span>
                  <span className="text-right">{attempt.ip}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span className="text-right">{attempt.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Device:</span>
                  <span className="text-right">{attempt.device}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base text-center sm:text-left">
          Do you recognize these login attempts?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
          <button
            onClick={handleYes}
            className="flex-1 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white py-3 px-6 rounded-lg font-medium transition duration-200 text-sm sm:text-base"
          >
            Yes, this was me
          </button>
          <button
            onClick={handleNo}
            className="flex-1 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white py-3 px-6 rounded-lg font-medium transition duration-200 text-sm sm:text-base"
          >
            No, not me
          </button>
        </div>

        {userResponse === "no" && (
          <div className="bg-yellow-100 text-yellow-800 p-4 sm:p-5 rounded-lg border border-yellow-300 mb-4 sm:mb-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Account Temporarily Locked</h4>
                <p className="text-sm">
                  We've temporarily restricted access to your account for security. Please verify your identity to continue.
                </p>
              </div>
            </div>
          </div>
        )}

        {userResponse === "no" && (
          <button
            onClick={handleVerify}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium transition duration-200 text-sm sm:text-base"
          >
            Verify My Identity
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewIdentityStep;
