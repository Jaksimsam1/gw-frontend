import { Route } from "react-router";
import { Routes } from "react-router";
import { Main } from "./views/Main";
import { Sample } from "./views/test/Sample";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sample" element={<Sample />} />
    </Routes>
  )
}

export default App;
