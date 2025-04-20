import React, { useState } from 'react';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="dashBoard flex relative w-full h-full">
      <AdminDashboard isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="mainCont flex flex-grow flex-col min-w-0 min-h-screen">
        <div className="flex w-full">
          <h1 className="text-3xl">HEllo</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
