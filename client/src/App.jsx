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
import Agents from "./components/Agents"

const App = () => {
  return (
    <Routes>
      {/* Admin - no Navbar/Footer */}
      <Route path="/admin" element={<Admin />} />

      {/* Baaki pages - with Navbar/Footer */}
      <Route path="/*" element={
        <div className="min-h-screen bg-cream">
          <Navbar/>
          <main className="pt-20 min-h-screen">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/properties" element={<Property />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
           <Route path="/agents" element={<Agents />} />

            </Routes>
          </main>
          <Footer/>
        </div>
      }/>
    </Routes>
  )
}

export default App