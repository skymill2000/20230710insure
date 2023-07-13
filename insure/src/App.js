import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListExample from "./components/ListExample";
import QRcode from "./components/QRcode";
import AxiosExample from "./components/AxiosExample";
import NewsApiPage from "./pages/NewsApiPage";
import HospitalSearchPage from "./pages/HospitalSearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListExample />}></Route>
        <Route path="/qr" element={<QRcode />}></Route>
        <Route path="/axios" element={<AxiosExample />}></Route>
        <Route path="/news" element={<NewsApiPage />}></Route>
        <Route path="/hospital" element={<HospitalSearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
