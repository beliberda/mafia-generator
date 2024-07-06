import Error404 from "@/components/pages/404/404";
import GamePage from "@/components/pages/game/game";
import Main from "@/components/pages/main/main"
import Rules from "@/components/pages/rules/rules";
import {Routes,Route, HashRouter } from "react-router-dom";
function App() {

  return (
    <>
    <HashRouter>
    <Routes>
      <Route element={<Main/>} path="/"/>
      <Route path="/rules" element={<Rules/>}/>
      <Route path="/game" element={<GamePage/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    </HashRouter>
    </>
  )
}

export default App
