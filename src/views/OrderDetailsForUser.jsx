import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { getCookie } from '@/func';

import DashboardBanner from '@/components/DashboardBanner';
import UserOrderHistory from '@/components/UserOrderHistory';

const OrderDetailsForUser = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState({});
  const [orderDeliverables, setOrderDeliveables] = useState([]);

  useEffect(() => {
    if (id !== null && id !== undefined) fetchOrderDetails(atob(atob(id)));

    return () => {
      setOrderDetails({});
    };
  }, []);

  const fetchOrderDetails = (order_id) => {
    const json = JSON.stringify({
      token: getCookie('token'),
      order_id: order_id,
    });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_order_details`,
        JSON.stringify({ params: json }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          setOrderDetails(response.data.order_details);
          setOrderDeliveables(response.data.order_deliverables);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  return (
    <div className="relative w-full h-full allOrders">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <UserOrderHistory
          OrderDetails={orderDetails}
          OrderDeliverables={orderDeliverables}
        />
      </div>
    </div>
  );
};

export default OrderDetailsForUser;
