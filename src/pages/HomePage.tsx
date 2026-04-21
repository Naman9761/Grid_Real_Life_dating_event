import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import EventFormats from '../components/EventFormats';
import Experience from '../components/Experience';
import UpcomingEvents from '../components/UpcomingEvents';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <EventFormats />
      <Experience />
      <UpcomingEvents />
    </>
  );
}
