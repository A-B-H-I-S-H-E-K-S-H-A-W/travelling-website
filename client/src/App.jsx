import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/Home";
import Auth from "./pages/user/Auth";
import Search from "./pages/user/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/auth/v1/login"
            element={<Auth isLoginSection={true} />}
          />
          <Route
            path="/auth/v1/register"
            element={<Auth isLoginSection={false} />}
          />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
