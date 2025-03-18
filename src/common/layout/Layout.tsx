import { Outlet } from 'react-router-dom';
import { HeaderMobile } from '@/common/layout/HeaderMobile';
import { useDeviceLayout } from '@/hooks/useDeviceLayout';
import { HeaderDesktop } from '@/common/layout/HeaderDesktop';

export const Layout = () => {
  const { isMobile } = useDeviceLayout();

  return (
    <div className="layout">
      <div className="header-container">{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};
