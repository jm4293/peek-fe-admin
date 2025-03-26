import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { headerList } from '@/common/layout/header-list';
import { useNavigate } from 'react-router-dom';
import { Text } from '@/components/text';
import { useAuthMutation } from '@/hooks/auth';

export const HeaderMobile = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { logoutMutation } = useAuthMutation();

  const clickHandler = (url: string) => {
    navigate(url);
    setOpen(false);
  };

  const logoutHandler = () => {
    logoutMutation.mutate();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div onClick={() => setOpen(true)}>{!open && <FaBars className="cursor-pointer" />}</div>

      {open && <div className="header-mobile-overlay" onClick={() => setOpen(false)}></div>}

      <div ref={sidebarRef} className={`header-mobile ${open ? 'active' : ''}`}>
        <div className="h-16 flex items-center">
          <FaTimes className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>

        <div className="w-full h-48 flex flex-col justify-between">
          <div>
            {headerList.map((el) => {
              return <Text value={el.name} color="#000000" className="mb-6" onClick={() => clickHandler(el.url)} />;
            })}
          </div>

          <Text value="로그아웃" color="#F87171" className="whitespace-nowrap" onClick={logoutHandler} />
        </div>
      </div>
    </div>
  );
};
