import { IStockListDto } from '@/types/dto';
import StockApi from '@/api/stock/stock.api';
import { useQuery } from '@tanstack/react-query';

interface IProps extends IStockListDto {}

export const useStockListQuery = (props: IProps) => {
  return useQuery({
    queryKey: ['stock-list', props.page],
    queryFn: () => StockApi.getStockList(props),
    select: (res) => {
      const { stocks, total } = res.data.data;

      return { stocks, total };
    },
  });
};
