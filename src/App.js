import { Route, Routes } from "react-router-dom";
import Home from "./navigation/Home";
import About from "./navigation/About";
import Contact from "./navigation/Contactus";
import Navbar from "./navigation/Navbar";
import OrderSummary from "./navigation/Ordersummary";



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="order-summary" element={<OrderSummary/>}/>
    </Routes>
    </>
  );
}   

export default App;
