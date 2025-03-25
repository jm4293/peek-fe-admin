import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { headerList } from '@/common/layout/header-list';
import { useNavigate } from 'react-router-dom';

export const HeaderMobile = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const clickHandler = (params: { event: React.MouseEvent<HTMLDivElement, MouseEvent>; url: string }) => {
    const { event, url } = params;

    event.stopPropagation();

    navigate(url);
    setOpen(false);
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
    <>
      <div onClick={() => setOpen(true)}>{!open && <FaBars className="cursor-pointer" />}</div>

      <div ref={sidebarRef} className={`header-mobile ${open ? 'active' : ''}`}>
        <div className="h-16 mb-20 flex items-center">
          <FaTimes className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>

        <div>
          {headerList.map((el) => {
            return (
              <div className="mb-6 cursor-pointer" onClick={(event) => clickHandler({ event, url: el.url })}>
                {el.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
