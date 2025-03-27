import { useQuery } from '@tanstack/react-query';
import BoardApi from '@/api/board/board.api';

interface IProps {
  pageParam: number;
}

export const useBoardListQuery = (props: IProps) => {
  const { pageParam } = props;

  return useQuery({
    queryKey: ['board-list'],
    queryFn: async () => BoardApi.getBoardList(pageParam),
    // select: (res) => {
    //   const { boards, total } = res.data.data;
    //
    //   return { boards, total };
    // },
  });
};
