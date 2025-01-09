import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Index"
import Buy from "./pages/buy/Index"
import Success from "./pages/status/Index"
import NotFound from "./pages/404/Index"
import SignIn from "./pages/SignIn"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
