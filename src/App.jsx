// import FacebookSupport from "./component/facebookContent"
import { Route, Routes } from "react-router-dom"
// import PopUp from "./component/PopUp"
import EmergencyCall from "./component/EmergencyPop"
import ReviewIdentityStep from "./component/SecondUi/SeondUi"
import SuspiciousLoginAlert from "./component/FirstUi/FirstUi"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SuspiciousLoginAlert/>}/>
        <Route path="/secure-account" element={<EmergencyCall/>}/>
        <Route path="/review-activity" element={<ReviewIdentityStep/>}/>
      </Routes>
    </div>
  )
}
export default App 