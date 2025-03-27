import { Table } from '@/components/table';
import { useStockListQuery } from '@/hooks/stock';
import { useState } from 'react';
import { PAGINATION_COUNT } from '@/constant/pagination';
import { ITable } from '@/types/interface/table';
import { IStock } from '@/types/model';

const columnList: ITable[] = [
  { key: 'marketType', title: '타입' },
  { key: 'code', title: '종목코드' },
  { key: 'companyName', title: '회사명' },
  { key: 'ceo', title: '대표' },
  { key: 'industry', title: '업종' },
  { key: 'products', title: '상품' },
  { key: 'listingAt', title: '상장일' },
];

export const StockTable = () => {
  const [page, setPage] = useState(1);

  const stockListQuery = useStockListQuery({ page, count: PAGINATION_COUNT });

  return (
    <Table<IStock>
      dataList={stockListQuery.data?.stocks}
      columnList={columnList}
      total={stockListQuery.data?.total}
      page={page}
      setPage={setPage}
    />
  );
};
