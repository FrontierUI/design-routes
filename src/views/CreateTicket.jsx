import { Link } from 'react-router-dom';
// import { Plus, SquarePen } from 'lucide-react';

import DashboardBanner from '@/components/DashboardBanner';

const CreateTicket = () => {
  return (
    <div className="relative w-full h-full createTicket">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="relative bg-white w-full h-full rounded-lg flex flex-col">
          <div className="bg-primary h-3 w-full rounded-t-lg" />

          <div className="flex relative w-full h-full p-3 lg:p-6"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
