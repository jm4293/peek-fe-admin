import { useUserList } from '@/hooks/user';
import { useState } from 'react';
import { Loading } from '@/components/loading';

export const UserList = () => {
  const [pageParam, setPageParam] = useState(1);

  const userList = useUserList({ pageParam });

  return userList.isSuccess ? (
    <div>
      {userList.data.users.map((user) => (
        <div key={user.userSeq}>{user.name}</div>
      ))}
    </div>
  ) : (
    <Loading />
  );
};
