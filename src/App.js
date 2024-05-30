import { Routes ,Route} from "react-router-dom";
import Registration from "./Component/Registration";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Component/Login";
import FrontPage from "./Component/FrontPage";
export default function App()
{
  return<>
    <Routes>
      <Route path="/" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/fp" element={<FrontPage/>}/>
    </Routes>
  
  </>
}