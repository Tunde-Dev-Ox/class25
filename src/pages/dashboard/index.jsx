import './index.scss';
import {Link} from 'react-router-dom';
import DashboardLayout from '../../components/layouts/dashboardLayout';
import { useEffect, useState } from 'react';
import { account } from '/src/lib/appwriteConfig';



const Dashboard = () => {
   const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await account.get();
        setUser(userData);

        if (userData.name) {
          const firstNameOnly = userData.name.split(' ')[0];
          setFirstName(firstNameOnly);
        }
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <DashboardLayout>
      <div className="dashboard-main">
          <div className="dashboard-empty-state">
            <img src="/people.svg" alt="empty state" />
            <h2>
              Hi, {firstName ? firstName : 'there'}! Let us handle your cleaning needs.
            </h2>
            <p>
              Book a cleaner for your short-let or Airbnb property in just a few clicks.
            </p>
            <button className='dashboard__start-recording'>
               <Link to="/dashboard/add-property">
                  {/* <FaPlus className='dashboard__start-recording-icon' /> */}
                  Get Started
               </Link>
            </button>
          </div>
      </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;