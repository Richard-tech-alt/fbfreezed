import FacebookSupport from "./component/facebookContent"
import { Route, Routes } from "react-router-dom"
import PopUp from "./component/PopUp"
import EmergencyCall from "./component/EmergencyPop"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FacebookSupport/>}/>
        <Route path="/emergency-call" element={<EmergencyCall/>}/>
        <Route path="/pop-up" element={<PopUp/>}/>
      </Routes>
    </div>
  )
}
export default App