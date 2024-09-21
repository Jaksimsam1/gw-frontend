import { Route } from "react-router";
import { Routes } from "react-router";
import { Main } from "./views/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default App;
