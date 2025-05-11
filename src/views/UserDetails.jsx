import DashboardBanner from '@/components/DashboardBanner';
import UserProfileOverview from '@/components/UserProfileOverview';
import UsersOverviewDetails from '@/components/UsersOverviewDetails';

const UserDetails = () => {
  return (
    <div className="relative w-full h-full userDetails">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <UserProfileOverview />

        <UsersOverviewDetails />
      </div>
    </div>
  );
};

export default UserDetails;
