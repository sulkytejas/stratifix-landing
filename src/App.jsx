import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import BookDemo from "./pages/BookDemo";
import Telecommunications from "./pages/Telecommunications";
import AISalesTraining from "./pages/AISalesTraining";
import Technology from "./pages/Technology";
import Onboarding from "./pages/Onboarding";
import LeadershipCoaching from "./pages/LeadershipCoaching";
import CustomerServiceTraining from "./pages/CustomerServiceTraining";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/solutions/telecommunications" element={<Telecommunications />} />
        <Route path="/solutions/ai-sales-training" element={<AISalesTraining />} />
        <Route path="/solutions/technology" element={<Technology />} />
        <Route path="/solutions/onboarding" element={<Onboarding />} />
        <Route path="/solutions/leadership-coaching" element={<LeadershipCoaching />} />
        <Route path="/solutions/customer-service-training" element={<CustomerServiceTraining />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
