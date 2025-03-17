import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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

      <div ref={sidebarRef} className={`sidebar ${open ? 'active' : ''}`}>
        <div className="h-16 flex items-center">
          <FaTimes className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
};
