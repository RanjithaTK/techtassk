import "./App.css"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import main from "./components/main"
import Navbar from "./components/Navbar"
import Form1 from "./components/Form1"
import Form from "./components/Form"
import MyForm from "./components/MyForm"
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MyForm /> */}
    </div>
  )
}

export default App
