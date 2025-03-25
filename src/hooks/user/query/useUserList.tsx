import { useQuery } from '@tanstack/react-query';
import UserApi from '@/api/user/user.api';

interface IProps {
  pageParam: number;
}

export const useUserList = (props: IProps) => {
  const { pageParam } = props;

  return useQuery({
    queryKey: ['user-list'],
    queryFn: async () => UserApi.getUserList(pageParam),
    select: (res) => {
      const { users, total } = res.data.data;

      return { users, total };
    },
  });
};
