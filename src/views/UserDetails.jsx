import DashboardBanner from "@/components/DashboardBanner";
import UserProfileOverview from "@/components/UserProfileOverview";
import UsersOverviewDetails from "@/components/UsersOverviewDetails";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [latestOrders, setLatestOrders] = useState([]);
  const [userStatistics,setUserStatistics ] = useState({});

  useEffect(() => {
    if (id !== null && id !== undefined) fetchUserDetails();

    return () => {
      setUserDetails({});
    };
  }, []);

  const fetchUserDetails = () => {
    const json = JSON.stringify({ id: "TWc9PQ==" });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_user_details`,
        JSON.stringify({ params: json }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        if (response.data.success === "true") {
          setUserDetails(response.data.user);
          setLatestOrders(response.data.latest_orders)
          setUserStatistics(response.data.user_statistics);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  return (
    <div className="relative w-full h-full userDetails">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <UserProfileOverview UserDetails={userDetails} LatestOrders={latestOrders}/>

        <UsersOverviewDetails UserStatistics={userStatistics}/>
      </div>
    </div>
  );
};

export default UserDetails;
