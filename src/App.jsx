import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import MenuDetail from "./pages/MenuDetail";
import Register from "./pages/Register";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Menu/:id" element={<MenuDetail/>}/>
      <Route path="/Register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App;