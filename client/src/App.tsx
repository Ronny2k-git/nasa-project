import { Route, Routes } from "react-router-dom";
import "./index.css";
import History from "./pages/history";
import Launch from "./pages/launch";
import Upcoming from "./pages/upcoming";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Launch />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
