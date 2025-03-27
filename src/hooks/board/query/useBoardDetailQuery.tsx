import { useQuery } from '@tanstack/react-query';
import BoardApi from '@/api/board/board.api';

interface IProps {
  boardSeq: number;
}

export const useBoardDetailQuery = (props: IProps) => {
  const { boardSeq } = props;

  return useQuery({
    queryKey: ['board-detail', boardSeq],
    queryFn: async () => BoardApi.getBoardDetail(boardSeq),
    // select: (res) => {
    //   const { board } = res.data.data;
    //
    //   return { board };
    // },
  });
};
