import Error404 from "@/components/pages/404/404";
import Main from "@/components/pages/main/main"
import Rules from "@/components/pages/rules/rules";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Main/>} path="/"/>
      <Route path="/rules" element={<Rules/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
