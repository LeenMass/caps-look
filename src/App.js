import { BrowserRouter as Router, Routes, Route, BrowserRouter,useMatch} from "react-router-dom";
import Projects from "./pages/Projects/index";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/index";
import Absence from "./pages/Absence/index"
import Employee from "./pages/Employes/index";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login/Login";
import Style from "./style.module.scss"
import "./reset.scss"
import "./App.scss";

function App() {
  const match= useMatch("/")

  console.log(window.location.pathname)

  if (window.location.pathname === '/') {
    return (
      <div style={{textAlign:'center'}}>
       <NavBar/>
          
           {!match&&<Sidebar/>}
           <Routes>
           <Route path="/" element={<Login />} />
             <Route path="/Home" element={<Home/>}/>
             <Route path="/Projects" element={<Projects />} />
             <Route path="/Absence" element={<Absence />} />
             <Route path="/Employes" element={<Employee />} />
           </Routes>
        
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center' }}>

      <Router>
        <NavBar />
        <div className={Style.pageBody}>
          <Sidebar />
          <div className={Style.mainPage}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Absence" element={<Absence />} />
              <Route path="/Employes" element={<Employee />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div >
  )
}

export default App
