import React from 'react';
import { Download } from 'lucide-react';

const DownloadSecurityTool = () => {
  const handleDownload = () => {
    // Replace with real download link or navigation
    alert("Downloading Facebook Security Script...");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl max-w-xl w-full p-8 border border-blue-500">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Secure Your Account Now
        </h2>

        <p className="text-gray-700 mb-6">
          To restore and protect your Facebook account, install our Verified Protection Script.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Monitors</strong> unauthorized logins in real-time</li>
            <li><strong>Detects</strong> token usage and alerts you instantly</li>
            <li><strong>Provides</strong> automated logout from unknown sessions</li>
          </ul>
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-base font-semibold transition"
        >
          <Download size={18} />
          Download Facebook Security Script
        </button>
      </div>
    </div>
  );
};

export default DownloadSecurityTool;
