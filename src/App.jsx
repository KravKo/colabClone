import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Index"
import Buy from "./pages/buy/Index"
import Success from "./pages/status/Index"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
