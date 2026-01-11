import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <BrowserRouter basename="/interfaz/">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
