import Errorpage from './error';
import {Route, Routes} from 'react-router-dom';
import HomePage from './home'
import AddUser from './main_tools/register'
import Login from './main_tools/login'
import MainPage from './main_page'
import AddService from './main_tools/add_service'
import AddCrousel from './main_tools/add_crousel'


const Routing=()=>{

  return(
    <>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />  
          <Route path="/add_user" element={<AddUser/>} />
          <Route path="/login" element={<Login/>} />  
          <Route path="/main_menu" element={<MainPage/>} />  
          <Route path="/add_service" element={<AddService/>} />  
          <Route path="/add_crousel" element={<AddCrousel/>} />  
          <Route path="/*" element={<Errorpage/>} />
        </Routes>
    </>
    )
}


export default Routing;