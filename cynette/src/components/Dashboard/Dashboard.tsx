import { useEffect, useState } from 'react';
import PageHandler from './PageHandler';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Dashboard = () => {
  const storedTheme: string = localStorage.getItem('theme')!;

  useEffect(() => {
    const items = localStorage.setItem('theme', theme);
    if (theme) {
      console.log(items);
    }
  });

  const [theme, setTheme] = useState<string>(storedTheme);

  const toggleDisplayMode = () => {
    setTheme((theme: string) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDisplayMode }}>
      <div id={theme}>
        <PageHandler header>
          <div className={`${theme === 'dark' ? 'body' : 'body'} h-[93vh]`}>
            <Outlet />
          </div>
        </PageHandler>
      </div>
    </ThemeContext.Provider>
  );
};

export default Dashboard;
