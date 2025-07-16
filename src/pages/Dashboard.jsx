
import { withRole } from '../hoc/withRole';
import AdminPanel from '../component/AdminPanel';
import UserProfile from '../component/UserProfile';
import { useRoles } from '../contexts/RoleContext';

const AdminPanelWithRole = withRole(AdminPanel, ['admin']);
const UserProfileWithRole = withRole(UserProfile, ['admin', 'user']);

const Dashboard = () => {
  const { roles } = useRoles();

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Current Roles: {roles.join(', ')}</h3>

      <UserProfileWithRole />
      <AdminPanelWithRole />
    </div>
  );
};

export default Dashboard;
