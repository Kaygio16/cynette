import { useState } from 'react';
import PageHandler from './PageHandler';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const { theme, setTheme} = useState('');

  const toggleDisplayMode = () => { 
    setTheme( (theme: string) => (theme === 'light' ? 'dark' : 'light'))
  }
  return (
    <div id={theme}>
      <PageHandler header>
      <div>
        <Outlet />
      </div>
      </PageHandler>
   
    </div>
  );
};

export default Dashboard;
