import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Index"
import Buy from "./pages/buy/Index"
import Success from "./pages/status/Index"
import Map from "./pages/map/Index"
import NotFound from "./pages/404/Index"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/success" element={<Success />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
