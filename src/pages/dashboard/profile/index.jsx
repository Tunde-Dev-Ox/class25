import DashboardLayout from '../../../components/layouts/dashboardLayout';
import './index.scss';
import { account } from '../../../lib/appwriteConfig';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const Profile = () => {
    
     const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (err) {
        setError('Failed to load user data');
        toast.error('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleDeactivateAccount = async () => {
    const confirmDeactivation = window.confirm(
      'Are you sure you want to deactivate your account? This action cannot be undone.'
    );
    if (confirmDeactivation) {
      try {
        await account.delete(); // Deactivates the user account
        toast.success('Your account has been deactivated.');
        window.location.href = '/'; // Redirect to home or login page after deactivation
      } catch (err) {
        toast.error('Failed to deactivate account!');
        console.error('Deactivation error:', err);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


    return (
        <DashboardLayout>
            <div className="user-profile">
      <div className="profile-header">
        <h2>Your Profile</h2>
      </div>

      <div className="profile-details">
        <div className="profile-picture">
          <img src={user.avatar || '/avatar.svg'} alt="Profile" />
        </div>
        <p><strong>Name:</strong> {user.name || 'No Name Provided'}</p>
        <p><strong>Email:</strong> {user.email || 'No Email Provided'}</p>
        <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>

      <div className="profile-actions">
        {/* <button className="btn-update">Update Profile</button> */}
        <button className="btn-deactivate" onClick={handleDeactivateAccount}>
          Deactivate Account
        </button>
      </div>
    </div>
        </DashboardLayout>
    );
}

export default Profile;