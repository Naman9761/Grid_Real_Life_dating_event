import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventDetails from './pages/EventDetails';
import EventsPage from './pages/EventsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutPage from './pages/AboutPage';
import JoinWaitlistPage from './pages/JoinWaitlistPage';

export default function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen selection:bg-brand-pink/30 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/join-waitlist" element={<JoinWaitlistPage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
