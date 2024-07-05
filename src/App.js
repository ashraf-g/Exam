import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
