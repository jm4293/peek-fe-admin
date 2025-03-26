import { headerList } from '@/common/layout/header-list';
import { useNavigate } from 'react-router-dom';
import { Text } from '@/components/text';
import { useAuthMutation } from '@/hooks/auth';

export const HeaderDesktop = () => {
  const navigate = useNavigate();

  const { logoutMutation } = useAuthMutation();

  const logoutHandler = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="header-desktop">
      <div className="mr-20">
        <p>로고</p>
      </div>

      <div className="w-full flex justify-center items-center">
        {/*{headerList.map((el) => {*/}
        {/*  return (*/}
        {/*    <div className="mr-6 cursor-pointer" onClick={(event) => clickHandler({ event, url: el.url })}>*/}
        {/*      {el.name}*/}
        {/*    </div>*/}
        {/*  );*/}
        {/*})}*/}
        <div className="w-full flex justify-start">
          {headerList.map((el) => {
            return <Text value={el.name} color="#000000" className="mr-6" onClick={() => navigate(el.url)} />;
          })}
        </div>
        <Text value="로그아웃" color="#F87171" className="whitespace-nowrap" onClick={logoutHandler} />
      </div>
    </div>
  );
};
