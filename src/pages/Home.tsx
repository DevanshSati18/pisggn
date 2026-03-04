import HeroSlider from '../components/ui/HeroSlider';
import WelcomeSection from '../components/ui/WelcomeSection';
import LinksAndActivities from '../components/ui/LinksAndActivities';
import LeadershipDesk from '../components/ui/LeadershipDesk';
import UpcomingEvents from '../components/ui/UpcomingEvents';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <HeroSlider/>
      <WelcomeSection/>
      <LinksAndActivities/>
      <LeadershipDesk/>
      <UpcomingEvents/>
    </div>
  );
};

export default Home;