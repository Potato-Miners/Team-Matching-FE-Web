import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Sidebar from 'components/Sidebar/Sidebar';
import TeamHeader from 'components/TeamHeader/TeamHeader';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  if (location.pathname === '/join' || location.pathname === '/login')
    return (
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <div className='wrapper'>
            <div className='contentWrapper'>
              <Outlet />
            </div>
            <Footer />
          </div>
        </RecoilRoot>
      </QueryClientProvider>
    );

  if (location.pathname.indexOf('/myteam/') === 0)
    return (
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <div className='wrapper'>
            <Navbar />
            <div className='teamWrapper'>
              <TeamHeader />
              <div className='teamContentWrapper'>
                <Sidebar />
                <Outlet />
              </div>
            </div>
            <Footer />
          </div>
        </RecoilRoot>
      </QueryClientProvider>
    );
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className='wrapper'>
          <Navbar />
          <div className='contentWrapper'>
            <Outlet />
          </div>
          <Footer />
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
