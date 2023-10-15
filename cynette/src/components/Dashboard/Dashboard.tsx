import Home from './Home/Home';
import PageHandler from './Shared/PageHandler';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <PageHandler header>
      <div>
        <Outlet />
      </div>
      </PageHandler>
   
    </>
  );
};

export default Dashboard;
