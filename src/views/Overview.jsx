import DashboardBanner from '@/components/DashboardBanner';
import OverviewDetails from '@/components/OverviewDetails';
import ProfileOverview from '@/components/ProfileOverview';

const Overview = () => {
  return (
    <div className="relative w-full h-full overview">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <ProfileOverview />

        <OverviewDetails />
      </div>
    </div>
  );
};

export default Overview;
