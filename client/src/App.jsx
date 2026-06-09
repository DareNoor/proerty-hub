import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Property from "./pages/Property"
import PropertyDetails from "./pages/PropertyDetails"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"

const App = () => {
  return (
  <>
    <Navbar/>
    <div className="pt-20 min-h-screen bg-cream">
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/properties" element={<Property />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />


    </Routes>
    </div>
    <Footer/>
  
  </>
  )
}

export default App