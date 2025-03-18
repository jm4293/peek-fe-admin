import { headerList } from '@/common/layout/header-list';
import { useNavigate } from 'react-router-dom';

export const HeaderDesktop = () => {
  const navigate = useNavigate();

  const onClickHandler = (params: { event: React.MouseEvent<HTMLDivElement, MouseEvent>; url: string }) => {
    const { event, url } = params;

    event.stopPropagation();

    navigate(url);
  };

  return (
    <div className="header-desktop">
      <div className="mr-20">
        <p>로고</p>
      </div>

      <div className="flex">
        {headerList.map((el) => {
          return (
            <div className="mr-6 cursor-pointer" onClick={(event) => onClickHandler({ event, url: el.url })}>
              {el.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
