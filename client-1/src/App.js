import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Page1 from './Components/Page1';
import Signin from './Components/Signin';
import DashBoard from './Components/Dashboard';
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page1/>}/>
      <Route path="/Signin" element={<Signin/>}/>
      <Route path='/Dashboard' element={<DashBoard/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;