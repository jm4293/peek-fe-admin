import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/common/layout/Sidebar';
import { useDeviceLayout } from '@/hooks/useDeviceLayout';
import { Header } from '@/common/layout/Header';

export const Layout = () => {
  const { isMobile } = useDeviceLayout();

  return (
    <div className="layout">
      <div className="header-container">{isMobile ? <Sidebar /> : <Header />}</div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};
