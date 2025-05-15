import { Link } from 'react-router-dom';
import './index.scss';
import { FaHome, FaPlus } from 'react-icons/fa';
import { MdHistory } from 'react-icons/md';
import { FaPerson } from 'react-icons/fa6';
import { CiLogout } from 'react-icons/ci';
import { MdOutlineUpcoming } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { account } from '../../../lib/appwriteConfig.js';
import { useUser } from '../../../context/index.js';
import {toast} from 'react-toastify';

const DashboardSidebar = () => {

    const navigate = useNavigate();
    const { user, setUser } = useUser(); // Get both user and setUser from context
    
    const handleLogout = async () => {
        try {
            await account.deleteSession('current'); // Logs out current session
            setUser(null);                          // Clear user from context using setUser function
            navigate('/');
            toast.success('Logged out successfully!');
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return (
        <div className="dashboard-sidebar">
            <div className="sidebar_logo">
                <Link to="/dashboard">
                    <span>
                        Zafique
                    </span>
                </Link>
            </div>
            <ul>
                <li>
                    <FaPlus />
                    <Link to="/dashboard/add-property">
                        Book a cleaner
                    </Link>
                </li>
                <li>
                    <FaHome />
                    <Link to="/dashboard/add-property">
                        My properties
                    </Link>
                </li>
                <li>
                    <MdHistory />
                    <Link to="/dashboard/library">
                        Booking history
                    </Link>
                </li>
                <li>
                    <MdOutlineUpcoming />
                    <Link to="/dashboard/library">
                        Upcoming cleaning
                    </Link>
                </li>
                <li>
                    <FaPerson />
                    <Link to="/dashboard/profile">
                        User profile
                    </Link>
                </li>
                <li className="sidebar-logout" onClick={handleLogout}>
                    <CiLogout />
                    <span>
                        Logout
                    </span>
                </li>
            </ul>
            {/* <div className="sidebar-record__btn">
                <button>
                    <CiVideoOn />
                    <span>
                        Book a cleaner
                    </span>
                </button>
            </div> */}
        </div>
    )
}

export default DashboardSidebar;