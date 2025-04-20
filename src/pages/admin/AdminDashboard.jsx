import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="dashBoard flex relative w-full h-full">
      <AdminSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="mainCont flex flex-grow flex-col min-w-0 min-h-screen">
        <div className="flex w-full">
          <h1 className="text-3xl">HEllo</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
