import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListExample from "./components/ListExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListExample />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
