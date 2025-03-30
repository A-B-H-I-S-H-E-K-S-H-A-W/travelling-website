import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/Home";
import Auth from "./pages/user/Auth";
import Search from "./pages/user/Search";
import InfoPage from "./pages/user/InfoPage";
import BusDashboard from "./pages/admin/bus/BusDashboard";
import FlightDashboard from "./pages/admin/flights/FlightDashboard";
import HotelDashboard from "./pages/admin/hotels/HotelDashboard";

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
          <Route path="/info" element={<InfoPage />} />
          {/* Admin Dashboard */}
          <Route path="/bus/admin/dashboard" element={<BusDashboard />} />
          <Route path="/flight/admin/dashboard" element={<FlightDashboard />} />
          <Route path="/hotel/admin/dashboard" element={<HotelDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
