
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ABoutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import ProjectInfo from "./pages/projectInfo"
//import "./App.css"


import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  //comments out here don't need curly brackets because this is just regular JS out here (JSX is in the return statement)
  return (
    <BrowserRouter>
      {/* empty tags like above and below define a fragment to allow you to have a root element which doesn't render to an actual element when compiling */}
      {/* anything in the return() statement is JSX so write your comments within the root element with curly brackets */}
      {/* comments which look like a stream comment within curly brackets are JSX comments */}
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectInfo/:Id" element={<ProjectInfo />} />
        <Route path="/aboutMe" element={<ABoutMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
