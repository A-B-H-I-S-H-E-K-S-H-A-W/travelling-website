import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/Home";
import Login from "./pages/user/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/v1/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
