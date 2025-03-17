import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="layout">
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};
