import { useState } from 'react';
import PageHandler from './PageHandler';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Dashboard = () => {
  const [ theme, setTheme ] = useState<string>('light') ;

  const toggleDisplayMode = () => { 
    setTheme( (theme: string) => (theme === 'light' ? 'dark' : 'light'))
  }

  
  return (
    <ThemeContext.Provider value={{theme, toggleDisplayMode}}>
    <div id={theme}>
      <PageHandler header>
      <div  className={`${theme === 'dark' ? 'body' : 'body'} h-[93vh]`}>
        <Outlet />
      </div>
      
      </PageHandler>
   
    </div>
    </ThemeContext.Provider>

  );
};

export default Dashboard;
