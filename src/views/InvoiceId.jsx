import React from 'react';

import DashboardBanner from '@/components/DashboardBanner';

const InvoiceId = () => {
  return (
    <div className="relative w-full h-full ticketId">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="flex w-full h-full bg-white rounded-lg lg:p-10">
          invoice ID
        </div>
      </div>
    </div>
  );
};

export default InvoiceId;
