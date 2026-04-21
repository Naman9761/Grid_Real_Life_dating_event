/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import EventFormats from './components/EventFormats';
import Experience from './components/Experience';
import UpcomingEvents from './components/UpcomingEvents';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen selection:bg-brand-pink/30 selection:text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <EventFormats />
      <Experience />
      <UpcomingEvents />
      <Footer />
    </main>
  );
}
